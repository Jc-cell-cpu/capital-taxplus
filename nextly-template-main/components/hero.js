import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import emailjs from 'emailjs-com';
import { useState } from 'react';


const Hero = () => {

  const [email, setEmail] =  useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleStartFiling = async () => {
    try {
      const templateParams = {
        from_name: email,
        to_name: 'Taxplus', // Replace with your company name
        message_html: `User Email: ${email}`, // Include the user's email in the message
      };

      await emailjs.send(
        'service_ua78dbp', // Replace with your EmailJS service ID
        'template_l54h5m7', // Replace with your EmailJS template ID
        templateParams,
        'CFU_LpDqtf6w-ZMxb' // Replace with your EmailJS user ID
      );
      setEmail('');
      // console.log('Email sent successfully');
      alert('Email sent successfully');
      // Optionally, you can show a success message to the user
    } catch (error) {
      alert("error")
      // console.error('Error sending email:', error);
    }
  };



  
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Save Taxes; Grow Your Business
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Tax season shouldn't be a source of stress.  
            Tax Plus offers a user-friendly solution for 
            individuals and businesses in India
            seeking a smoother tax filing experience.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
             
            <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 w-full sm:w-auto"
              />
              <button
          onClick={handleStartFiling}
          className="px-5 py-3 text-lg font-medium text-center text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 rounded-md"
        >
          Start Filing
        </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}



export default Hero;