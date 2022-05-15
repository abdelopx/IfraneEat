import React, { useState, useEffect } from "react";
import RestaurandCard from "./RestaurantCard";
import { Triangle } from "react-loader-spinner";

function RestaurantCards() {
  const [isLoading, setIsLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    setIsLoading(true);
    const reponse = await fetch("/api/restaurants");
    const responseData = await reponse.json();
    setRestaurants(responseData.restaurants);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center gap-2">
        <Triangle ariaLabel="loading-indicator" />
        <p className="font-semibold text-green-500 text-lg">
          🥙 Loading Restaurants...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 px-10">
      <h1 className="text-2xl font-medium mb-6 text-green-500">
        Found Restaurants
      </h1>
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start ">
        {restaurants.map((restaurant) => {
          return <RestaurandCard key={restaurant.id} restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
}

export default RestaurantCards;
