import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { Triangle } from "react-loader-spinner";
import Link from "next/link";

import MenuSvg from "../../public/menu.svg";
import MenuItem from "../../components/MenuItem";

function id({ restaurant }) {
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDishes = async () => {
    setIsLoading(true);
    const reponse = await fetch(`/api/dishes/${restaurant.id}`);
    const responseData = await reponse.json();
    setDishes(responseData.dishes);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  console.log(restaurant);

  return (
    <div className="">
      <section className="bg-green-500 flex flex-row items-center justify-center px-16 drop-shadow-lg mb-16 flex-wrap w-full lg:gap-12 pb-8">
        <Image
          className="flex-1"
          src={MenuSvg}
          alt=""
          width={200}
          height={220}
        />
        <h1 className="font-semibold text-4xl lg:text-5xl text-white mb-4">
          {restaurant.name}&apos;s Menu
        </h1>
        <div>
          {restaurant.creditCard ? (
            <p className="text-white italic">
              Method of Payments: Cash or Debit/Credit Card
            </p>
          ) : (
            <p className="text-white italic">Method of Payments: Cash</p>
          )}

          <p className="text-white italic">Opening hours: {restaurant.hours}</p>
          <p className="text-white italic">Location: {restaurant.location}</p>
          <p className="text-white italic">Phone Number: {restaurant.phone}</p>
          <Link href={`${restaurant.mapLink}`}>
            <a className="text-white font-medium" target="_blank">📍 Click to see location on map</a>
          </Link>
        </div>
      </section>
      <div className="flex px-10 gap-12 flex-wrap justify-center py-12 ">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center gap-2">
            <Triangle ariaLabel="loading-indicator" />
            <p className="font-semibold text-green-500 text-xl mt-6">
              🥧 Looking for Dishes...
            </p>
          </div>
        ) : (
          dishes.map((dish) => {
            return <MenuItem key={dish.id} dish={dish} />;
          })
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const reponse = await fetch(`http://localhost:3000/api/restaurants/${id}`);
  const responseData = await reponse.json();

  return {
    props: { restaurant: responseData.restaurant }, // will be passed to the page component as props
  };
}

export default id;
