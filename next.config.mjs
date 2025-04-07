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
    ],
  },
};

export default withMDX(config);
