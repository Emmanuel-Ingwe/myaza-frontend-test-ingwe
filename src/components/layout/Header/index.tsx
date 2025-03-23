"use client";

import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex fixed items-center justify-between w-[100%] h-[120px] px-6 bg-[#1D1D41] lg:w-[calc(100%-278px)]">
      <div>
        <Image
          src="/icons/welcome-text-dashboard.svg"
          alt="logo"
          width={228}
          height={24}
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <div className="relative w-[380px]">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full py-2 pl-5 pr-12 text-white bg-[#2D2B4D] border border-[#29294F] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5A5AE6] placeholder:text-xs"
            />
            <h1 className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5">
              <Image
                src="/icons/search-icon.svg"
                alt="search"
                width={20}
                height={20}
              />
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
