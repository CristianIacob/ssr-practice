const nextBuildId = require("next-build-id");

module.exports = {
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  env: {
    PHOTOS_API_KEY: process.env.PHOTOS_API_KEY,
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },
};
