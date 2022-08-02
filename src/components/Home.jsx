import React from 'react';
import MyProfile from '../assets/danuja.png';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import {Link} from 'react-scroll'; 

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="text-2xl w-80 sm:text-7xl font-bold text-white">
            I'm a 
          <Typewriter
            options={{autoStart: true,
            loop: true,
            delay: 40,
            strings:[
                "Web Developer",
                "Blockchain devotee",
                "ML enthusiast"           
                ]}}/>
          </div>
          <p className="text-gray-500 py-4 max-w-md">
            Junior developer willing to expand my knowledge & experience as a web developer and blockchain development
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={MyProfile}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
