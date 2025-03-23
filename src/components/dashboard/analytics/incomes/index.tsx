import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="rounded-2xl w-full bg-[#2D2B4D] flex items-center justify-between px-5 py-3">
        <div className="flex">
          <Image
            src="/icons/arrow-box.svg"
            alt="arrow"
            width={40}
            height={40}
          />
          <div className="flex flex-col ml-3">
            <h1 className="text-[#8C89B4] text-xs font-medium">Total Income</h1>
            <h1 className="text-[#fff] font-normal pt-1 text-2xl">$632.000</h1>
          </div>
        </div>
        <div className="mt-6  flex justify-end p-1 text-xs bg-[#193345] rounded-4xl text-green-600 h">
          +1.29%
        </div>
      </div>

      <div className="rounded-2xl ml-9 w-full bg-[#2D2B4D] flex items-center justify-between px-5 py-3">
        <div className="flex">
          <Image
            src="/icons/arrow-box-2.svg"
            alt="arrow"
            width={40}
            height={40}
          />
          <div className="flex flex-col ml-3">
            <h1 className="text-[#8C89B4] text-xs font-medium">
              Total outcome
            </h1>
            <h1 className="text-[#fff] font-normal pt-1 text-2xl">$632.000</h1>
          </div>
        </div>
        <div className="mt-6 ml-10 text-xs p-1 bg-[#3C193B] rounded-4xl text-red-800">
          +1.29%
        </div>
      </div>
    </div>
  );
};

export default index;
