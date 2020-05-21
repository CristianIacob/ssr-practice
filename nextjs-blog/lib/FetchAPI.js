const axios = require("axios");

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
  console.log("weather -> query", query);
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
  let res = await axios({
    method: "GET",
    url: "https://api.unsplash.com/search/photos?",
    headers: {
      "content-type": "application/json",
    },
    params: {
      client_id: process.env.PHOTOS_API_KEY,
      query: query,
      per_page: 20,
    },
  });

  let random = parseInt(Math.random() * 19);
  res = res?.data?.results[random].urls.small;

  return res;
}
