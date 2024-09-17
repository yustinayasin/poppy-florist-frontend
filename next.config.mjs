/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poppy-florist.yustinayasin.com",
        pathname: "/**", // Allowing all images from this domain
      },
    ],
  },
};

export default nextConfig;
