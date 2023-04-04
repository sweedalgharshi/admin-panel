import React from "react";
import "./widgetSm.css";

import { Visibility } from "@mui/icons-material";

function WidgetSm() {
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Join Members</span>
      <ul className="widget-small-list">
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user-img"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Anna Keller</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user-img"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Anna Keller</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user-img"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Anna Keller</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user-img"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Anna Keller</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
        <li className="widget-small-list-item">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="user-img"
            className="widget-small-img"
          />
          <div className="widget-small-user">
            <span className="widget-small-username">Anna Keller</span>
            <span className="widget-small-user-title">Software Engineer</span>
          </div>
          <button className="widget-small-btn">
            <Visibility className="widget-small-icon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WidgetSm;
