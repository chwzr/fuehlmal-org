module.exports = {
  images: {
    domains: ['t.me'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        dns: 'empty'
      };
    }

    return config;
  }
};
