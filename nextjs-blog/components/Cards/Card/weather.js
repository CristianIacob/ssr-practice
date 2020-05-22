import React from "react";
import { weatherInfo } from "../../../lib/FetchAPI";
import useSWR from "swr";

const CURRENT_TEMPERATURE = "current_temp";
const MAX_TEMPERATURE = "max_temp";
const MIN_TEMPERATURE = "min_temp";

const formatTemperature = (temperature) => {
  return temperature ? `${Math.round(temperature)}°` : "";
};

const CurrentTemp = (props) => <p className=" text-gray-700 text-4xl text-left">{`${formatTemperature(props.temp)}`}</p>;

const MinMaxTemp = (props) => (
  <span className="text-xs text-gray-600 ml-2">
    <p>{`${formatTemperature(props.max)}`}</p>
    <p>{`${formatTemperature(props.min)}`} </p>
  </span>
);

function Weather(props) {
  const { data: weatherData } = useSWR(`/api/weather${props.name}`, () => weatherInfo(props.name));
  if (!weatherData) return <div>Loading weather...</div>;

  const { main, clouds, wind, weather } = weatherData;
  const { sunrise, sunset } = weatherData.sys;

  console.log("Weather -> weatherData", weatherData);

  return (
    <div className="px-4 py-4">
      <section className="flex flex-row items-center">
        <h1 className="font-bold text-xl text-gray-700 mb-2">{weatherData.name}</h1>
        <div className="font-sans ml-auto flex flex-column items-center">
          <CurrentTemp temp={main.temp} />
          <MinMaxTemp min={main.temp_max} max={main.temp_min} />
        </div>
      </section>
    </div>
  );
}

export default Weather;
