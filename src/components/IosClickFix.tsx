"use client";

import { useEffect } from "react";

/**
 * Fix for a known older-iOS Safari bug: if no element on the page has a
 * "real" onclick handler reachable from <body>, Safari sometimes fails to
 * properly translate taps into click events, so React's onClick handlers
 * on buttons/divs/etc. silently never fire — even though everything else
 * (scroll, animations, rendering) works fine. Attaching one no-op click
 * listener directly to <body> makes Safari treat the whole page as
 * "clickable" and fixes this reliably. Renders nothing.
 */
export default function IosClickFix() {
  useEffect(() => {
    const noop = () => {};
    document.body.addEventListener("click", noop);
    return () => document.body.removeEventListener("click", noop);
  }, []);

  return null;
}