import React from "react";
import { photos } from "../../../lib/FetchAPI";
import useSWR from "swr";
import FailedAPI from "../../FailedAPI";

function Photo(props) {
  const { data: photo, error } = useSWR(`/api/unsplash${props.name}`, () => photos(props.name));

  /* error handling */
  if (error) return <FailedAPI name={"image"} />;

  if (!photo) return <div>Loading photo...</div>;
  return <img className='h-56 w-full object-cover' src={photo} alt='' />;
}

export default Photo;
