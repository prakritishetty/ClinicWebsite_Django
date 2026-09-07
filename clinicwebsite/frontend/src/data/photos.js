/**
 * Central photo imports. Filenames here must match the files on disk exactly,
 * including case and spaces - Vercel builds on Linux, where "Clinic.jpeg" and
 * "clinic.jpeg" are different files, so a casing slip builds fine on Windows
 * and then fails in production.
 */

import clinic from "../imagesnew/Clinic.jpeg";
import clinic1 from "../imagesnew/Clinic 1.JPG";
import reception from "../imagesnew/reception.JPG";
import reception1 from "../imagesnew/reception 1.JPG";

import psAndSs from "../imagesnew/PS and SS.jpeg";
import ps from "../imagesnew/PS.jpeg";

import bridge from "../imagesnew/Bridge.jpeg";
import bridge1 from "../imagesnew/bridge 1.jpeg";
import denturesPhoto from "../imagesnew/dentures.JPG";
import alignersPhoto from "../imagesnew/Aligners.jpeg";

import implant1 from "../imagesnew/implant 1.jpg";
import implant2 from "../imagesnew/implant2.JPG";
import implantCrown from "../imagesnew/Implant crown.jpeg";
import implantDrivers from "../imagesnew/Implant drivers.jpeg";

import veneersPre from "../imagesnew/veneers preop.JPG";
import veneersPost from "../imagesnew/veneers postop.JPG";

export const CLINIC_PHOTOS = [clinic, clinic1, reception, reception1];

export const DOCTORS_PHOTO = psAndSs;
export const PRATIKSHA_PHOTO = ps;

export const CROWN_PHOTOS = [bridge, bridge1];
// To add the AI-generated crown photo: drop the file in src/imagesnew, import it
// above with its exact filename, and append it to CROWN_PHOTOS.
export const DENTURE_PHOTOS = [denturesPhoto];
export const ALIGNER_PHOTOS = [alignersPhoto];
export const IMPLANT_PHOTOS = [implant1, implant2, implantCrown, implantDrivers];

export const VENEERS_BEFORE = veneersPre;
export const VENEERS_AFTER = veneersPost;
