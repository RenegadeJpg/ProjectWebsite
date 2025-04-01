import IntroSection from "./Sections/IntroSection";
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
            {
              name: "Maxienne Neuwenhuys",
              description:
                " a lifelong healer, environmentalist, and spiritual guide. With roots in a lineage of shamans, her intuitive gifts shaped a distinguished medical career as an Advanced Helicopter Paramedic and Chief Medical Officer for Motorsport South Africa. Her experience spans A&E, ICU, sea rescue, and emergency care. Today, Shaman Max blends this expertise with esoteric healing—offering hypnotherapy, astrology, Kabbalah, and sound alchemy to help others heal at a soul level. A devoted mental health advocate and global community builder in Web3 spaces, she champions planetary care and the protection of all living beings.",
              img: "/img/team/Maxie.jpeg",
            },
            {
              name: "Heidi Lynn",
              description:
                "A passionate seeker, blending entrepreneurship, creativity, and holistic healing. As CEO of a thriving real estate company, they lead with clarity and vision—yet it’s behind the camera where Heidi’s artistry comes alive, capturing the world’s quiet beauty through photography. Deeply connected to animals and nature, Heidi’s humanitarian spirit guides their mission to bring insight and intention into every facet of life. With a background in Kinesiology, a deep study of astrology, and expertise in Auricular Acupuncture, Heidi bridges body and spirit in a practice rooted in conscious awareness. Their journey is one of purpose, growth, and inspired living.",
              img: "/img/team/Heidi.jpeg",
            },
          ]}
        />
        <ContactSection
          email=""
          X="https://twitter.com/baboonsanctuary"
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
