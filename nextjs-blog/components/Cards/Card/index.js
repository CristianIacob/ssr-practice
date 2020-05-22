import React from "react";
import Photo from "./photo";
import Weather from "./Weather";

const cardStyle = {
  borderRadius: "8px",
  minHeight: "350px",
  minWidth: "350px",
};

function Card(props) {
  return (
    <div className="max-w-sm ounded overflow-hidden shadow-lg bg-white mx-3 my-3" style={cardStyle}>
      <Photo name={props.title} />
      <Weather name={props.title} />
    </div>
  );
}

export default Card;
