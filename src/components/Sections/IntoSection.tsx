const HeroSection = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="/img/BFIntro.jpeg"
              alt="Introduction"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 px-6 py-8">
            <h1 className="text-3xl font-bold text-primary-darker mb-6">
              Community Token Projects
            </h1>
            <div className="prose prose-lg">
              <p className="mb-4 text-primary-dark">
                <strong>BrainFrog's</strong> community-driven initiative
                designed to empower positive change through blockchain
                technology.
                <p className="mb-4 text-primary-dark">
                  <strong>These Tokens:</strong> fuel charitable projects,
                  supports community-building efforts, and fosters collaboration
                  among individuals united by a shared vision of making a
                  difference. By holding and using these tokens, members
                  directly contribute to philanthropic causes, local
                  improvements, and innovative tools that strengthen community
                  bonds. Together, we turn collective action into real-world
                  impact.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
