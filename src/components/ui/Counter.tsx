"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  to: number;
};

/**
 * The original theme drives this number with the Odometer.js plugin
 * (`js/odometer.min.js`) triggered by jQuery's `.appear()` — both jQuery
 * dependencies we're deliberately not pulling in. This is a native
 * count-up replacement (IntersectionObserver + requestAnimationFrame)
 * rendered inside the exact same `.odometer` markup so `style.css`'s
 * `.counter_value .odometer` typography still applies unchanged.
 */
export default function Counter({ to }: CounterProps) {
  const decimals = (String(to).split(".")[1] ?? "").length;
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 1400;
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const raw = progress * to;
            setValue(decimals ? Math.round(raw * 10 ** decimals) / 10 ** decimals : Math.round(raw));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [to, decimals]);

  return (
    <span ref={ref} className="odometer">
      {value}
    </span>
  );
}
