import React from 'react';
import './user.css';
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

function User() {
  return (
    <div className="user">
      <div className="user-title-container">
        <h1 className="user-title">Edit User</h1>
        <Link to="/newUser">
          <button className="user-add-btn">Create</button>
        </Link>
      </div>
      <div className="user-container">
        <div className="user-show">
          <div className="user-show-top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="user-show-img"
            />
            <div className="user-show-top-title">
              <span className="user-show-username">Lily Bloom</span>
              <span className="user-show-user-title">Software Engineer</span>
            </div>
          </div>
          <div className="user-show-bottom">
            <span className="user-show-title">Account Details</span>
            <div className="user-show-info">
              <PermIdentity className="user-show-icon" />
              <span className="user-show-info-title">lilybloom97</span>
            </div>
            <div className="user-show-info">
              <CalendarToday className="user-show-icon" />
              <span className="user-show-info-title">10.12.1997</span>
            </div>
            <span className="user-show-title">Contact Details</span>
            <div className="user-show-info">
              <PhoneAndroid className="user-show-icon" />
              <span className="user-show-info-title">+987 65 42426</span>
            </div>
            <div className="user-show-info">
              <MailOutline className="user-show-icon" />
              <span className="user-show-info-title">lily@gmail.com</span>
            </div>
            <div className="user-show-info">
              <LocationSearching className="user-show-icon" />
              <span className="user-show-info-title">Mumbai, India</span>
            </div>
          </div>
        </div>
        <div className="user-update">
          <span className="user-update-title">Edit</span>
          <form className="user-update-form">
            <div className="user-update-left">
              <div className="user-update-item">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="lilybloom97"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Lily Bloom"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="lily@gmail.com"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+987 65 42426"
                  className="user-update-input"
                />
              </div>
              <div className="user-update-item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Mumbai, India"
                  className="user-update-input"
                />
              </div>
            </div>
            <div className="user-update-right">
              <div className="user-update-upload">
                <img
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="img"
                  className="user-update-img"
                />
                <label htmlFor="file">
                  <Publish className="user-update-icon" />
                </label>
                <input type="file" id="file" style={{ display: 'none' }} />
              </div>
              <button className="user-update-btn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
