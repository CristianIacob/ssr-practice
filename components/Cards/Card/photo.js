import React from "react";
import useSWR from "swr";
import Image from "next/image";

import { photos } from "../../../lib/FetchAPI";
import FailedAPI from "../../FailedAPI";
import Loader from "../../Loader";

function Photo(props) {
  const { data: photo, error } = useSWR(`/api/unsplash${props.name}`, () =>
    photos(props.name)
  );

  /**
   * Error handling
   */
  if (error)
    return (
      <div
        style={{
          height: 210,
          width: 350,
          display: "flex",
          background: "#e8e8e8",
          justifyContent: "center",
        }}
      >
        <FailedAPI name={"image"} />
      </div>
    );

  /**
   * Loader
   */
  if (!photo)
    return (
      <div className="h-56 w-full flex items-center justify-center">
        <Loader />
      </div>
    );

  return (
    <Image
      width={500}
      height={300}
      className="h-56 w-full object-cover"
      src={photo}
      alt=""
      loading="lazy"
    />
  );
}

export default Photo;
