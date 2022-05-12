import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-slate-100 flex flex-col">
      <NavBar />
      <section className="flex justify-center flex-col items-center gap-4 mt-24">
        <h1 className="font-semibold text-5xl text-green-500">Ifood</h1>
        <h2 className="font-medium text-2xl mb-7">
          Explore restaurants all over Ifrane city.
        </h2>
        <Link href="/">
          <a className="bg-green-500 drop-shadow-md text-white px-7 py-3 rounded-full text-lg font-semibold">Contact us</a>
        </Link>
      </section>
      <section className="bg-green-500 py-10 mt-24 flex gap-12 flex-wrap justify-center items-center">
        <div className="gap-2 flex flex-col">
          <Image className="rounded-xl overflow-hidden drop-shadow-md max-w-100" src="/food1.jpeg" alt="" width={330} height={220} />
          <div className="max-w-xs flex flex-col items-center">
          <h2 className="text-2xl text-white font-medium mt-3 mb-1">Its here all in one website.</h2>
          <p className="text-md text-white font-medium text-center">Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.</p>
          </div>
        </div>
        <div className="gap-2 flex flex-col">
          <Image className="rounded-xl overflow-hidden drop-shadow-md max-w-100" src="/food1.jpeg" alt="" width={330} height={220} />
          <div className="max-w-xs flex flex-col items-center">
          <h2 className="text-2xl text-white font-medium mt-3 mb-1">Its here all in one website.</h2>
          <p className="text-md text-white font-medium text-center">Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.</p>
          </div>
        </div>
        <div className="gap-2 flex flex-col">
          <Image className="rounded-xl overflow-hidden drop-shadow-md max-w-100" src="/food1.jpeg" alt="" width={330} height={220} />
          <div className="max-w-xs flex flex-col items-center">
          <h2 className="text-2xl text-white font-medium mt-3 mb-1">Its here all in one website.</h2>
          <p className="text-md text-white font-medium text-center">Discover local, on-demand delivery or Pickup from restaurants, nearby grocery and convenience stores, and more.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
