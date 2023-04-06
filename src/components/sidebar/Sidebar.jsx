import React from 'react';
import './sidebar.css';

import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  AttachMoney,
  Equalizer,
  EmailOutlined,
  WorkOutline,
  Report,
  ChatBubbleOutline,
  ForumOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <Link to="/" className="link">
              <li className="sidebar-list-items active">
                <LineStyle className="sidebar-icon" />
                Home
              </li>
            </Link>
            <li className="sidebar-list-items">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-items">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <Link to="/users" className="link">
              <li className="sidebar-list-items ">
                <Person className="sidebar-icon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar-list-items">
                <Timeline className="sidebar-icon" />
                Products
              </li>
            </Link>
            <li className="sidebar-list-items">
              <AttachMoney className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-list-items">
              <Equalizer className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-items ">
              <EmailOutlined className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-items">
              <ForumOutlined className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-items">
              <ChatBubbleOutline className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-items ">
              <WorkOutline className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-items">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-items">
              <Report className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
