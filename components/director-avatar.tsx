"use client";

import { useEffect, useRef, useState } from "react";
import { IMAGES } from "@/lib/assets";
import { SITE } from "@/lib/site";

/**
 * Shows the Director's headshot if the file exists, otherwise falls back to
 * his initials — so the layout never shows a broken image. Drop the photo at
 * public/images/mohamed-diaby.jpg (see lib/assets.ts) and it appears here.
 *
 * Note: the image can fail to load *before* React hydrates (so the `onError`
 * event is missed); the mount effect catches that already-failed case too.
 */
export function DirectorAvatar() {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
    }
  }, []);

  if (failed || !IMAGES.directorPhoto) {
    return (
      <div className="flex aspect-square w-full max-w-[200px] items-center justify-center rounded-2xl bg-gold-400 font-display text-4xl font-extrabold tracking-tight text-brand-950">
        MLD
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={IMAGES.directorPhoto}
      alt={SITE.director}
      onError={() => setFailed(true)}
      className="aspect-square w-full max-w-[200px] rounded-2xl object-cover ring-2 ring-gold-400/60"
    />
  );
}
