import React from "react";
import Analytics from "./analytics";
import Card from "./card";
import Transactions from "./transactions";
import Activity from "./activity";

const index = () => {
  return (
    <section className="mt-[100px]">
      <h1 className="mb-9 text-[#C1C1C1] font-medium">
        Here's what's happening with your store today.
      </h1>
      <div className="w-full flex grid-cols-2 gap-4">
        <div className="w-[65%] mr-10">
          <Analytics />
        </div>
        <div className="w-[35%]">
          <Card />
        </div>
      </div>
      <div className="w-full flex grid-cols-2 gap-4">
        <div className="w-[65%] mr-10">
          <Transactions />
        </div>
        <div className="w-[35%]">
          <Activity />
        </div>
      </div>
    </section>
  );
};

export default index;
