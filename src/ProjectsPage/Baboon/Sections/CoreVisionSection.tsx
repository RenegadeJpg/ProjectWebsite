interface CoreVisionSectionProps {
  projectName: string;
  overallVision: string;
  keypoints: string[];
  closingStatement: string;
  imagePath: string;
}

const CoreVisionSection: React.FC<CoreVisionSectionProps> = ({
  projectName,
  overallVision,
  keypoints,
  closingStatement,
  imagePath,
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 px-6 py-8">
            <h1 className="text-3xl font-bold text-primary-darker mb-6">
              {projectName}'s Core Vision
            </h1>

            <div className="prose prose-lg">
              <p className="mb-4 text-primary-dark">{overallVision}</p>

              <ul className="list-disc pl-6 mb-6 text-primary-dark">
                {keypoints.map((keypoint, index) => (
                  <li key={index}>{keypoint}</li>
                ))}
              </ul>

              <p className="text-primary-dark">{closingStatement}</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={imagePath}
              alt={`${projectName} Vision`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreVisionSection;
