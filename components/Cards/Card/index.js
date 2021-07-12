import React, { useRef } from "react";
import Photo from "./photo";
import Weather from "./Weather";
import useOnScreen from "../../../lib/useOnScreen";

const cardStyle = {
  minHeight: "350px",
  minWidth: "350px",
};

function Card(props) {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="w-64 rounded-md overflow-hidden shadow-lg bg-white mx-3 my-3 my-card" style={cardStyle}>
      {isVisible && (
        <>
          <Photo name={props.title} />
          <Weather name={props.title} />
        </>
      )}
    </div>
  );
}

export default Card;
