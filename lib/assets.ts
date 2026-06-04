// Single source of truth for the site's photography.
//
// HOW TO ADD YOUR OWN PHOTOS
// --------------------------
// 1. Drop your image files into the `public/images/` folder
//    (e.g. warehouse-exterior.jpg, forklift-loading.jpg, ...).
// 2. Update the matching path below to point at your file, e.g.:
//        warehouseExterior: "/images/warehouse-exterior.jpg",
// 3. That's it — every page that uses the image updates automatically.
//
// The site ships with on-brand SVG placeholders so it looks complete
// before you add the real photos. See public/images/README.md.

export const IMAGES = {
  /** Photo 1 — blue warehouse exterior with truck and pallets. */
  warehouseExterior: "/images/warehouse-exterior.svg",
  /** Photo 2 — green forklift moving stacked jute sacks of cashews. */
  forkliftLoading: "/images/forklift-loading.svg",
  /** Photo 3 — workers bagging raw cashew nuts in export bags. */
  workersBagging: "/images/workers-bagging.svg",
  /** Photo 4 — inspector with clipboard beside stacked sacks. */
  inspectorClipboard: "/images/inspector-clipboard.svg",
} as const;

export type ImageKey = keyof typeof IMAGES;
