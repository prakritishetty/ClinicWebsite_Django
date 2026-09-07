import React from "react";

/**
 * The single media placeholder used everywhere a photo or video will eventually go.
 * `note` records the original asset path so it can be swapped straight back in.
 */
const Placeholder = ({
  ratio = "4 / 3",
  label = "Photo",
  note,
  dark = false,
  minimal = false,
  className = "",
  style,
  children,
}) => (
  <div
    className={`ph${dark ? " ph--dark" : ""}${className ? ` ${className}` : ""}`}
    style={{ aspectRatio: ratio, ...style }}
    role="img"
    aria-label={note ? `${label} placeholder for ${note}` : `${label} placeholder`}
  >
    <div className="ph__inner">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        stroke={dark ? "#b3cde0" : "#b99247"}
        strokeWidth="1"
        style={{ width: "clamp(22px, 3vw, 34px)", opacity: 0.8 }}
        aria-hidden="true"
      >
        <rect x="3.5" y="7.5" width="33" height="25" rx="2" />
        <circle cx="13" cy="16" r="2.6" />
        <path d="M4 27l9.5-8.5 7 6.2 6-4.8L36 28" />
      </svg>
      {!minimal && <span className="ph__label">{label}</span>}
      {!minimal && note && <span className="ph__note">{note}</span>}
      {children}
    </div>
  </div>
);

export default Placeholder;
