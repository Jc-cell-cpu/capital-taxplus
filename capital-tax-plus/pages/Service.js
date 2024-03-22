// pages/GST.js
import Head from "next/head";
import Navbar from "../components/navbar";
import React from 'react';
import ComingSoonPage from "../components/comingSoon";
// import payment from "../components/payment";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

const Service = () => {
    return (
        <>
      <Head>
        <title>Service</title>
        <meta
          name="description"
          content="Capital TaxPlus"
        />
        <link rel="icon" href="/img/logo1.png" />
      </Head>

      <Navbar />
      <payment />
     
      <ComingSoonPage />
      <Footer />
      <PopupWidget />

      </>

      );
};

export default Service; // Correct default expor