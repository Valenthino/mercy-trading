/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in `out/` so it can be hosted anywhere
  // (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).
  output: "export",
  // Static export cannot use the on-demand image optimizer.
  images: { unoptimized: true },
  // Don't let lint warnings block a production build.
  eslint: { ignoreDuringBuilds: true },
  trailingSlash: true,
};

export default nextConfig;
