const fs = require("fs");
const evalSourceMap = require("react-dev-utils/evalSourceMapMiddleware");
const redirectServedPath = require("react-dev-utils/redirectServedPathMiddleware");
const noopServiceWorker = require("react-dev-utils/noopServiceWorkerMiddleware");
const path = require("path");

module.exports = {
  devServer: (devServerConfig, { env, paths }) => {
    devServerConfig = {
      devMiddleware: {
        publicPath: "/",
        writeToDisk: true,
      },
      onBeforeSetupMiddleware: undefined,
      onAfterSetupMiddleware: undefined,
      setupMiddlewares: (middlewares, devServer) => {
        if (!devServer) {
          throw new Error("webpack-dev-server is not defined");
        }

        if (fs.existsSync(paths.proxySetup)) {
          require(paths.proxySetup)(devServer.app);
        }

        middlewares.push(
          evalSourceMap(devServer),
          redirectServedPath(paths.publicUrlOrPath),
          noopServiceWorker(paths.publicUrlOrPath)
        );

        return middlewares;
      },
    };
    return devServerConfig;
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      "@Hooks": path.resolve(__dirname, 'src/hooks'),
      "@Assets": path.resolve(__dirname, 'src/assets'),
      "@Providers": path.resolve(__dirname, 'src/providers'),
      "@Utils": path.resolve(__dirname, 'src/utils'),
      "@Dtos": path.resolve(__dirname, 'src/dtos'),
      "@Models": path.resolve(__dirname, 'src/models'),
      "@Pages": path.resolve(__dirname, 'src/pages'),
    }
  },
};
