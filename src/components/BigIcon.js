import React from "react";

import "../styles/BigIcon.scss";

const BigIcon = ({
  name,
  slug,
  tagline,
  url,
  className,
  onMouseEnter,
  onMouseLeave,
  children
}) => {
  return (
    <a
      className={`BigIcon BigIcon-${slug} ${className}`}
      href={url}
      target="_blank"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="BigIcon-icon">{children}</div>
      <div className="BigIcon-info">
        <div className="BigIcon-title">{name}</div>
        <div className="BigIcon-tagline">&ldquo;{tagline}&rdquo;</div>
      </div>
    </a>
  );
};

export default BigIcon;
