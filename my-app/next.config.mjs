import Critters from 'critters-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  webpack(config, { isServer }) {
    if (isServer) {
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
