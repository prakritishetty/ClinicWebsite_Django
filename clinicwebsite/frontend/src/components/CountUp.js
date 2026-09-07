import React, { useEffect, useState, useRef } from "react";
import { useMotionValue, useTransform, animate, useInView } from "framer-motion";

const CountUp = ({ to, duration = 2, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => rounded.on("change", setDisplayValue), [rounded]);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export default CountUp;
