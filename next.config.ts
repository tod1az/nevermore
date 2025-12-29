import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://t6lun8rso7.ufs.sh/**'),
    ],
  }
};

export default nextConfig;
