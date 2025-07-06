import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  domains: ['cdn.sanity.io'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'readymadeui.com',
      port: '',
      pathname: '/hotel-img.webp',
    },
  ],
  },
}

  /* config options here */


export default nextConfig;
