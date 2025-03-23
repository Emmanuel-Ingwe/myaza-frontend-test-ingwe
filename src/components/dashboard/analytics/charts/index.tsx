"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", income: 30000, outcome: 20000 },
  { name: "Feb", income: 25000, outcome: 30000 },
  { name: "Mar", income: 32000, outcome: 18000 },
  { name: "Apr", income: 28000, outcome: 26000 },
  { name: "May", income: 35000, outcome: 30000 },
  { name: "Jun", income: 40000, outcome: 22000 },
  { name: "Jul", income: 20000, outcome: 25000 },
  { name: "Aug", income: 27000, outcome: 28000 },
];

const AnalyticsChart: React.FC = () => {
  return (
    <div className="bg-[#141332] p-5 rounded-xl shadow-lg w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Analytics</h2>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="text-gray-400 text-sm">Income</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
            <span className="text-gray-400 text-sm">Outcome</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#ccc" />
          <YAxis stroke="#ccc" />
          <Tooltip
            contentStyle={{
              background: "#1A1A40",
              borderRadius: "8px",
              border: "none",
              color: "#fff",
            }}
          />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Bar
            dataKey="income"
            fill="#7B61FF"
            barSize={12}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="outcome"
            fill="#38BDF8"
            barSize={12}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
