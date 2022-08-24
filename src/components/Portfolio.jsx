import React from "react";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactTodo from "../assets/portfolio/Todo.png";
import discordClone from "../assets/portfolio/discord-clone.png";
import movieClone from "../assets/portfolio/movie-app.png";
import teamsClone from "../assets/portfolio/teams.png";
import reactchart from "../assets/portfolio/react-chart.jpg";



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactTodo,
      href: "https://github.com/Danuja-Kowaski/todo-app",
    },
    {
      id: 2,
      src: discordClone,
      href: "https://github.com/Danuja-Kowaski/todo-app",
    },
    {
      id: 3,
      src: movieClone,
      href: "https://github.com/Danuja-Kowaski/Movie-app",
    },
    {
      id: 4,
      src: teamsClone,
      href: "https://github.com/Danuja-Kowaski/todo-app",
    },
    {
      id: 5,
      src: reactchart,
      href: "https://github.com/Danuja-Kowaski/todo-app",
    },
    {
      id: 6,
      src: reactSmooth,
      href: "https://github.com/Danuja-Kowaski/todo-app",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
