import React, { useEffect } from "react";

export function ProjectSpotlight({ title, description, tags, image }) {
  const [pageViews, setPageViews] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPageViews((prevViews) => prevViews + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function listTags(tags) {
    return tags.map((tag) => (
      <div className="project-tag">
        <span>{tag}</span>
      </div>
    ));
  }

  return (
    <div className="singular-project">
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-tags">{listTags(tags)}</div>
      <img
        src={image}
        alt={title + " Project Image"}
        className="project-image"
      />
      <div className="project-analytics">
        <span>
          {pageViews} View{pageViews === 1 ? null : "s"}
        </span>
      </div>
    </div>
  );
}
