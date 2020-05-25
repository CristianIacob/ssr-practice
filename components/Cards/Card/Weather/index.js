import React from "react";
import { weatherInfo } from "../../../../lib/FetchAPI";
import useSWR from "swr";
import WeatherDescription from "./weatherDescription";
import WeatherInfo from "./weatherInfo";
import FailedAPI from "../../../FailedAPI";

function Weather(props) {
  const { data: weatherData, error } = useSWR(`/api/weather${props.name}`, () => weatherInfo(props.name));
  /* error handling */
  if (error) return <FailedAPI name={"weather"} />;

  /* loading */
  if (!weatherData) return <div>Loading weather...</div>;

  const { main, clouds, wind, weather, sys } = weatherData;
  const { sunrise, sunset, country } = sys;

  return (
    <div className='flex flex-col px-4 py-4'>
      <WeatherInfo name={weatherData.name} main={main} icon={weather[0].icon} />
      <WeatherDescription weather={weather[0]} />
    </div>
  );
}

export default Weather;
