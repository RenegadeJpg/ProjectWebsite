interface IntroSectionProps {
  projectName: string;
  openingStatement: string;
  closingStatement: string;
  imagePath: string;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  projectName,
  openingStatement,
  closingStatement,
  imagePath,
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={imagePath}
              alt="Introduction"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 px-6 py-8">
            <h1 className="text-3xl font-bold text-primary-darker mb-6">
              Welcome to {projectName}
            </h1>

            <div className="prose prose-lg">
              <p className="mb-4 text-primary-dark">{openingStatement}</p>
              <p className="text-primary-dark">{closingStatement}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
