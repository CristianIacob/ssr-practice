import React from "react";
import { photos } from "../../../lib/FetchAPI";
import useSWR from "swr";
import FailedAPI from "../../FailedAPI";
import Loader from "../../Loader";

function Photo(props) {
  const { data: photo, error } = useSWR(`/api/unsplash${props.name}`, () => photos(props.name));

  /**
   * Error handling
   */
  if (error) return <FailedAPI name={"image"} />;

  /**
   * Loader
   */
  if (!photo)
    return (
      <div className="h-56 w-full flex items-center justify-center">
        <Loader />
      </div>
    );

  return <img className="h-56 w-full object-cover" src={photo} alt="" />;
}

export default Photo;
