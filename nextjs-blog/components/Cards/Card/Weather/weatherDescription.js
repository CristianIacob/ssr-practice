import React from "react";

function WeatherDescription(props) {
  const { description } = props.weather;

  const info = description[0].toUpperCase() + description.substring(1);
  return (
    <section className="flex justify-end mb-5">
      <i>{info}</i>
    </section>
  );
}

export default WeatherDescription;
