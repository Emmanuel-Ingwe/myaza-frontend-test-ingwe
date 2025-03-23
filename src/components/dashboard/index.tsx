import React from "react";
import Analytics from "./analytics";

const index = () => {
  return (
    <section className="mt-[100px]">
      <h1 className="mb-9 text-[#C1C1C1] font-medium">
        Here's what's happening with your store today.
      </h1>
      <div className="w-full flex grid-cols-2 gap-4">
        <div className="w-[53%]">
          <Analytics />
        </div>
        <div className="">My cards</div>
      </div>
      <div>
        <div className="">Recent Trans</div>
        <div className="">Activity</div>
      </div>
    </section>
  );
};

export default index;
