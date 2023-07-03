import React from "react";
import { FaPlay } from "react-icons/fa";

import "./index.scss";

function AudioBox() {
  return (
    <div className="audiobox__container">
      <p className="audiobox__title">Click here to know more about me!</p>
      <div className="audiobox__play-btn">
        <FaPlay />
      </div>
    </div>
  );
}

export default AudioBox;
