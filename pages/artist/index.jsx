import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
const Artist = () => {

  const artist = {
    name: 'Preshel Jen Chavez',
    description: 'A brief introduction about the artist and her work.',
    imageUrl: '/public/jin.jpg',
  };

  return (
   
    <div className=" bg-slate-950 container mx-auto px-4 py-8">
      <Head>
      <title>Arlene Joy Nacion | Portfolio</title>
    </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="md:order-2">
          <Image
            src={artist.imageUrl}
            alt={artist.name}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="md:order-1">
          <h2 className="text-3xl font-bold mb-4">{artist.name}</h2>
          <p className="text-lg mb-4">{artist.description}</p>
          <p className="text-sm text-gray-600">Follow her journey on <a href="https://instagram.com/herartist" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram</a></p>
        </div>
      </div>
    </div>
  );
};

export default Artist;
