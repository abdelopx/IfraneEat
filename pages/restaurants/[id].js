import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { Triangle } from "react-loader-spinner";
import Link from "next/link";
import RestaurantId from "../../components/RestaurantId";

function id({ restaurant }) {
  return <RestaurantId restaurant={restaurant} />;
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
