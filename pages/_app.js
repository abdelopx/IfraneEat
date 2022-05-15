import "../styles/globals.css";
import { Fragment } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Router from "next/router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import nProgress from "nprogress";
import "../styles/nprogress.css";


Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);


function MyApp({ Component, pageProps, router }) {
  return (
    <Fragment>
      <Head>
        <title>IfraneEat - Explore restaurants all over Ifrane city.</title>
        <link rel="shortcut icon" href="pizza.png" />
      </Head>
      <NavBar />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Fragment>
  );
}

export default MyApp;
