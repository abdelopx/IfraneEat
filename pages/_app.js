import "../styles/globals.css";
import { Fragment } from "react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
