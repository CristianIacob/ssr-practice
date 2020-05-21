import React from "react";
import Photo from "./photo";
import Weather from "./weather";

const cardStyle = {
  borderRadius: "8px",
  minHeight: "350px",
  minWidth: "350px",
};

const CURRENT_TEMPERATURE = "current_temp";
const MAX_TEMPERATURE = "max_temp";
const MIN_TEMPERATURE = "min_temp";

function Card(props) {
  const formatTemperature = (temperature) => {
    const temperatureProps = props.weather.main;
    if (!temperatureProps) {
      return "";
    }

    switch (temperature) {
      case CURRENT_TEMPERATURE:
        return `${Math.round(temperatureProps.temp)}°`;
      case MAX_TEMPERATURE:
        return `${Math.round(temperatureProps.temp_max)}°`;
      case MIN_TEMPERATURE:
        return `${Math.round(temperatureProps.temp_min)}°`;
      default:
        return "";
    }
  };

  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg bg-white`} style={cardStyle}>
      <Photo name={props.title} />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <Weather name={props.title} />
      </div>
    </div>
  );
}

Card.defaultProps = {
  temperature: undefined,
  image: undefined,
  title: "",
};

export default Card;
