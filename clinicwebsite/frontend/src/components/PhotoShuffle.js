import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

const FEATHER = 26; // width of the soft edge, in % of the frame

/**
 * Photos flow into one another behind a soft-edged wipe: a gradient mask sweeps
 * across the incoming image so it arrives gradually from one side rather than
 * fading in on the spot. The outgoing photo stays underneath throughout, so
 * there is never a moment where nothing is on screen.
 */
const PhotoShuffle = ({ photos = [], ratio = "4 / 5", alt = "", interval = 8000, style }) => {
  const [pair, setPair] = useState({ prev: 0, curr: 0 });
  const reduce = useReducedMotion();

  const progress = useMotionValue(1);

  // Black reveals, transparent hides. Sweeping the pair of stops from off one
  // edge to off the other walks the feathered boundary across the frame.
  const mask = useTransform(progress, (p) => {
    const edge = -FEATHER + p * (100 + FEATHER * 2);
    return `linear-gradient(105deg, #000 ${edge}%, rgba(0,0,0,0) ${edge + FEATHER}%)`;
  });
  const scale = useTransform(progress, [0, 1], reduce ? [1, 1] : [1.05, 1]);

  useEffect(() => {
    if (pair.prev === pair.curr) {
      progress.set(1);
      return undefined;
    }
    progress.set(0);
    // Only the gentle zoom is dropped for reduced motion; the wipe itself moves
    // no content, so it stays slow enough to read as a flow rather than a cut.
    const controls = animate(progress, 1, {
      duration: reduce ? 2.2 : 2.9,
      ease: [0.65, 0, 0.35, 1],
    });
    return () => controls.stop();
  }, [pair, progress, reduce]);

  useEffect(() => {
    if (photos.length < 2) return undefined;
    const id = setInterval(
      () => setPair((p) => ({ prev: p.curr, curr: (p.curr + 1) % photos.length })),
      interval
    );
    return () => clearInterval(id);
  }, [photos.length, interval]);

  useEffect(() => {
    photos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [photos]);

  if (!photos.length) return null;

  const layer = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

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
      <img src={photos[pair.prev]} alt={alt} style={layer} />

      <motion.img
        key={pair.curr}
        src={photos[pair.curr]}
        alt=""
        aria-hidden="true"
        style={{
          ...layer,
          scale,
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />

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
              onClick={() => setPair((c) => ({ prev: c.curr, curr: i }))}
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
