import React from "react";
import { CSSTransitionGroup } from "react-transition-group";

import "../styles/Tagline.scss";

const Tagline = ({ active, text }) => {
  return (
    <CSSTransitionGroup
      transitionName={"Tagline"}
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {active && (
        <div className="Tagline" key={text}>
          &ldquo;<span className="Tagline-text">{text}</span>&rdquo;
        </div>
      )}
    </CSSTransitionGroup>
  );
};

export default Tagline;
