import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'multipost.app',
      },
      {
        hostname: '*.star-history.com',
      },
      {
        hostname: 'img.shields.io',
      },
      {
        hostname: '2someone-web-static.s3.bitiful.net',
      },
    ],
  },
};

export default withMDX(config);
