"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const cardImages = ["/images/atm.png", "/images/atm.png", "/images/atm.png"];

const CardCarousel: React.FC = () => {
  return (
    <div className="bg-[#2D2B4D] p-5 rounded-lg shadow-lg w-full mx-auto">
      <h3 className="text-white text-xl font-normal mb-3">My Card</h3>
      <p className="text-gray-400 mb-2 text-sm">Card Balance</p>
      <p className="text-white text-2xl font-normal">$15,595.015</p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={10}
        slidesPerView={1}
        className="mt-3">
        {cardImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full cursor-pointer mb-9">
              <img
                src={src}
                alt={`Card ${index + 1}`}
                className="rounded-lg w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mb-1 flex gap-4">
        <button className="flex-1 cursor-pointer bg-[#CBC8FF] text-gray-800 py-2 px-4 rounded-md">
          Manage Cards
        </button>
        <button className="flex-1 cursor-pointer border border-gray-400 fontn text-[#CBC8FF] py-2 px-4 rounded-md">
          Transfer
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
