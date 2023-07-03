import React from "react";
import logo from "../../assets/images/logo.jpeg";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

import "./index.scss";

function BusinessCard() {
  return (
    <div className="business-card__container">
      <div className="business-card__left">
        <div className="business-card__logo-image-wrapper">
          <div className="business-card__logo-image">
            <img src={logo} />
          </div>
        </div>
      </div>
      <div className="business-card__right">
        <h3>Rishika Kalita</h3>
        <p>Senior Software Engineer</p>
        <p>Bengaluru , India</p>
        <p className="business-card__email">
          <FaRegEnvelope /> <span>rishika.k2019@gmail.com</span>
        </p>
        <p className="business-card__phone">
          <FaPhoneAlt /> <span>+91 - 9008107065</span>
        </p>
      </div>
    </div>
  );
}

export default BusinessCard;
