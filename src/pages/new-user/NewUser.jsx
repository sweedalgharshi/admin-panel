import React from 'react';
import './newUser.css';

function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUser-title">New User</h1>
      <form className="newUser-form">
        <div className="newUser-item">
          <label>Username</label>
          <input type="text" placeholder="Jon" />
        </div>
        <div className="newUser-item">
          <label>Full Name</label>
          <input type="text" placeholder="Jon Smith" />
        </div>
        <div className="newUser-item">
          <label>Email</label>
          <input type="email" placeholder="jon@gmail.com" />
        </div>
        <div className="newUser-item">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUser-item">
          <label>Phone</label>
          <input type="text" placeholder="+91 123 342332" />
        </div>
        <div className="newUser-item">
          <label>Address</label>
          <input type="text" placeholder="Paris, France" />
        </div>
        <div className="newUser-item">
          <label>Address</label>
          <input type="text" placeholder="Paris, France" />
        </div>
        <div className="newUser-item">
          <label>Gender</label>
          <div className="newUser-gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUser-item">
          <label>Active</label>
          <select name="active" id="active" className="newUser-select">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUser-btn">Create</button>
      </form>
    </div>
  );
}

export default NewUser;
