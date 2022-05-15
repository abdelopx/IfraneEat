import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";



function RestaurandCard({ restaurant }) {
  
  return (
    <Link
      href={{
        pathname: `/restaurants/${restaurant.id}`,
        
      }}
    >
      <a className="drop-shadow-lg w-80 items-center justify-center py-5 px-5 bg-green-500 rounded-2xl mb-3 transition hover:scale-105 ease-in duration-175">
        <h2 className="text-xl text-white font-semibold mb-3 italic">
         {restaurant.name}
        </h2>
        <div className="flex gap-4">
          <Image
            className="overflow-hidden rounded-full"
            src={`/../public/${restaurant.image}.jpg`}
            alt="Picture of restaurants"
            width={100}
            height={100}
          />
          <div>
            <p className="text-white italic text-sm">
              Opening hours: {restaurant.hours}
            </p>
            <p className="text-white italic text-sm">Phone: {restaurant.phone}</p>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default RestaurandCard;
