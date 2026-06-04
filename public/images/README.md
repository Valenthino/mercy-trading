# Site photography

The real Mercy Trading photos are installed in this folder as optimised `.jpg`
files (resized to 1920 px wide for fast loading). They are referenced from
[`lib/assets.ts`](../../lib/assets.ts).

## The four images

| File                       | Where it appears                                  | Photo                                        |
| -------------------------- | ------------------------------------------------- | -------------------------------------------- |
| `warehouse-exterior.jpg`   | Home hero, About hero, Contact hero               | Blue warehouse exterior with truck & pallets |
| `forklift-loading.jpg`     | Home intro, Services hero, Products origin         | Green ZOOMLION forklift moving sacks         |
| `workers-bagging.jpg`      | Home network teaser, About story, Products hero    | Workers bagging raw cashew nuts              |
| `inspector-clipboard.jpg`  | Home "why us", Network hero                        | Inspector with clipboard beside the sacks    |

## Replacing a photo later

1. Drop the new file into this folder (any name is fine).
2. Point the matching entry in [`lib/assets.ts`](../../lib/assets.ts) at it.
3. Save — every page that uses the image updates automatically.

## Tips

- **Size:** keep photos around **1600–1920 px wide** and compressed (under ~600 KB).
  On macOS you can resize with: `sips -Z 1920 -s formatOptions 72 input.jpg --out output.jpg`
- **Orientation:** most slots are landscape; the home "why us" slot is portrait (4:5).
  Landscape photos crop cleanly everywhere thanks to `object-cover`.
