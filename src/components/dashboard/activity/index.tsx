"use client";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Daily Payment", value: 55, color: "#5A5AE6" },
  { name: "Hobby", value: 20, color: "#56CCF2" },
  { name: "Other", value: 25, color: "#2A2A50" }, // Gray part
];

const ActivityChart: React.FC = () => {
  return (
    <div className="bg-[#2D2B4D] mt-10 p-5 h-[411px] rounded-lg w-full text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-normal">Activity</h2>
        <select className="text-sm bg-transparent border border-gray-500 px-2 py-1 rounded-md text-gray-300">
          <option>Month</option>
        </select>
      </div>

      {/* Semi Donut Chart */}
      <div className="relative flex justify-center">
        <PieChart width={200} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={1}
            dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <span className="absolute top-18 text-white text-sm font-semibold">
          75%
        </span>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-2">
        {data.slice(0, 2).map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <div className="flex items-center">
              <span
                className="w-2 h-2 gap-2 rounded-full"
                style={{ backgroundColor: item.color }}></span>
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm font-bold">{item.value}%</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button className="mt-22 w-full border border-gray-500 py-2 rounded-md text-gray-300 hover:bg-gray-700">
        See All Activity
      </button>
    </div>
  );
};

export default ActivityChart;
