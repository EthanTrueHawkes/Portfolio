import React from "react";

export default function SingleInterest({
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <button
      className={selected ? "singleInterest--selected" : "singleInterest"}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </button>
  );
}
