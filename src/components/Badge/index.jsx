import React from "react";

function Badge(props) {
  return (
    <div>
      <span className={`badge text-bg-${props.type} m-0`}>{props.status}</span>
    </div>
  );
}

export default Badge;
