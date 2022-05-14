import React, { useState, useEffect } from "react";
import RestaurandCard from "./RestaurandCard";
import { Triangle } from "react-loader-spinner";

function RestaurantCards() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    setIsLoading(true);
    const reponse = await fetch("/api/restaurants");
    const responseData = await reponse.json();
    setIsLoading(false);
    return responseData;
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <Triangle ariaLabel="loading-indicator" />
        <p className="font-semibold text-green-500 text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 px-10">
      <h1 className="text-2xl font-medium mb-6 text-green-500">Results</h1>
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start ">
        <RestaurandCard />
      </div>
    </div>
  );
}

export default RestaurantCards;
