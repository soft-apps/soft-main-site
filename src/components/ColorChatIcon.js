import React from "react";
import BigIcon from "./BigIcon";

import "../styles/ColorChatIcon.scss";

const ColorChatIcon = props => {
  return (
    <BigIcon {...props}>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">C</div>
      </div>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">o</div>
      </div>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">l</div>
      </div>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">o</div>
      </div>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">r</div>
      </div>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">C</div>
      </div>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">h</div>
      </div>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">a</div>
      </div>
      <div className="ColorChatIcon-letter">
        <div className="ColorChatIcon-letter-inner">t</div>
      </div>
    </BigIcon>
  );
};

export default ColorChatIcon;
