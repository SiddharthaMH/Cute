const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: "/Cute", // Change 'your-repo' to your actual repository name
  assetPrefix: "/Cute",
};
export default nextConfig;
