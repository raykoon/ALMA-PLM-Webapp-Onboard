/** @type {import('next').NextConfig} */
const path = require('path');
// const withTM = require("next-transpile-modules")(["@toast-ui/react-calendar"]);
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  withVideos : require('next-videos'),
  // future: {
  //   webpack5: true,
  // },
  // webpackDevMiddleware: (config) => {
  //   config.watchOptions = {
  //     poll: 1000,
  //     aggregateTimeout: 300,
  //     ignored: /node_modules/
  //   };

  //   return config;
  // },
  // useFileSystemPublicRoutes: false,
  // experimental: {
  //   images: {
  //     unoptimized: true,
  //   },
  // },
};

module.exports = nextConfig;
// module.exports = withTM(nextConfig);
