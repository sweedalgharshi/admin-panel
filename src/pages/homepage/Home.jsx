import React from 'react';
import './home.css';
import FeaturedInfo from '../../components/featured-info/FeaturedInfo';
import Chart from '../../components/chart/Chart';

import { userData } from '../../dummyData';

import WidgetLg from '../../components/Widget-Large/WidgetLg';
import WidgetSm from '../../components/Widget-Small/WidgetSm';

import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { TOKEN } from '../../keys';

function Home() {
  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get('/users/stats', {
          headers: {
            token: 'Bearer ' + TOKEN,
          },
        });

        const statsList = response.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'New User': item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
