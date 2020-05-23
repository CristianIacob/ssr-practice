import React from "react";
import { weatherInfo } from "../../../../lib/FetchAPI";
import useSWR from "swr";
import WeatherDescription from "./weatherDescription";
import Sun from "./sunTime";
import WeatherInfo from "./weatherInfo";

function Weather(props) {
  const { data: weatherData } = useSWR(`/api/weather${props.name}`, () => weatherInfo(props.name));

  /* loading */
  if (!weatherData) return <div>Loading weather...</div>;

  const { main, clouds, wind, weather, sys } = weatherData;
  const { sunrise, sunset, country } = sys;

  // console.log("Weather -> weatherData", weatherData);

  return (
    <div className="flex flex-col px-4 py-4">
      <WeatherInfo name={weatherData.name} main={main} icon={weather[0].icon} />
      <WeatherDescription weather={weather[0]} />
      {/* <Sun sunrise={sunrise} sunset={sunset} locale={country} /> */}
    </div>
  );
}

export default Weather;
