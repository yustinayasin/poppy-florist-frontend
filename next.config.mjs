/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "139.99.96.99",
        port: "9000",
        pathname: "/florist/products/**",
        formats: ["image/avif", "image/webp"],
      },
    ],
  },
};

export default nextConfig;
