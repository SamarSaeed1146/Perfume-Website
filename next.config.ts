/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // or 'http' if your image URLs start with http
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**", // This path might vary depending on the exact structure, '/a/**' is common for Google profile images. You can start with '/**' if unsure.
      },
      // Add other domains here if you use images from other external sources
      // {
      //   protocol: 'https',
      //   hostname: 'example.com',
      // },
    ],
  },
};

module.exports = nextConfig;
