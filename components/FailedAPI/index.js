import React from "react";

function FailedAPI(props) {
  return <div className="flex px-4 py-4 items-center">{`No ${props.name} found`}</div>;
}

export default FailedAPI;
