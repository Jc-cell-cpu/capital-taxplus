// pages/GST.js
import Head from "next/head";
import Navbar from "../components/navbar";
import React from 'react';
import ComingSoonPage from "../components/comingSoon";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

const GstPage = () => {
    return (
        <>
      <Head>
        <title>GST</title>
        <meta
          name="description"
          content="Capital TaxPlus"
        />
        <link rel="icon" href="/img/logo1.png" />
      </Head>

      <Navbar />
     
      <ComingSoonPage />
      <Footer />
      <PopupWidget />

      </>
      );
};

export default GstPage; // Correct default export