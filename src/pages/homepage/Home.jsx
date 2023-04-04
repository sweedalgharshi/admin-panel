import React from "react";
import "./home.css";
import FeaturedInfo from "../../components/featured-info/FeaturedInfo";
import Chart from "../../components/chart/Chart";

import { userData } from "../../dummyData";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
    </div>
  );
}

export default Home;
