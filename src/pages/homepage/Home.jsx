import React from "react";
import "./home.css";
import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import Chart from "../../components/chart/Chart";

import { userData } from "../../dummyData";

import WidgetLg from "../../components/Widget-Large/WidgetLg";
import WidgetSm from "../../components/Widget-Small/WidgetSm";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="home-widgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
