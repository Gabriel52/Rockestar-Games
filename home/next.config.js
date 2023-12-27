/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { webpack, isServer } = options;
    Object.assign(config.experiments, { topLevelAwait: true });
    if (!isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",

          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./component/Header": "./src/components/Header.tsx",
            './modules/Home': './src/modules/HomeScreen.tsx'
          },
          shared: {},
        })
      );
    }

    return config;
  },
};