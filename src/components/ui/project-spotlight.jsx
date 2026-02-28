import React from "react";

export function ProjectSpotlight({ title, description, tags, image }) {
  return (
    <div className="singular-project">
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-tags">
        <div className="project-tag">
          <span>{tags[0]}</span>
        </div>
        <div className="project-tag">{tags[1]}</div>
        <div className="project-tag">{tags[2]}</div>
      </div>
      <img
        src={image}
        alt={title + " Project Image"}
        className="project-image"
      />
    </div>
  );
}
