"use client";

import React from "react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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

const AnalyticsChart = () => {
  return (
    <div className="bg-[#2D2B4D] p-5 rounded-xl shadow-lg w-full h-[375px] mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-normal">Analytics</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#464687] rounded-full"></span>
            <span className="text-white text-sm">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#64CFF6] rounded-full"></span>
            <span className="text-white text-sm">Outcome</span>
          </div>
          <Image src="/icons/2020.svg" alt="arrow" width={64} height={20} />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <XAxis dataKey="name" stroke="#8C89B4" />
          <YAxis stroke="#8C89B4" />
          <Tooltip
            contentStyle={{
              background: "#464687",
              borderRadius: "8px",
              border: "none",
              color: "#fff",
              height: "60px",
            }}
          />
          <Bar
            dataKey="income"
            fill="#64CFF6"
            barSize={9}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="outcome"
            fill="#464687"
            barSize={9}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
