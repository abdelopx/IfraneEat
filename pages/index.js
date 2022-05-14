import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col">
      <section className="flex justify-center flex-col items-center gap-4 mt-24">
        <h1 className="font-semibold text-5xl text-green-500">IfraneEat</h1>
        <h2 className="font-medium text-2xl mb-3">
          Explore restaurants all over Ifrane city.
        </h2>
        <p>
          <span className="text-5xl mr-2">🍔</span>
          <span className="text-5xl mr-2">🌮 </span>
          <span className="text-5xl mr-2">🌯</span>
          <span className="text-5xl mr-2">🥞</span>
          <span className="text-5xl mr-2">🍹</span>
        </p>
        <Link href="/restaurants">
          <a className="bg-green-500 drop-shadow-md text-white px-7 py-3 mt-6 rounded-full text-lg font-semibold transition hover:scale-110 ease-in duration-175">
            Discover More
          </a>
        </Link>
      </section>
      <section className="bg-green-500 py-10 mt-24 flex gap-12 flex-wrap justify-center items-center">
        <div className="flex flex-col overflow-hidden rounded-xl bg-white drop-shadow-2xl transition hover:scale-105 ease-in duration-300">
          <Image
            className="max-w-100"
            src="/food_3.jpeg"
            alt=""
            width={330}
            height={220}
          />
          <div className="max-w-xs flex flex-col items-center p-5">
            <h2 className="text-xl text-black font-medium mb-2">
              Its here all in one website.
            </h2>
            <p className="text-md text-black font-normal text-center">
              Discover local, on-demand delivery or Pickup from restaurants,
              nearby grocery and convenience stores, and more.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-xl bg-white drop-shadow-2xl transition hover:scale-105 ease-in duration-300">
          <Image
            className="object-none rounded-xl overflow-hidden drop-shadow-md max-w-100"
            src="/food_5.jpeg"
            alt=""
            width={330}
            height={220}
          />
          <div className="max-w-xs flex flex-col items-center p-5">
            <h2 className="text-xl text-black font-medium mb-1">
              Every Flavor Welcome.
            </h2>
            <p className="text-md text-black font-normal text-center">
              From your neighborhood sushi spot to the burger and fries you
              crave, choose from over the multiple local restaurants across
              Ifrane city.
            </p>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-xl bg-white drop-shadow-2xl transition hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl object-none overflow-hidden drop-shadow-md max-w-100"
            src="/food1.jpeg"
            alt=""
            width={330}
            height={220}
          />
          <div className="max-w-xs flex flex-col items-center p-5">
            <h2 className="text-xl text-black font-medium mb-1">
              Become a Partner.
            </h2>
            <p className="text-md text-black font-normal text-center">
              Grow your business and reach new customers by partnering with us.
            </p>
            <p className="text-md text-white font-normal text-center">
              Grow your business and reach new customers by partnering with us.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
