import React, { useEffect, useState } from "react";
import AvatarImage from "../../assets/images/dp1.jpeg";
import MenuIcon from "../../assets/images/pd-polka-menu.svg";
import CircleIcon from "../../assets/images/pd-green-circle.svg";
import TriangleIcon from "../../assets/images/pd-blue-triangle.svg";
import PlusIcon from "../../assets/images/pd-turmeric-plus.svg";
import SquareIcon from "../../assets/images/pd-pink-square.svg";
import EqualIcon from "../../assets/images/pd-purple-equal.svg";
import DotsIcon from "../../assets/images/pd-orange-dots.svg";
import { useLocation } from "react-router-dom";

import "./index.scss";
import { Link } from "react-router-dom";

const menuIcons = [
  { id: 1, title: "about", icon: CircleIcon, link: "/about" },
  {
    id: 2,
    title: "experience",
    icon: TriangleIcon,
    link: "/experience",
  },
  {
    id: 3,
    title: "projects",
    icon: PlusIcon,
    link: "/projects",
  },
  {
    id: 4,
    title: "education",
    icon: SquareIcon,
    link: "/education",
  },
  { id: 5, title: "blogs", icon: EqualIcon, link: "/blogs" },
  {
    id: 6,
    title: "contact",
    icon: DotsIcon,
    link: "/contact",
  },
];

function PageLayout({ children }) {
  const [showMenuCard, setShowMenuCard] = useState(false);
  const [headerContent, setHeaderContent] = useState({});

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/about":
        return setHeaderContent({ title: "about", icon: CircleIcon });
      case "/experience":
        return setHeaderContent({ title: "experience", icon: TriangleIcon });
      case "/projects":
        return setHeaderContent({ title: "projects", icon: PlusIcon });
      case "/education":
        return setHeaderContent({ title: "education", icon: SquareIcon });
      case "/blogs":
        return setHeaderContent({ title: "blogs", icon: EqualIcon });
      case "/contact":
        return setHeaderContent({ title: "contact", icon: DotsIcon });

      default:
        break;
    }
  }, [location]);

  return (
    <>
      <div className="pagelayout__conatiner">
        <div className="pagelayout__header">
          <Link to="/" className="pagelayout__avatar">
            <div className="pagelayout__avatar--image">
              <img src={AvatarImage} />
            </div>
            <h5 className="pagelayout__avatar--title">Rishika</h5>
          </Link>
          <div
            className="pagelayout__menu"
            onClick={() => setShowMenuCard(!showMenuCard)}
          >
            <img src={MenuIcon} />
          </div>
        </div>

        <div className="pagelayout__header-container">
          <div className="pagelayout__header-icon">
            <img src={headerContent?.icon} />
          </div>
          <p className="pagelayout__header-title">{headerContent?.title}</p>

          {children}
        </div>
      </div>

      {showMenuCard && (
        <div className="menu-card__container">
          {menuIcons?.map((item) => (
            <Link to={item?.link} className="menu-card__link-wrapper">
              <div className="menu-card__icons">
                <img src={item?.icon} />
              </div>
              <p className="menu-card__icon-title">{item?.title}</p>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default PageLayout;
