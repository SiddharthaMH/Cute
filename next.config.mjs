const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization
  },
  basePath: "/your-repo", // Change 'your-repo' to your actual repository name
  assetPrefix: "/your-repo",
};
export default nextConfig;
