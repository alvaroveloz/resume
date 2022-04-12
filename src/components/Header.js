import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/alvaro.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div className='pt-6 pl-6 pr-6 bg-gray-500 '>
      <div className='flex items-center justify-center bg-white p-5 shadow rounded-lg gap-4'>
        <div className='w-1/3 flex justify-center'>
          <div className='inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40'>
            <Image
              className=' object-cover h-32 w-32 rounded-full'
              src={profilePic}
              alt='Image of Alvaro Veloz'
            />
          </div>
        </div>
        <div className='w-1/3  flex flex-col justify-start'>
          <h2 className='mt-4 font-bold text-xl'>Alvaro Veloz</h2>
          <h6 className='mt-2 text-sm font-medium'>Full Stack Developer</h6>

          <p className='justify-start text-xs text-gray-500 mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla.
          </p>
        </div>
        <div className='w-1/3 ' >
          <ul className='flex flex-row justify-center mt-4 space-x-2'>
            <li>
              <a
                href=''
                className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800'
              >
                <FontAwesomeIcon icon={faGithub} size={'2x'} />
              </a>
            </li>
            <li>
              <a
                href=''
                className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800'
              >
                <FontAwesomeIcon icon={faLinkedinIn} size={'1x'} />
              </a>
            </li>
            <li>
              <a
                href=''
                className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800'
              >
                <FontAwesomeIcon icon={faFacebook} size={'2x'} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
