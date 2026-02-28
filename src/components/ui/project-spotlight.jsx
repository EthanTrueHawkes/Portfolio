import React from "react";

export function ProjectSpotlight({ title, description, tags, image }) {
  return (
    <div className="singular-project">
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-tags">
        <div>{tags[0]} </div>
        <div>{tags[1]}</div>
      </div>
      <img
        src={image}
        alt={title + " Project Image"}
        className="project-image"
      />
    </div>
  );
}
