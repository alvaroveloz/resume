import React from 'react';

const SecondSection = () => {
  return (
    <div className='bg-gray-500 flex flex-row'>
      <div className='pl-6 pt-6 pb-6 pr-3 bg-gray-500 flex flex-row'>
        <div className='flex items-center justify-center bg-white p-5 shadow rounded-lg gap-4'>
          <div className='w-full flex flex-col justify-start'>
            <h2 className='mt-4 font-bold text-xl'>Skills</h2>
            <h6 className='mt-2 text-sm font-medium'>NextJS</h6>
            <p className='justify-start text-xs text-gray-500 mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ab enim molestiae nulla. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ab enim molestiae nulla.
            </p>
            <h6 className='mt-2 text-sm font-medium'>React</h6>
            <p className='justify-start text-xs text-gray-500 mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ab enim molestiae nulla. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ab enim molestiae nulla.
            </p>
            <h6 className='mt-2 text-sm font-medium'>TailwindCSS</h6>
            <p className='justify-start text-xs text-gray-500 mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
              molestiae nulla. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Ab enim molestiae nulla. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Ab enim molestiae nulla.
            </p>
          </div>
        </div>
      </div>
      <div className='pl-3 pt-6 pb-6 pr-6 bg-gray-500 flex flex-col'>
      <div className='flex items-center justify-center bg-white p-5 shadow rounded-lg gap-4'>
        <div className='w-full flex flex-col justify-start h-80'>
          <h2 className='mt-4 font-bold text-xl'>Experiences</h2>
          <h6 className='mt-2 text-sm font-medium'>Awana</h6>

          <p className='justify-start text-xs text-gray-500 mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ab enim molestiae nulla. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ab enim molestiae nulla.
          </p>

          <h6 className='mt-2 text-sm font-medium'>Logos Academy</h6>

          <p className='justify-start text-xs text-gray-500 mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
            molestiae nulla. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ab enim molestiae nulla. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ab enim molestiae nulla.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SecondSection;
