import React from "react";
import FeatureCard from "./MissionCards";

interface Milestone {
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  projectName: string;
  milestones: Milestone[];
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  projectName,
  milestones: features,
}) => {
  return (
    <div className="max-w-3xl mx-auto mt-[5%]">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-primary-darker mb-6">
            {projectName}'s Roadmap
          </h1>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
