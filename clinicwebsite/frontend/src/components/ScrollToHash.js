import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * A browser only auto-scrolls to #anchor when the element is already in the
 * document. React renders after navigation, so a link straight to
 * /testimonials#write-a-review - the QR code at reception - would otherwise
 * land at the top of the page.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    // One frame is not always enough: photos and Firestore reviews above the
    // anchor change the page height as they arrive.
    let frame = 0;
    const tries = [0, 120, 400, 900];
    const timers = tries.map((delay) =>
      setTimeout(() => {
        frame = requestAnimationFrame(() => {
          document
            .getElementById(hash.slice(1))
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }, delay)
    );

    return () => {
      timers.forEach(clearTimeout);
      cancelAnimationFrame(frame);
    };
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
