import React from 'react';
import { FaGithub, FaLinkedin, FaMailBulk, FaPortrait } from 'react-icons/fa';


const SocialLinks =() =>{

  const links = [
    {
      id: 1,
      child: (
        <>
        LinkedIn <FaLinkedin size={25} />
        </>  
      ),
      href:'https://www.linkedin.com/in/danuja-silva-536766195/',
      style:'rounded-tr-md bg-blue-800'
    },
    {
      id: 2,
      child: (
        <>
        Mail <FaMailBulk size={25}/>
        </>  
      ),
      href:'mailto:danuja.kowaski@gmail.com',
      style:'rounded-tr-md bg-red-500'
    },
    {
      id: 3,
      child: (
        <>
        Github <FaGithub size={25}/>
        </>  
      ),
      href:'https://www.github.com/danuja-kowaski/',
      style:'rounded-tr-md bg-gray-400'
    },
    {
      id: 4,
      child: (
        <>
        Resume <FaPortrait size={25}/>
        </>  
      ),
      href:'/Danuja_CV.pdf',
      style:'rounded-tr-md bg-orange-400',
      download: true,
    }

  ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks