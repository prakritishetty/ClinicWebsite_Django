/**
 * Review headings imported from Practo arrive with their "Visited For" tags
 * concatenated and no separator, e.g.
 *   "Visited For Scaling / PolishingTeeth WhiteningTeeth - Jewellery"
 * Keep only the first tag: the run-on starts at a lowercase letter that is
 * immediately followed by an uppercase one.
 *
 * Uses lookahead only - lookbehind still breaks parsing on older Safari.
 */
export const cleanHeading = (raw) => {
  if (!raw) return "";
  const trimmed = raw.trim();
  const match = trimmed.match(/^.+?[a-z](?=[A-Z])/);
  return (match ? match[0] : trimmed).trim();
};
