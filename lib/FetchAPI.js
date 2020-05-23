const axios = require("axios");

/**
 * LEGACY
 * used for multi search - maybe remove? */
export async function multiWeather(IDs) {
  const listIDs = IDs.join(",");
  try {
    const result = await axios({
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/group?",
      headers: {
        "content-type": "application/json",
      },
      params: {
        id: `${listIDs}`,
        APPID: process.env.WEATHER_API_KEY,
        units: "metric",
      },
    });
    return result;
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function weatherInfo(query) {
  const res = await axios({
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?q=${query}`,
    headers: {
      "content-type": "application/json",
    },
    params: {
      APPID: process.env.WEATHER_API_KEY,
      units: "metric",
    },
  });

  return res.data;
}

export async function photos(query) {
  const count = 10;
  let res = await axios({
    method: "GET",
    url: "https://api.unsplash.com/search/photos?",
    headers: {
      "content-type": "application/json",
    },
    params: {
      client_id: process.env.PHOTOS_API_KEY,
      query: query,
      per_page: count,
    },
  });

  let random = parseInt(Math.random() * count - 1);
  res = res?.data?.results[random].urls.small;

  return res;
}
