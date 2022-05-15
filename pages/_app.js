import "../styles/globals.css";
import { Fragment } from "react";
import Head from 'next/head'

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>IfraneEat - Explore restaurants all over Ifrane city.</title>
        <link rel="shortcut icon" href="pizza.png" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
     
    </Fragment>
  );
}

export default MyApp;
