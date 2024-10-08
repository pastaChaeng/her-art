import React from 'react';
import NavBar from '../components/NavBar';
import Head from 'next/head';
import Image from 'next/image';

const Home = () => {
  return (
   <div>
     <Head>
        <title>Her Art Gallery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/public/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div>
      <div className='p-4 text-white'>
        <NavBar />
        <div className='mt-32'>
          <div className="container mx-auto px-3 py-30 flex flex-col md:flex-row items-center md:justify-between lg:flex-row">
            <div className='ml-4 md:ml-24 text-center md:text-left text-4xl md:text-8xl mb-10 md:mb-0'>
              <div>
                <span className='text-[#55AD9B]'>HER</span> 
                <span className='text-[#2C2C2C] font-thin'>ARTGALLERY</span>
              </div>
              <div className='mt-5'>
                <span className='text-[#55AD9B] '>DISCOVER</span>
              </div>
              <div className='mt-5'>
                <span className='text-[#55AD9B] font-thin'>TALENTS</span>
              </div>
            </div>
            <div className="flex flex-col mr-50 sm:md-10 md:mr-10 lg:mr-10 xl:mr-24 ">
              <Image
                src='/jin.jpg' 
                alt='Artist'
                width={300}
                height={200}
                className="rounded-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Home;
