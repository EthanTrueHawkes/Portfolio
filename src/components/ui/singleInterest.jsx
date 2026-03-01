import React from "react";

export default function SingleInterest({ title, description }) {
  return (
    <button className="singleInterest">
      <h3>{title}</h3>
      <p>{description}</p>
    </button>
  );
}
