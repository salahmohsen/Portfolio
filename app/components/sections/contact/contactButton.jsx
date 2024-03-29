import {
  RiFacebookLine,
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";

import { CiMail } from "react-icons/ci";

const ContactButton = ({ contact, username = undefined }) => {
  const socailmediaList = {
    facebook: {
      icon: <RiFacebookLine />,
      url: `https://www.facebook.com/${username}`,
    },
    instagram: {
      icon: <RiInstagramLine />,
      url: `https://www.instagram.com/${username}`,
    },
    linkedin: {
      icon: <RiLinkedinLine />,
      url: `https://www.linkedin.com/in/${username}`,
    },
    twitter: {
      icon: <RiTwitterLine />,
      url: `https://www.twitter.com/${username}`,
    },
    github: {
      icon: <RiGithubLine />,
      url: `https://www.github.com/${username}`,
    },
    mail: {
      icon: <CiMail />,
      url: `mailto:${username}`,
    },
  };
  const { icon, url } = socailmediaList[contact];

  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex aspect-square h-9 w-9 items-center justify-center rounded-md bg-transparent text-night/70 outline outline-1 outline-night/5 transition-all duration-200 ease-in-out hover:bg-night/5 dark:text-light/70 dark:outline-light/5 dark:hover:bg-light/5"
        aria-label={contact}
      >
        {icon}
      </a>
    </li>
  );
};

export default ContactButton;
