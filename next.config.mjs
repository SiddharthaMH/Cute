/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: "/Cute", // Change 'Cute' to match your repository name
  assetPrefix: "/Cute",
};
export default nextConfig;
