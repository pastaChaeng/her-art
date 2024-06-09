import React, { useState } from 'react';
import { VscGithub } from 'react-icons/vsc';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navData = [
  { name: 'artist', path: '/artist' },
  { name: 'work', path: '/work' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='p-6 left-0 shadow-md fixed top-0 w-full z-10 bg-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl ml-4 md:ml-32 lg:ml-32'>
          <Link href='/' className='text-[#2C2C2C]'>
            
              <span className='text-[#55AD9B]'>HER</span> ART GALLERY.
            
          </Link>
        </div>
        <div className='flex items-center mr-4 md:mr-32 lg:mr-32'>
          <div className='hidden sm:flex space-x-4'>
            {navData.map((link, i) => (
              <Link href={link.path} key={i} className={`text-[#2C2C2C] hover:text-[#55AD9B] ${
                link.path === pathname ? 'font-bold' : ''
              }`}>
                
                  {link.name.toUpperCase()}
                
              </Link>
            ))}
            <Link href='https://github.com/pastaChaeng' className='text-[#55AD9B]'>
             
                <VscGithub className='mt-1 text-xl' />
              
            </Link>
          </div>
          <button
            className='sm:hidden text-[#2C2C2C] hover:text-[#55AD9B] ml-auto'
            onClick={toggleMenu}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className='sm:hidden fixed inset-0 bg-[#2C2C2C] text-white'>
          <div className='container mx-auto flex flex-col h-full'>
            <div className='flex justify-end'>
              <button
                className='text-[#55AD9B] hover:text-[#ffffff] p-4 focus:outline-none'
                onClick={toggleMenu}
              >
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex flex-col justify-center items-center flex-1'>
              {navData.map((link, i) => (
                <Link href={link.path} key={i}  className={`block text-[#55AD9B] text-md hover:text-[#ffffff] py-2 px-4 ${
                    link.path === pathname ? 'font-bold' : ''
                  }`}>
                 
                    {link.name.toUpperCase()}
                
                </Link>
              ))}
              <Link href='https://github.com/pastaChaeng' className='block text-[#55AD9B] hover:text-[#ffffff] py-2 px-4'>
             
                  <VscGithub className='mt-1 text-xl' />
               
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
