import React from "react";
import { tilesList } from "../../utils/constants";
import "./index.scss";
import { Link } from "react-router-dom";

function NavTiles() {
  function getTileColor(color) {
    switch (color) {
      case "blue":
        return "navtiles__tile blue";
      case "green":
        return "navtiles__tile green";
      case "yellow":
        return "navtiles__tile yellow";
      case "pink":
        return "navtiles__tile pink";
      case "purple":
        return "navtiles__tile purple";
      case "orange":
        return "navtiles__tile orange";

      default:
        break;
    }
  }
  return (
    <div className="navtiles__container">
      {tilesList?.map((item) => (
        <Link to={item?.link} className={getTileColor(item?.color)}>
          <div className="navtiles__icon">
            <img src={item?.icon} />
          </div>
          <p className="navtiles__title">{item?.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default NavTiles;
