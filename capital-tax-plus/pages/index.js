import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Gstregistration from "../components/gstregistration";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Gstindiannational from "../components/gstindiannational";
import Gstcompany from "../components/gstcompany";
import { useState,useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AnimatedSectionAOS = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration
      once: false, // Animation only once
      easing: 'ease', // Easing function
    });
  }, []);

  return (
    <div data-aos="fade-up">
      <div data-aos="fade">
        {children}
      </div>
    </div>
  );
};



const Home = () => {
  return (
    <>
      <Head>
        <title>Capital TaxPlus</title>
        <meta
          name="description"
          content="Capital TaxPlus"
        />
        <link rel="icon" href="/img/logo1.png" />
      </Head>

      <Navbar />
      <Hero />
      <AnimatedSectionAOS> 
      <SectionTitle
        pretitle="Taxplus Benefits"
        title=" Why should you use TaxPlus">
        Streamline your tax filing process this year with Tax Plus!  
        This user-friendly platform allows you to not only file your income tax 
        return but also manage your Goods and Services Tax (GST) 
        conveniently in one place, saving you time and minimizing the 
        hassle of navigating separate systems.
      </SectionTitle>
      </AnimatedSectionAOS>

      <AnimatedSectionAOS>      
      <Benefits data={benefitOne} />
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS>
      <Benefits imgPos="right" data={benefitTwo} />
      </AnimatedSectionAOS>
      
     
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}

            {/* GST Section */}
            <AnimatedSectionAOS> 
      <SectionTitle pretitle="Documents Required for GST Registration" title="Partnership Firm">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <Gstregistration />
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <SectionTitle title="Indian Nationals">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <Gstindiannational />
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <SectionTitle title="Company">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS>
      
      <AnimatedSectionAOS> 
      <Gstcompany />
      </AnimatedSectionAOS>
      

      {/* GST End */}
      <AnimatedSectionAOS> 
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      </AnimatedSectionAOS>
     
     <AnimatedSectionAOS> 
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        In this section we highlight our popular customers.
      </SectionTitle>
      </AnimatedSectionAOS> 
      <AnimatedSectionAOS> 
      <Testimonials />
      </AnimatedSectionAOS>
      

      
      <AnimatedSectionAOS> 
      <Faq />
      </AnimatedSectionAOS>
      <AnimatedSectionAOS> 
      <Cta />
      </AnimatedSectionAOS>
      
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;