/**
 * Per-route page metadata. A single-page app serves the same index.html for
 * every URL, so without this Google sees one identical title and description
 * across ~29 pages and has nothing to distinguish them in search results.
 *
 * Keys are exact pathnames. Anything not listed falls back to DEFAULT_META.
 */

// Change this one line when the custom domain goes live; canonical tags,
// sitemap.xml and the share cards all read from it.
export const SITE_URL = "https://dr-sandhyas-total-dental-care.vercel.app";

export const SITE_NAME = "Dr Sandhya's Total Dental Care";

const SUFFIX = ` | ${SITE_NAME}`;

export const DEFAULT_META = {
  title: "Dentist in Mulund West, Mumbai" + SUFFIX,
  description:
    "General, cosmetic and implant dentistry in Mulund West, Mumbai. Led by Dr. Sandhya Shetty (BDS, Gold Medalist) and Dr. Pratiksha Shetty (BDS, MDS Prosthodontics). Book online.",
};

/**
 * Titles lead with the search phrase a patient would actually type, because
 * Google truncates around 60 characters and weights the opening words most.
 */
export const ROUTE_META = {
  "/": DEFAULT_META,

  "/about": {
    title: "Our Dentists & Clinic in Mulund West" + SUFFIX,
    description:
      "Meet Dr. Sandhya Shetty and Dr. Pratiksha Shetty, and see the clinic in Mulund West. Over 30 years of general, cosmetic and prosthodontic dentistry in Mumbai.",
  },
  "/testimonials": {
    title: "Patient Reviews \u00b7 Mulund West" + SUFFIX,
    description:
      "Unedited reviews from patients of Dr Sandhya's Total Dental Care, Mulund West. Read what they had to say about their treatment.",
  },
  "/book": {
    title: "Book a Dentist Appointment in Mulund West" + SUFFIX,
    description:
      "Choose a time that suits you and request an appointment at our Mulund West clinic. Confirmation and a calendar invite arrive by email.",
  },

  "/general": {
    title: "General Dentistry in Mulund West" + SUFFIX,
    description:
      "Check-ups, cleaning, tooth-coloured fillings, root canals, crowns, dentures, gum care and night guards in Mulund West, Mumbai.",
  },
  "/cosmetic": {
    title: "Cosmetic Dentistry in Mulund West" + SUFFIX,
    description:
      "Smile design, porcelain veneers, teeth whitening, clear aligners and gummy smile correction in Mulund West, Mumbai.",
  },
  "/surgical": {
    title: "Dental Implants & Oral Surgery in Mulund West" + SUFFIX,
    description:
      "Dental implants, same-day implants, implant-supported dentures and tooth extractions in Mulund West, Mumbai.",
  },

  "/cleaning": {
    title: "Teeth Cleaning & Scaling in Mulund West" + SUFFIX,
    description:
      "Professional scaling and polishing to remove tartar, treat bleeding gums and freshen breath. Mulund West, Mumbai.",
  },
  "/bondingfillings": {
    title: "Tooth-Coloured Fillings in Mulund West" + SUFFIX,
    description:
      "Composite fillings and bonding that match your natural tooth shade - no metal, no visible margin. Mulund West, Mumbai.",
  },
  "/rootcanal": {
    title: "Root Canal Treatment in Mulund West" + SUFFIX,
    description:
      "Painless root canal therapy to save an infected tooth, with modern rotary instruments. Mulund West, Mumbai.",
  },
  "/crowns": {
    title: "Dental Crowns & Caps in Mulund West" + SUFFIX,
    description:
      "Custom, colour-matched crowns that restore the shape and strength of a damaged tooth. Mulund West, Mumbai.",
  },
  "/bridges": {
    title: "Dental Bridges in Mulund West" + SUFFIX,
    description:
      "Fixed bridges to replace one or more missing teeth and restore your bite. Mulund West, Mumbai.",
  },
  "/dentures": {
    title: "Dentures in Mulund West" + SUFFIX,
    description:
      "Full and partial dentures, moulded to your gums for a secure, natural-looking fit. Mulund West, Mumbai.",
  },
  "/deepscaling": {
    title: "Gum Disease Treatment & Deep Cleaning in Mulund West" + SUFFIX,
    description:
      "Treatment for bleeding gums, gingivitis and periodontitis, including deep scaling and root planing. Mulund West, Mumbai.",
  },
  "/nightguards": {
    title: "Night Guards for Teeth Grinding in Mulund West" + SUFFIX,
    description:
      "Custom night guards that protect your teeth from grinding and clenching, and ease jaw pain. Mulund West, Mumbai.",
  },

  "/smilemakeover": {
    title: "Smile Design & Makeover in Mulund West" + SUFFIX,
    description:
      "A planned combination of veneers, crowns, whitening and gum contouring, designed around your face. See before and after photos.",
  },
  "/veneers": {
    title: "Porcelain Veneers in Mulund West" + SUFFIX,
    description:
      "Ultra-thin porcelain veneers for discoloured, chipped or uneven front teeth. See real before and after photos. Mulund West, Mumbai.",
  },
  "/teethwhitening": {
    title: "Teeth Whitening in Mulund West" + SUFFIX,
    description:
      "Professional in-clinic teeth whitening for a visibly brighter smile, safely and without damaging enamel. Mulund West, Mumbai.",
  },
  "/invisalign": {
    title: "Clear Aligners & Invisible Braces in Mulund West" + SUFFIX,
    description:
      "Straighten your teeth with removable clear aligners - no metal brackets or wires. Mulund West, Mumbai.",
  },
  "/gummysmilereduction": {
    title: "Gummy Smile Correction in Mulund West" + SUFFIX,
    description:
      "Gum contouring to rebalance a smile that shows too much gum. Mulund West, Mumbai.",
  },
  "/fullmouthrehab": {
    title: "Full Mouth Rehabilitation in Mulund West" + SUFFIX,
    description:
      "Rebuilding worn, broken or missing teeth across the whole mouth to restore function and appearance. See before and after photos.",
  },

  "/implants": {
    title: "Dental Implants in Mulund West" + SUFFIX,
    description:
      "Permanent titanium implants to replace missing teeth, placed by an MDS prosthodontist. Mulund West, Mumbai.",
  },
  "/samedayimplants": {
    title: "Same-Day Dental Implants in Mulund West" + SUFFIX,
    description:
      "Immediate-load implants that leave you with teeth the same day. See before and after photos. Mulund West, Mumbai.",
  },
  "/implantsupporteddentures": {
    title: "Implant-Supported Dentures in Mulund West" + SUFFIX,
    description:
      "Dentures anchored to implants so they never slip while eating or speaking. Mulund West, Mumbai.",
  },
  "/overdentures": {
    title: "Overdentures in Mulund West" + SUFFIX,
    description:
      "Removable overdentures that clip onto implants or retained roots for comfort and stability. Mulund West, Mumbai.",
  },
  "/extractions": {
    title: "Tooth Extraction in Mulund West" + SUFFIX,
    description:
      "Gentle tooth and wisdom tooth removal under local anaesthesia, with clear aftercare. Mulund West, Mumbai.",
  },
  "/bonegraft": {
    title: "Dental Bone Grafting in Mulund West" + SUFFIX,
    description:
      "Bone grafting to rebuild jaw bone so an implant has a solid foundation. Mulund West, Mumbai.",
  },
};

/** Routes worth submitting to Google. /doctorlogin is deliberately excluded. */
export const SITEMAP_PATHS = Object.keys(ROUTE_META);
