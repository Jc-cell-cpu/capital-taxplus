// pages/Pricing.js
import Head from "next/head";
import Navbar from "../components/navbar";
import React from 'react';
import Footer from "../components/footer";
import PaymentComponent from "../components/PaymentComponent";
import PaymentComponentII from "../components/PaymentComponentII";
import PaymentComponentBasic from "../components/PaymentComponentBasic";
import PaymentComponentGst from "../components/PaymentComponentGst";
import PopupWidget from "../components/popupWidget";
import SectionTitle from "../components/sectionTitle";

const Pricing = () => {
    return (
      <>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Capital TaxPlus"
        />
        <link rel="icon" href="/img/logo1.png" />
      </Head>

      <Navbar />
      <SectionTitle pretitle="ITR Filling">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <PaymentComponent />
      <PaymentComponentII />

      <SectionTitle pretitle="Tax Planning">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <PaymentComponentBasic />

      <SectionTitle pretitle="Tax Planning">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <PaymentComponentGst />
     
      <Footer />
      <PopupWidget />

      </>
      
      );
      
};

export default Pricing; // Correct default expor