import React, { useState, useEffect } from "react";
import Image from "next/image";

import RestaurantCards from "../../components/RestaurantCards";

import FoodSvg from "../../public/search_food.svg";

function restaurants() {
  return (
    <div className="flex flex-col h-full w-full">
      <section className="bg-green-500 flex flex-row items-center justify-center px-16 drop-shadow-lg mb-16 flex-wrap w-full lg:gap-12">
        <h1 className="font-semibold text-3xl text-white mt-10">
          Restaurants in Ifrane
        </h1>
        <Image
          className="flex-1"
          src={FoodSvg}
          alt=""
          width={200}
          height={220}
        />
      </section>
      <RestaurantCards className="flex-1" />
    </div>
  );
}

export default restaurants;
