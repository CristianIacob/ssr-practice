import React from "react";

function WeatherDescription(props) {
  const { description } = props.weather;

  const info = description[0].toUpperCase() + description.substring(1);
  return (
    <section className="flex justify-end">
      <i className="text-gray-400">{info}</i>
    </section>
  );
}

export default WeatherDescription;
