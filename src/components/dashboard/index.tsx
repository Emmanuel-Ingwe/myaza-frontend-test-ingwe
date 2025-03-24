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
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Analytics />
        </div>
        <div className="col-span-1">
          <Card />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-1">
        <div className="col-span-2">
          <Transactions />
        </div>
        <div className="col-span-1">
          <Activity />
        </div>
      </div>
    </section>
  );
};

export default index;
