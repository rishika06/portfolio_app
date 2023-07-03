import React from "react";
import AvatarImage from "../../assets/images/dp1.jpeg";
import "./index.scss";

function Avatar() {
  return (
    <div className="avatar__container">
      <div className="avatar__image">
        <img src={AvatarImage} alt="avatar" />
      </div>
      <h4 className="avatar__title">Rishika Kalita</h4>
      <p className="avatar__sub-title">Senior Software Engineer</p>
    </div>
  );
}

export default Avatar;
