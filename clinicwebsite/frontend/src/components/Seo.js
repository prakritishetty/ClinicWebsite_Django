import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { DEFAULT_META, ROUTE_META, SITE_URL } from "../data/seo.js";

/**
 * Sets the title, description and canonical URL for whichever route is showing.
 * Rendered once inside the router rather than per page, so a new route only
 * needs an entry in ROUTE_META.
 *
 * Open Graph tags live in public/index.html instead: WhatsApp, Instagram and
 * Facebook scrapers do not execute JavaScript, so anything Helmet writes here
 * is invisible to them.
 */
const RouteSeo = () => {
  const { pathname } = useLocation();
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : "/";
  const meta = ROUTE_META[path] || DEFAULT_META;

  // Unknown paths render the home page, so point their canonical at the home
  // page too rather than minting a canonical for a URL that has no content.
  const canonical = SITE_URL + (ROUTE_META[path] ? path : "/");

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonical} />
    </Helmet>
  );
};

export default RouteSeo;
