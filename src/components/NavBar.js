import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/alvaro.jpg';
import Link from 'next/link';

const NavBar = ({ children }) => {
  return (
    <div>
      <nav className='container flex justify-around py-2 mx-auto bg-slate-700'>
        <div className='flex items-center'>
          <h4 className='text-lg font-medium text-white'>Alvaro Veloz Brito</h4>
        </div>
        {/* <!-- left header section --> */}
        <div className='items-center hidden space-x-8 lg:flex text-white'>
          <Link href='/'>
            <a>Resume</a>
          </Link>
          <Link href='/github'>
            <a>GitHub</a>
          </Link>
          
          <Link href='/linkedin'>
            <a>Linkedin</a>
          </Link>
          <Link href='/facebook'>
            <a>Facebook</a>
          </Link>
          <Link href='/blogs'>
            <a>Blogs</a>
          </Link>
        </div>
        {/* <!-- right header section --> */}
        <div className='flex items-center space-x-2'>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
          </a>
          <a href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-gray-400'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </a>
          <a href='#' className='p-1 rounded-full bg-blue-50 w-10 h-10'>           
            <Image
              className=' object-cover  rounded-full'
              src={"https://avatars.githubusercontent.com/u/29387958?v=4"}
              alt='Image of Alvaro Veloz'
              width={"200px"}
              height={"200px"}
            />
          </a>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default NavBar;
