// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https", // or 'http' if your image URLs start with http
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/a/**", // This path might vary depending on the exact structure, '/a/**' is common for Google profile images. You can start with '/**' if unsure.
      },
    ],
  },
  // Any other Next.js configurations can go here
};

module.exports = nextConfig;
