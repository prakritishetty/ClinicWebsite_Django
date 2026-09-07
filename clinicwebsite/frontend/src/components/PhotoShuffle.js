import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const COLS = 6;
const ROWS = 4;

/**
 * Tile order: alternating squares go first, then the rest, with a diagonal
 * offset on top. That reads as a checkerboard dissolving into the next photo
 * rather than a single flat fade.
 */
const tileDelay = (row, col) => ((row + col) % 2) * 0.26 + (row + col) * 0.045;

const TILES = Array.from({ length: ROWS * COLS }, (_, i) => {
  const row = Math.floor(i / COLS);
  const col = i % COLS;
  return {
    row,
    col,
    delay: tileDelay(row, col),
    // Standard sprite trick: blow the background up to grid size, then offset
    // each tile so together they reassemble one image.
    position: `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`,
  };
});

/** Crossfades through a set of photos with a checkerboard reveal. */
const PhotoShuffle = ({ photos = [], ratio = "4 / 5", alt = "", interval = 6000, style }) => {
  const [pair, setPair] = useState({ prev: 0, curr: 0 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (photos.length < 2) return undefined;
    const id = setInterval(
      () => setPair((p) => ({ prev: p.curr, curr: (p.curr + 1) % photos.length })),
      interval
    );
    return () => clearInterval(id);
  }, [photos.length, interval]);

  // Decode the next photo ahead of time so tiles never reveal a blank frame.
  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [photos]);

  if (!photos.length) return null;

  const goTo = (i) => setPair((p) => ({ prev: p.curr, curr: i }));

  const frame = {
    position: "relative",
    width: "100%",
    aspectRatio: ratio,
    borderRadius: "var(--radius-lg)",
    overflow: "hidden",
    background: "var(--paper-cool)",
    boxShadow: "var(--shadow-soft)",
    ...style,
  };

  return (
    <div style={frame}>
      {/* The photo being replaced stays underneath while the tiles come in. */}
      <img
        src={photos[pair.prev]}
        alt={alt}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />

      <div
        key={pair.curr}
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
        aria-hidden="true"
      >
        {TILES.map((t) => (
          <motion.div
            key={`${t.row}-${t.col}`}
            initial={{ opacity: pair.prev === pair.curr ? 1 : 0 }}
            animate={{ opacity: 1 }}
            // Opacity only, no movement, so the checkerboard is kept even under
            // reduced motion - it just runs quicker.
            transition={{
              duration: reduce ? 0.3 : 0.55,
              delay: reduce ? t.delay * 0.45 : t.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              // Must be quoted: several filenames contain spaces, and an
              // unquoted url() with a space is invalid CSS, so the browser
              // drops the declaration and the tile renders empty.
              backgroundImage: `url(${JSON.stringify(photos[pair.curr])})`,
              backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
              backgroundPosition: t.position,
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

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
              onClick={() => goTo(i)}
              style={{
                width: i === pair.curr ? 20 : 6,
                height: 3,
                border: 0,
                padding: 0,
                cursor: "pointer",
                borderRadius: 99,
                background: i === pair.curr ? "var(--gold)" : "rgba(255,255,255,.65)",
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
