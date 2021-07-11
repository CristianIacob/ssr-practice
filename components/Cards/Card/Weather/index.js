import React from "react";
import { weatherInfo } from "../../../../lib/FetchAPI";
import useSWR from "swr";
import WeatherDescription from "./weatherDescription";
import WeatherInfo from "./weatherInfo";
import FailedAPI from "../../../FailedAPI";
import Loader from "../../../Loader";

function Weather(props) {
  /**
   * Fetch data
   */
  const { data: weatherData, error } = useSWR(`/api/weather${props.name}`, () => weatherInfo(props.name));

  /**
   * Error handling
   */
  if (error) return <FailedAPI name={"weather"} />;

  /**
   * Loader
   */
  if (!weatherData)
    return (
      <div style={{ height: 121 }} className="flex flex-col px-4 py-4 items-center justify-center">
        <Loader />
      </div>
    );

  const { main, weather } = weatherData;

  return (
    <div className="flex flex-col px-4 py-4">
      <WeatherInfo name={weatherData.name} main={main} icon={weather[0].icon} />
      <WeatherDescription weather={weather[0]} />
    </div>
  );
}

export default Weather;
