import React from "react";

interface TeamMemberCardProps {
  name: string;
  description: string;
  url: string;
  img: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  description,
  url,
  img,
}) => {
  return (
    <div className="bg-primary-lighter/10 rounded-lg p-4 transform transition-all duration-300 hover:shadow-lg hover:bg-primary-lighter/20">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="aspect-w-1 aspect-h-1 mb-4">
          <img
            src={img}
            alt={`${name} thumbnail`}
            className="rounded-lg w-full h-full object-cover aspect-square"
          />
        </div>
        <h3 className="text-lg font-semibold text-primary-darker mb-3">
          {name}
        </h3>
        <p className="text-primary-dark">{description}</p>
      </a>
    </div>
  );
};

export default TeamMemberCard;
