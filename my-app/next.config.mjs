import Critters from 'critters';

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    config.plugins.push(
      new Critters({
        preload: 'js-lazy',
        noscriptFallback: true,
      })
    );
    return config;
  },
};

export default nextConfig;
