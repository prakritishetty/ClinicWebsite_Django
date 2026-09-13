/**
 * Single source of truth for the service menus (navbar, home page, category pages).
 * Every `link` below resolves to a route that actually exists in index.js -
 * the previous menus pointed at ~30 URLs that had no route and rendered blank.
 */

/** Where every "Book" button goes. WhatsApp is kept for direct conversation. */
export const BOOKING_URL = "/book";

export const WHATSAPP =
  "https://wa.me/919833630985?text=Hello%20Dr%20Sandhya,%20I%27m%20interested%20in%20booking%20an%20appointment%20at%20your%20clinic";

export const PHONE = "+91 98336 30985";

/**
 * The clinic's Google listing. GOOGLE_REVIEWS_URL opens the listing itself -
 * the id is the CID from the map embed in FooterUtil, converted from hex to
 * decimal. GOOGLE_WRITE_REVIEW_URL is the short link from the Business Profile
 * dashboard, which drops straight into the review box.
 */
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=11734218237412218568";
export const GOOGLE_WRITE_REVIEW_URL = "https://g.page/r/CciW3f1QUdiiEAE/review";

export const CATEGORIES = [
  {
    id: "general",
    title: "General",
    link: "/general",
    tagline: "Healthy teeth, kept that way.",
    items: [
      { name: "Check-ups & Cleaning", link: "/cleaning" },
      { name: "Tooth-Coloured Fillings", link: "/bondingfillings" },
      { name: "Root Canal Treatment", link: "/rootcanal" },
      { name: "Crowns & Bridges", link: "/crowns" },
      { name: "Dentures", link: "/dentures" },
      { name: "Gum Care", link: "/deepscaling" },
      { name: "Night Guards", link: "/nightguards" },
    ],
  },
  {
    id: "cosmetic",
    title: "Cosmetic",
    link: "/cosmetic",
    tagline: "Your smile, quietly perfected.",
    items: [
      { name: "Smile Design", link: "/smilemakeover" },
      { name: "Veneers", link: "/veneers" },
      { name: "Teeth Whitening", link: "/teethwhitening" },
      { name: "Clear Aligners", link: "/invisalign" },
      { name: "Gummy Smile Reduction", link: "/gummysmilereduction" },
      { name: "Full Mouth Rehabilitation", link: "/fullmouthrehab" },
    ],
  },
  {
    id: "surgical",
    title: "Surgical & Implants",
    link: "/surgical",
    tagline: "Rebuilt with precision.",
    items: [
      { name: "Dental Implants", link: "/implants" },
      { name: "Same-Day Implants", link: "/samedayimplants" },
      { name: "Implant-Supported Dentures", link: "/implantsupporteddentures" },
      { name: "Extractions", link: "/extractions" },
    ],
  },
];
