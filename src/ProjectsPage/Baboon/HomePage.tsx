import IntroSection from "./Sections/IntoSection";
import CoreVision from "./Sections/CoreVisionSection";
import PDFViewerComponent from "./Sections/PDFViewerSection";
import RoadmapSection from "./MissionSection/MissionSection";
import ContactSection from "./Sections/ContactSection";
import TeamMemberSection from "./TeamMembers/TeamMembers";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-primary-lighter/20 py-12 px-4 sm:px-6 lg:px-8">
      {/*  */}
      <div className="container mx-auto space-y-8">
        <IntroSection
          projectName="Baboon Sanctuary"
          openingStatement="The Baboon Sanctuary is a project dedicated to the conservation and protection of baboons in their natural habitat. Our mission is to ensure the well-being of these incredible primates while promoting awareness and education about their importance in the ecosystem."
          closingStatement="Join us in our efforts to protect baboons and their environment. Together, we can make a difference!"
          imagePath="/img/ProjectThumbnails/baboon/baboonThumbnail.jpeg"
        />
        <CoreVision
          projectName="Baboon Sanctuary"
          overallVision=" We aim to foster a harmonious relationship between baboons and local communities through education, research, and conservation initiatives."
          keypoints={[
            "Conservation Efforts: Implementing effective strategies to protect baboon habitats and mitigate human-wildlife conflict.",
            "Community Engagement: Collaborating with local communities to promote coexistence and sustainable development.",
          ]}
          closingStatement=""
          imagePath="/img/ProjectThumbnails/baboon/baboonsCoreVision.jpeg"
        />
        <RoadmapSection
          projectName="Baboon Sanctuary"
          milestones={[
            {
              title: "Establishment of Protected Areas",
              description:
                "Designating and managing protected areas to safeguard critical baboon habitats.",
            },
            {
              title: "Educational Programs",
              description:
                "Conducting educational programs to raise awareness about baboon conservation and promote responsible tourism.",
            },
            {
              title: "Research Initiatives",
              description:
                "Conducting research on baboon behavior, ecology, and genetics to inform conservation strategies.",
            },
            {
              title: "Community Involvement",
              description:
                "Engaging local communities in conservation efforts and providing alternative livelihoods.",
            },
          ]}
        />
        <PDFViewerComponent
          projectName="Baboon Sanctuary"
          pdfPath="/pdf/baboon.pdf"
        />
        <TeamMemberSection
          projectName="Baboon Sanctuary"
          team={[
            { name: "Maxienne Neuwenhuys", description: "", img: "" },
            { name: "Heidi Lynn", description: "", img: "" },
          ]}
        />
        <ContactSection
          email=""
          X=""
          Instagram=""
          Tiktok=""
          Discord=""
          Telegram=""
          Linkedin=""
          Youtube=""
          Twitch=""
          Github=""
          Medium=""
        />
      </div>
    </div>
  );
};

export default HomePage;
