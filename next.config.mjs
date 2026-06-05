/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard Next.js server build: `next build` produces the .next directory
  // and `next start` serves it. This is what the GoDaddy Node.js host runs.
  // (We intentionally do NOT use `output: "export"` here, because static
  // export is incompatible with `next start`.)
  images: { unoptimized: true },
  // Don't let lint warnings block a production build.
  eslint: { ignoreDuringBuilds: true },
  trailingSlash: true,
};

export default nextConfig;
