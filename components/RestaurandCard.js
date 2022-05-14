import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import for_you from "../public/for_you.svg";



function RestaurandCard({ id }) {
  
  return (
    <Link
      href={{
        pathname: "/restaurants/",
        query: { restaurantId: id },
      }}
    >
      <a className="drop-shadow-lg w-80 items-center justify-center py-5 px-5 bg-green-500 rounded-2xl mb-3 transition hover:scale-105 ease-in duration-175">
        <h2 className="text-xl text-white font-semibold mb-3">
          Restaurant For You
        </h2>
        <div className="flex gap-4">
          <Image
            className="overflow-hidden"
            src={for_you}
            alt="Picture of restaurants"
            width={70}
            height={70}
          />
          <div>
            <p className="text-white italic text-sm">
              Opening hours: 9:00 AM - 12 AM (Mon-Sun)
            </p>
            <p className="text-white italic text-sm">Phone: +212-654-759-878</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default RestaurandCard;
