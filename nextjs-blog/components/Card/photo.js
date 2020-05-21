import React from "react";
import { photos } from "../../lib/FetchAPI";
import useSWR from "swr";

function Photo(props) {
  const { data: photo } = useSWR(`/api/unsplash${props.name}`, () => photos(props.name));

  if (!photo) return <div>Loading photo...</div>;
  return <img className="h-56 mb-0 w-full object-cover" src={photo} alt="" />;
}

export default Photo;
