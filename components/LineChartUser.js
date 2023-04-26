import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  CartesianAxis,
} from "recharts";

function LineChartUser() {
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data1 = await fetch(
        "https://mocki.io/v1/516c74ff-4e75-4aab-8b42-6ecb9e99ccb9"
      );
      const respo = await data1.json();
      console.log(respo);
      setArrayData(respo.array);
    };

    getData();

  
  }, []);

  return (
    <div className="flex flex-col gap-6 ">
      <div className="font-bold text-3xl">Activities</div>
      <div>May - June 2023 ▽ </div>

      <ResponsiveContainer aspect={3}>
        <LineChart data={arrayData}>
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            className="mb-7"
          />
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="user" strokeWidth={5} stroke="pink" />
          <Line
            type="monotone"
            dataKey="guest"
            strokeWidth={5}
            stroke="#9BDD7C"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartUser;
