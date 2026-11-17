// Static export so the site can be hosted on GitHub Pages.
// BASE_PATH is set only when building for Pages (the site lives at /<repo>/);
// local `npm run dev` keeps serving from the root.
const basePath = process.env.BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three'],
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
