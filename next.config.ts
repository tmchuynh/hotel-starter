import type { NextConfig } from "next";

const imageHosts = [
  "images.unsplash.com",
  "tailwindcss.com",
  "plus.unsplash.com",
  "img.freepik.com",
  "media.istockphoto.com",
  "www.freepik.com",
  "cdn.pixabay.com",
  "example.com",
  "www.canva.com",
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: imageHosts.map((hostname) => ({
      protocol: "https",
      hostname,
      port: "",
      pathname: "/**",
    })),
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
