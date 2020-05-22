import React from "react";
import { weatherInfo } from "../../../lib/FetchAPI";
import useSWR from "swr";
import moment from "moment";

const CURRENT_TEMPERATURE = "current_temp";
const MAX_TEMPERATURE = "max_temp";
const MIN_TEMPERATURE = "min_temp";

const formatTemperature = (temperature) => {
  return temperature ? `${Math.round(temperature)}°` : "";
};

const CurrentTemp = (props) => {
  return (
    <span className="flex items-center">
      <img className="h-full" src={`http://openweathermap.org/img/wn/${props.icon}.png`} />
      <p className=" text-gray-700 text-4xl text-left">{`${formatTemperature(props.temp)}`}</p>
    </span>
  );
};

const MinMaxTemp = (props) => (
  <span className="text-xs text-gray-600 ml-2">
    <p>{`${formatTemperature(props.max)}`}</p>
    <p>{`${formatTemperature(props.min)}`} </p>
  </span>
);

function formatTime(timeStamp, locale = "en") {
  moment.locale(locale);
  const today = moment(moment(), "DD/MM/YYYY HH:mm:ss");
  const newTime = moment(moment.unix(timeStamp), "DD/MM/YYYY HH:mm:ss");

  const hours = today.diff(newTime, "hours");
  let minutes = today.diff(newTime, "minutes");
  minutes = minutes / 60;
  minutes = Math.abs(Math.abs(hours) - Math.abs(minutes));

  const time = `${hours <= 0 ? "in" : ""} ${hours !== 0 ? Math.abs(hours) + "h" : ""}${Math.round(minutes * 60)}m ${
    hours > 0 ? "ago" : ""
  }`;
  return time;
}

const Sun = (props) => {
  const { sunrise, sunset, country } = props;
  return (
    <section className="font-sans flex flex-column items-center">
      <span key={sunrise}>Sunrise {formatTime(sunrise, country)}</span>
      <span className="ml-auto" key={sunset}>
        Sunset {formatTime(sunset, country)}
      </span>
    </section>
  );
};

const WeatherInfo = (props) => {
  const { main, description } = props.weather;
  const info = description[0].toUpperCase() + description.substring(1);
  return (
    <section className="flex justify-end mb-5">
      <i>{info}</i>
    </section>
  );
};

function Weather(props) {
  const { data: weatherData } = useSWR(`/api/weather${props.name}`, () => weatherInfo(props.name));
  if (!weatherData) return <div>Loading weather...</div>;

  const { main, clouds, wind, weather, sys } = weatherData;
  const { sunrise, sunset, country } = sys;

  // console.log("Weather -> weatherData", weatherData);

  return (
    <div className="flex flex-col px-4 py-4">
      <section className="flex flex-row items-center mb-5">
        <h1 className="font-bold text-xl text-gray-700 mb-2">{weatherData.name}</h1>
        <h1 className="font-sans ml-auto flex items-center">
          <CurrentTemp temp={main.feels_like} icon={weather[0].icon} />
          <MinMaxTemp min={main.temp_max} max={main.temp_min} />
        </h1>
      </section>
      <WeatherInfo weather={weather[0]} />
      <Sun sunrise={sunrise} sunset={sunset} locale={country} />
    </div>
  );
}

export default Weather;
