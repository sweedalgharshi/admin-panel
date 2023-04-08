import React, { useEffect, useState } from 'react';
import './widgetSm.css';

import { Visibility } from '@mui/icons-material';
import axios from 'axios';
import { TOKEN } from '../../keys';

function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const response = await axios.get('/users?new=true', {
          headers: {
            token: 'Bearer ' + TOKEN,
          },
        });
        setNewUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    getNewUsers();
  }, []);
  return (
    <div className="widget-small">
      <span className="widget-small-title">New Join Members</span>
      <ul className="widget-small-list">
        {newUsers.map((user) => {
          return (
            <li className="widget-small-list-item" key={user.id}>
              <img
                src={
                  user.profilePic ||
                  'https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg'
                }
                alt="user-img"
                className="widget-small-img"
              />
              <div className="widget-small-user">
                <span className="widget-small-username">{user.username}</span>
                <span className="widget-small-user-title">
                  Software Engineer
                </span>
              </div>
              <button className="widget-small-btn">
                <Visibility className="widget-small-icon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WidgetSm;
