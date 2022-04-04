import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const Dashboard = () => {
  const [businessData, setBusinessData] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => setBusinessData(data));
  }, []);

  return (
    <div className="d-flex flex-column flex-md-row justify-content-around">
      <div>
        <h3 className="text-primary text-center">Month Wise Sell</h3>
        <LineChart width={600} height={500} data={businessData}>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        </LineChart>
      </div>
      <div>
        <h3 className="text-primary text-center">Investment vs Revenue</h3>
        <BarChart width={600} height={500} data={businessData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#8884d8" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
