import {
  BsTelegram,
  BsDiscord,
  BsTwitterX,
  BsLinkedin,
  BsMailboxFlag,
  BsInstagram,
  BsTiktok,
  BsYoutube,
  BsTwitch,
  BsGithub,
  BsMedium,
} from "react-icons/bs";

interface ContactSectionProps {
  email: string;
  X: string;
  Linkedin: string;
  Tiktok: string;
  Discord: string;
  Telegram: string;
  Instagram: string;
  Youtube: string;
  Twitch: string;
  Github: string;
  Medium: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  X,
  Linkedin,
  Tiktok,
  Discord,
  Telegram,
  Instagram,
  Youtube,
  Twitch,
  Github,
  Medium,
}) => {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-primary-darker mb-6">
            Get in Touch
          </h2>
          <p className="text-primary-dark mb-6">
            Have questions about our project? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>

          <div className="space-y-4 mb-6">
            {email && (
              <a
                href={`mailto:${email}`}
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsMailboxFlag size={20} />
                <span>{email}</span>
              </a>
            )}
          </div>

          <h2 className="text-2xl font-semibold text-primary-darker mb-4">
            Follow Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Discord && (
              <a
                href={Discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsDiscord size={20} />
                <span>Discord</span>
              </a>
            )}
            {X && (
              <a
                href={X}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsTwitterX size={20} />
                <span>X</span>
              </a>
            )}
            {Linkedin && (
              <a
                href={Linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            )}
            {Telegram && (
              <a
                href={Telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsTelegram size={20} />
                <span>Telegram</span>
              </a>
            )}
            {Instagram && (
              <a
                href={Instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsInstagram size={20} />
                <span>Instagram</span>
              </a>
            )}
            {Tiktok && (
              <a
                href={Tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsTiktok size={20} />
                <span>Tiktok</span>
              </a>
            )}
            {Youtube && (
              <a
                href={Youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsYoutube size={20} />
                <span>Youtube</span>
              </a>
            )}
            {Twitch && (
              <a
                href={Twitch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsTwitch size={20} />
                <span>Twitch</span>
              </a>
            )}
            {Github && (
              <a
                href={Github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsGithub size={20} />
                <span>Github</span>
              </a>
            )}
            {Medium && (
              <a
                href={Medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-primary-darker hover:text-primary transition-colors"
              >
                <BsMedium size={20} />
                <span>Medium</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
