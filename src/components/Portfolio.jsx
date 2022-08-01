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
      src: discordClone,
    },
    {
      id: 2,
      src: movieClone,
    },
    {
      id: 3,
      src: reactTodo,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: teamsClone,
    },
    {
      id: 6,
      src: reactchart,
    },
  ];

  return (
    <div
      name="portfolio"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
