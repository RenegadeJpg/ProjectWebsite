import React from "react";
import { Link } from "react-router-dom";
import BFprojects from "./BFprojectsCard";

const Team = [
  {
    name: "Baboon Sanctuary",
    description: "Details about the Baboon Sanctuary project.",
    url: "/baboons",
    img: "/img/ProjectThumbnails/baboon/baboonThumbnail.jpeg",
  },
];

const TeamMemberSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-primary-darker mb-6">
            Meet the Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Team.map((project, index) => (
              <Link to={project.url} key={index}>
                <BFprojects
                  name={project.name}
                  description={project.description}
                  url={project.url}
                  img={project.img}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSection;
