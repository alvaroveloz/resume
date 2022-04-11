import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/alvaro.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
  



const Header = () => {

  return (
    
    <div className='flex flex-row items-center justify-center bg-white p-5 shadow rounded-lg gap-5'>
        <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
      <div className='inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40'>
        {/* <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
						 alt=""
						 className="h-full w-full"> */}
        <Image src={profilePic} alt="Image of Alvaro Veloz" />
      </div>
      <div>
        <h2 className='mt-4 font-bold text-xl'>Alvaro Veloz</h2>
        <h6 className='mt-2 text-sm font-medium'>Full Stack Developer</h6>

        <p className='text-xs text-gray-500 text-center mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
          molestiae nulla.
        </p>
      </div>
      <div>
        <ul className='flex flex-row mt-4 space-x-2'>
          <li>
            <a
              href=''
              className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800'
            >
               <FontAwesomeIcon icon={faGithub} size={'2x'}/>
            </a>
          </li>
          <li>
            <a
              href=''
              className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800'
            >
               <FontAwesomeIcon icon={faLinkedinIn} size={'1x'}/>
            </a>
          </li>
          <li>
            <a
              href=''
              className='flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800'
            >
              <FontAwesomeIcon icon={faFacebook} size={'2x'}/>

     
            </a>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Header;
