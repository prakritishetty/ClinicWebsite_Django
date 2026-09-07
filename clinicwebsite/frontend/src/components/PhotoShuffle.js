import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

/** Crossfades through a set of photos. A single photo just renders still. */
const PhotoShuffle = ({ photos = [], ratio = "4 / 5", alt = "", interval = 5000, style }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2 || prefersReducedMotion()) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), interval);
    return () => clearInterval(id);
  }, [photos.length, interval]);

  if (!photos.length) return null;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: "var(--paper-cool)",
        boxShadow: "var(--shadow-soft)",
        ...style,
      }}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={photos[index]}
          src={photos[index]}
          alt={alt}
          loading="lazy"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AnimatePresence>

      {photos.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: ".9rem",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: ".4rem",
            zIndex: 2,
          }}
        >
          {photos.map((p, i) => (
            <button
              key={p}
              type="button"
              aria-label={`Photo ${i + 1}`}
              onClick={() => setIndex(i)}
              style={{
                width: i === index ? 20 : 6,
                height: 3,
                border: 0,
                padding: 0,
                cursor: "pointer",
                borderRadius: 99,
                background: i === index ? "var(--gold)" : "rgba(255,255,255,.65)",
                transition: "width .5s var(--ease), background .5s var(--ease)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoShuffle;
