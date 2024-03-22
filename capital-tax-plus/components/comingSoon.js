import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const ComingSoonPage = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(prefersDarkScheme.matches);

        const handleChange = (event) => {
            setIsDarkMode(event.matches);
        };

        prefersDarkScheme.addEventListener('change', handleChange);

        return () => {
            prefersDarkScheme.removeEventListener('change', handleChange);
        };
    }, []);
    const handleSubscribeClick = () => {
        // Redirect to landing page
        router.push('/');
    };

  return (
    <>
 {/* <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500">
           <Head>
               <title>Coming Soon</title>
               <meta name="description" content="Your website description" />
               <link rel="icon" href="/favicon.ico" />
           </Head>

           <div className="max-w-lg mx-auto text-center p-6 rounded-lg bg-white bg-opacity-25 shadow-lg">
               <h1 className="text-5xl font-bold text-white mb-4">Coming Soon</h1>
               <p className="text-lg text-gray-200 mb-8">Stay tuned! Our website is under construction.</p>
               <div className="flex justify-center">
                   <button className="bg-purple-600 text-white px-6 py-3 rounded-full font-bold hover:bg-purple-700 transition duration-300 ease-in-out">Subscribe</button>
               </div>
               <div className="mt-8 text-gray-200 text-sm">
                   <p>&copy; {new Date().getFullYear()} Your Company</p>
               </div>
           </div>
       </div> */}

<div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
            {/* <Head>
                <title>Coming Soon</title>
                <meta name="description" content="Your website description" />
                <link rel="icon" href="/img/logo1.png" />
            </Head> */}

            {/* Parallax layers */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="parallax-layer layer1"></div>
                <div className="parallax-layer layer2"></div>
                <div className="parallax-layer layer3"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-lg mx-auto text-center p-6 rounded-lg bg-white dark:bg-gray-800 bg-opacity-25 shadow-lg">
                    <h1 className="text-5xl font-bold text-white dark:text-gray-200 mb-4">Coming Soon</h1>
                    <p className="text-lg text-gray-200 dark:text-gray-400 mb-8">Stay tuned! Our website is under construction.</p>
                    <div className="flex justify-center">
                    <button onClick={handleSubscribeClick} className="bg-purple-600 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-bold transition duration-300 ease-in-out">Subscribe</button>
                    </div>
                    <div className="mt-8 text-gray-200 text-sm">
                        <p>&copy; {new Date().getFullYear()} Capital TaxPlus</p>
                    </div>
                </div>
            </div>
        </div>
</>

  );
};

export default ComingSoonPage;
