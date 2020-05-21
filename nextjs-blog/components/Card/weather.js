import React from "react";
import { weatherInfo } from "../../lib/FetchAPI";
import useSWR from "swr";

const CURRENT_TEMPERATURE = "current_temp";
const MAX_TEMPERATURE = "max_temp";
const MIN_TEMPERATURE = "min_temp";

const formatTemperature = (temperature) => {
  return temperature ? `${Math.round(temperature)}°` : "";
};

function Weather(props) {
  const { data: weatherData } = useSWR(`/api/weather${props.name}`, () => weatherInfo(props.name));
  if (!weatherData) return <div>Loading weather...</div>;

  const { main, clouds, wind, weather } = weatherData;

  return (
    <section className="text-right">
      <p className="font-sans text-gray-700 text-2xl text-left">{`${formatTemperature(main.temp)}`}</p>
      <p className="text-gray-700 text-base">{`${formatTemperature(main.temp_max)}`}</p>
      <p className="text-gray-700 text-base">{`${formatTemperature(main.temp_min)}`} </p>
    </section>
  );
}

export default Weather;
