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

import scaling from "../imagesnew/Scaling.jpg";
import compositePost from "../imagesnew/Composite filling postop.png";
import rct from "../imagesnew/RCT.jpg";
import bridge1 from "../imagesnew/bridge 1.jpeg";
import denturePhoto from "../imagesnew/Denture.jpg";
import gumCare from "../imagesnew/gum care.png";
import nightGuard from "../imagesnew/ng.png";

import smileDesignPre from "../imagesnew/Smile design preop.png";
import smileDesignPost from "../imagesnew/Smile design postop.png";
import veneersPre from "../imagesnew/veneers preop.jpg";
import veneersPost from "../imagesnew/veneers postop.JPG";
import whiteningPre from "../imagesnew/Whitening pre op.png";
import whiteningPost from "../imagesnew/Whitening post op.png";
import aligners1 from "../imagesnew/Aligners1.jpg";
import gummy1 from "../imagesnew/gummy smile reduction 1.png";
import gummy2 from "../imagesnew/gummy smile reduction 2.png";
import fmrPre from "../imagesnew/FMR preop.JPG";
import fmrPost from "../imagesnew/FMR postop.JPG";

import implant1 from "../imagesnew/implant 1.jpg";
import implantCrown from "../imagesnew/Implant crown.jpeg";
import implantDrivers from "../imagesnew/Implant drivers.jpeg";
import implantPre from "../imagesnew/Implant preop.png";
import implantPost from "../imagesnew/Implant post op.jpg";
import extractionsPhoto from "../imagesnew/extractions.jpg";

export const CLINIC_PHOTOS = [clinic, clinic1, reception, reception1];

export const DOCTORS_PHOTO = psAndSs;
export const PRATIKSHA_PHOTO = ps;

/* General */
export const CLEANING_PHOTOS = [scaling];
export const FILLING_PHOTOS = [compositePost];
export const ROOT_CANAL_PHOTOS = [rct];
export const CROWN_PHOTOS = [bridge1];
export const DENTURE_PHOTOS = [denturePhoto];
export const GUM_CARE_PHOTOS = [gumCare];
export const NIGHT_GUARD_PHOTOS = [nightGuard];

/* Cosmetic */
export const SMILE_DESIGN_BEFORE = smileDesignPre;
export const SMILE_DESIGN_AFTER = smileDesignPost;
export const VENEERS_BEFORE = veneersPre;
export const VENEERS_AFTER = veneersPost;
export const WHITENING_BEFORE = whiteningPre;
export const WHITENING_AFTER = whiteningPost;
export const ALIGNER_PHOTOS = [aligners1];
export const GUMMY_SMILE_PHOTOS = [gummy1, gummy2];
export const FMR_BEFORE = fmrPre;
export const FMR_AFTER = fmrPost;

/* Surgical & implants */
// implant2.JPG deliberately left out of the rotation.
export const IMPLANT_PHOTOS = [implant1, implantCrown];
export const SAME_DAY_IMPLANT_BEFORE = implantPre;
export const SAME_DAY_IMPLANT_AFTER = implantPost;
export const IMPLANT_DENTURE_PHOTOS = [implantDrivers];
export const EXTRACTION_PHOTOS = [extractionsPhoto];
