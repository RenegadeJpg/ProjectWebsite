import React from "react";
import ProjectTeam from "./TeamMembersCard";

interface TeamMember {
  name: string;
  description: string;
  img: string;
}

interface TeamMemberSectionProps {
  projectName: string;
  team: TeamMember[];
}

const TeamMemberSection: React.FC<TeamMemberSectionProps> = ({
  projectName,
  team,
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-primary-darker mb-6">
            {projectName}'s Team Members
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, index) => (
              <ProjectTeam
                key={index}
                name={member.name}
                description={member.description}
                img={member.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberSection;
