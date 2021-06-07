module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        dns: 'empty'
      };
    }

    return config;
  }
};
