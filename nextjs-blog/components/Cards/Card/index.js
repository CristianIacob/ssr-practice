import React from "react";
import Photo from "./photo";
import Weather from "./weather";

const cardStyle = {
  borderRadius: "8px",
  minHeight: "350px",
  minWidth: "350px",
};

function Card(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-6 my-6" style={cardStyle}>
      <Photo name={props.title} />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <Weather name={props.title} />
      </div>
    </div>
  );
}

export default Card;
