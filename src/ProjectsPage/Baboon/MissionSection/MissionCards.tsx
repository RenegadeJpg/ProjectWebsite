import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-primary-lighter/10 rounded-lg p-6 transform transition-all duration-300 hover:shadow-lg hover:bg-primary-lighter/20">
      <h3 className="text-lg font-semibold text-primary-darker mb-3">{title}</h3>
      <p className="text-primary-dark">{description}</p>
    </div>
  );
};

export default FeatureCard;