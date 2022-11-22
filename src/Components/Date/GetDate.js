import React from "react";
import "./GetDate.css";

export const GetDate = () => {
  const showDate = new Date();
  const d = showDate.toDateString();
  console.log(d);

  return <div className="Date">{d}</div>;
};
