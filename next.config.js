const nextBuildId = require("next-build-id");

const withTM = require("next-transpile-modules")(["swr"]); // pass the modules you would like to see transpiled

module.exports = withTM({
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  env: {
    PHOTOS_API_KEY: process.env.PHOTOS_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
});
