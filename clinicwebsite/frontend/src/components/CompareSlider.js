import React, { useCallback, useRef, useState } from "react";
import Placeholder from "./Placeholder";

/**
 * Drag/keyboard before-and-after comparison. Renders the shared Placeholder
 * until real clinical photography is dropped in via `beforeSrc` / `afterSrc`.
 */
const CompareSlider = ({
  ratio = "4 / 3",
  beforeNote,
  afterNote,
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
}) => {
  const ref = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const move = useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const next = ((clientX - left) / width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    move(e.clientX);
  };

  const onPointerMove = (e) => {
    if (dragging.current) move(e.clientX);
  };

  const onPointerUp = (e) => {
    dragging.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  const pane = (src, note, label) =>
    src ? (
      <img
        src={src}
        alt={label}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    ) : (
      // `minimal` keeps the label/filename out of the clipped area - it is shown
      // in the corner tag instead, so the two halves never collide at the seam.
      <Placeholder
        ratio="auto"
        minimal
        label={label}
        note={note}
        style={{ height: "100%", borderRadius: 0 }}
      />
    );

  return (
    <div
      ref={ref}
      className="compare"
      style={{ aspectRatio: ratio, "--pos": `${pos}%` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onKeyDown={onKeyDown}
      role="slider"
      tabIndex={0}
      aria-label={`${beforeLabel} and ${afterLabel} comparison`}
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="compare__pane compare__pane--after">
        {pane(afterSrc, afterNote, afterLabel)}
      </div>
      <div className="compare__pane compare__pane--before">
        {pane(beforeSrc, beforeNote, beforeLabel)}
      </div>

      <span className="compare__tag compare__tag--l">
        {beforeLabel}
        {!beforeSrc && beforeNote ? ` · ${beforeNote.split("/").pop()}` : ""}
      </span>
      <span className="compare__tag compare__tag--r">
        {afterLabel}
        {!afterSrc && afterNote ? ` · ${afterNote.split("/").pop()}` : ""}
      </span>

      <div className="compare__handle">
        <span className="compare__knob">‹ ›</span>
      </div>
    </div>
  );
};

export default CompareSlider;
