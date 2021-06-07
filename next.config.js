module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.node = {
      child_process: 'empty',
      fs: 'empty',
      crypto: 'empty',
      net: 'empty',
      tls: 'empty'
      //dns: 'empty'
    };
    return config;
  }
};
