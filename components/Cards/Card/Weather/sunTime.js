import React from "react";
import moment from "moment";

function formatTime(timeStamp, locale = "en") {
  moment.locale(locale);
  const today = moment(moment(), "DD/MM/YYYY HH:mm:ss");
  const newTime = moment(moment.unix(timeStamp), "DD/MM/YYYY HH:mm:ss");

  const hours = today.diff(newTime, "hours");
  let minutes = today.diff(newTime, "minutes");
  minutes = minutes / 60;
  minutes = Math.abs(Math.abs(hours) - Math.abs(minutes));

  const time = `${hours <= 0 ? "in" : ""} ${hours !== 0 ? Math.abs(hours) + ":" : ""}${Math.round(minutes * 60)} ${hours > 0 ? "ago" : ""}`;
  return time;
}

function Sun(props) {
  const { sunrise, sunset, country } = props;
  return (
    <section className="font-sans flex flex-column items-center">
      <span key={sunrise}>Sunrise {formatTime(sunrise, country)}</span>
      <span className="ml-auto" key={sunset}>
        Sunset {formatTime(sunset, country)}
      </span>
    </section>
  );
}

export default Sun;
