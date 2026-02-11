import React from "react";

export function ProjectSpotlight({ title, description, tags, image }) {
  return (
    <div className="singular-project">
      <img src={image} alt={title + " Project Image"} />
      <div className="work-textbox">
        <h3>{title}</h3>
        <span>{tags[0]} </span>
        <span>{tags[1]}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
