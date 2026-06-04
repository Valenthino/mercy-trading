# Site photography

This folder holds the images used across the website. The site ships with
**on-brand SVG placeholders** so it looks complete out of the box. Swapping in
your own photos takes two minutes.

## The four images

| File slot                  | Where it appears                                  | Suggested photo                              |
| -------------------------- | ------------------------------------------------- | -------------------------------------------- |
| `warehouse-exterior.*`     | Home hero, About hero, Contact hero               | Blue warehouse exterior with truck & pallets |
| `forklift-loading.*`       | Home intro, Services hero, Products origin        | Green forklift moving sacks of cashews       |
| `workers-bagging.*`        | Home network teaser, About story, Products hero   | Workers bagging raw cashew nuts              |
| `inspector-clipboard.*`    | Home "why us", Network hero                       | Inspector with clipboard beside the sacks    |

## How to use your own photos

1. Add your photo files to this folder, e.g. `warehouse-exterior.jpg`.
2. Open [`lib/assets.ts`](../../lib/assets.ts) and point each entry at your file:

   ```ts
   export const IMAGES = {
     warehouseExterior: "/images/warehouse-exterior.jpg",
     forkliftLoading: "/images/forklift-loading.jpg",
     workersBagging: "/images/workers-bagging.jpg",
     inspectorClipboard: "/images/inspector-clipboard.jpg",
   };
   ```

3. Save — every page that uses the image updates automatically.

## Tips

- **Format:** `.jpg` or `.webp` work well for photos. Keep `.svg` only for graphics.
- **Size:** export at roughly **1600 px wide** and compress (e.g. [squoosh.app](https://squoosh.app)) to keep the site fast. Aim for under ~300 KB each.
- **Orientation:** the hero and most slots are landscape; the "why us" slot is portrait (4:5). Landscape photos crop cleanly everywhere thanks to `object-cover`.
- You can delete the placeholder `.svg` files once your photos are in place.
