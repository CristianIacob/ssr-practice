import React from "react";
import Photo from "./photo";
import Weather from "./Weather";

const cardStyle = {
  minHeight: "350px",
  minWidth: "350px",
};

function Card(props) {
  return (
    <div className="w-64 rounded-md overflow-hidden shadow-lg bg-white mx-3 my-3 my-card" style={cardStyle}>
      <>
        <Photo name={props.title} />
        <Weather name={props.title} />
      </>
    </div>
  );
}

export default Card;
