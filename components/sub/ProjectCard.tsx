import { Butterfly_Kids } from "next/font/google";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div
      className="relative overflow-hidden
    rounded-xl  border-2 border-purple-500  h-64 flex flex-col justify-center items-center"
    >
      <div className="relative p-4 bg-transparent flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold text-white text-center">
          {title}
        </h1>
        {/* Underline Section */}
        <div className="w-full mt-2 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>{" "}
        {/* Underline with gradient */}
        <p className="mt-4 text-gray-300 text-center">{description}</p>{" "}
        {/* Increased gap between title and description */}
        {/* Button Section */}
        <div className="mt-4 flex justify-center">
          <button className="flex items-center px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:bg-gradient-to-l transition duration-300">
            Know More
            <span className="ml-2">➔</span> {/* Arrow added here */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
