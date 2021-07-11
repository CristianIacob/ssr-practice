import React from "react";

const formatTemperature = (temperature) => {
  return temperature ? `${Math.round(temperature)}°` : "";
};

const CurrentTemp = (props) => {
  return (
    <span className="flex w-24 items-center justify-end">
      <img className="w-1/3" src={`/weatherIcons/${props.icon}.png`} />
      <p className=" text-gray-700 text-4xl text-left">{`${formatTemperature(props.temp)}`}</p>
    </span>
  );
};

const MinMaxTemp = (props) => (
  <span className="text-xs text-gray-500 ml-2">
    <p>{`${formatTemperature(props.max)}`}</p>
    <p>{`${formatTemperature(props.min)}`} </p>
  </span>
);

function WeatherInfo(props) {
  const { main, name, icon } = props;
  return (
    <section className="flex flex-row items-center mb-3">
      <h1 className="font-bold text-xl text-gray-600 mb-2">{name}</h1>
      <h1 className="font-sans ml-auto flex items-center">
        <CurrentTemp temp={main.feels_like} icon={icon} />
        <MinMaxTemp min={main.temp_max} max={main.temp_min} />
      </h1>
    </section>
  );
}

export default WeatherInfo;
