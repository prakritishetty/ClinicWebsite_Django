/**
 * Writes real HTML for every route into build/, so that crawlers which do not
 * execute JavaScript see the page instead of an empty <div id="root">.
 *
 * Routes come from public/sitemap.xml rather than a second list, so the pages
 * we tell Google about and the pages we prerender cannot drift apart.
 *
 * Failure is deliberately not fatal. If Chromium cannot run wherever this is
 * building, the deploy should still ship the normal single-page app rather
 * than break the live site.
 */

const fs = require("fs");
const path = require("path");

const load = (name) => {
  const mod = require(name);
  return mod.default || mod;
};

const BUILD = path.join(__dirname, "..", "build");
const SITEMAP = path.join(__dirname, "..", "public", "sitemap.xml");

const routes = () => {
  const xml = fs.readFileSync(SITEMAP, "utf8");
  const found = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  return [...new Set(found)];
};

const run = async () => {
  const Prerenderer = load("@prerenderer/prerenderer");
  const PuppeteerRenderer = load("@prerenderer/renderer-puppeteer");

  const list = routes();
  console.log(`prerendering ${list.length} routes`);

  const prerenderer = new Prerenderer({
    staticDir: BUILD,
    renderer: new PuppeteerRenderer({
      // Content sits inside scroll-triggered Reveal wrappers that start at
      // opacity 0. A viewport taller than the page puts everything "in view",
      // so the snapshot captures it already faded in rather than hidden.
      viewport: { width: 1280, height: 6000 },
      // Serial and generous on purpose. Run in parallel and a slower page gets
      // snapshotted before Helmet has written its title or the reveals have
      // faded in, which is silent - the file is produced either way.
      renderAfterTime: 5000,
      maxConcurrentRoutes: 1,
      launchOptions: { args: ["--no-sandbox", "--disable-setuid-sandbox"] },
    }),
  });

  await prerenderer.initialize();
  const rendered = await prerenderer.renderRoutes(list);
  await prerenderer.destroy();

  for (const page of rendered) {
    const dir = path.join(BUILD, page.route);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), page.html.trim());
  }

  console.log(`prerendered ${rendered.length} routes`);
};

run().catch((err) => {
  console.error("prerender skipped:", err.message);
  process.exit(0);
});
