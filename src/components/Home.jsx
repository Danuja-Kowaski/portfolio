import React from 'react';
import MyProfile from '../assets/danuja.png';
import {AiOutlineArrowRight} from 'react-icons/ai';


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
     from-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col
         items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-4xl sm:test-7xl font-bold text-white'>
                    I.m a Full stack developer
                </h1>
                <p className='text-gray-500 py-4 max-w-md'>
                Lorem Ipsum is simply dummy text of the printing 
                and typesetting industry. Lorem Ipsum has been 
                the industry's standard dummy text ever since 
                the 1500s, when an unknown printer took a galley
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2
                    flex items-center rounded-md bg-gradient-to-r from-cyan-500
                     to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <AiOutlineArrowRight size={25} className="ml-1"/>
                        </span>
                    </button>
                </div>

                <div>
                {/* <img src={MyProfile} alt='working' 
                className='rounded-2xl mr-auto w-2/3 md:w-full'/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home