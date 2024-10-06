import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Animation from "./Animation";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Key Features
      </h1>

      <div className="flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src=""
          title="Ask Anything"
          description="Lets Users Quickly find Answers to their questions without having to search through multiple sources."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Improve everyday"
          description="The app uses natural language processing to understand user queries and provide accurate and relevant responses."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Connect everywhere"
          description="Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient."
        />
      </div>
      <div
        style={{
          marginTop: "30px",
        }}
        className="flex flex-col md:flex-row gap-10 px-10"
      >
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Fast responding"
          description="Lets users quickly find answers to their questions without having to search through multiple sources."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Ask anything"
          description="Lets users quickly find answers to their questions without having to search through multiple sources."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Improve everyday"
          description="The app uses natural language processing to understand user queries and provide accurate and relevant responses."
        />
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
