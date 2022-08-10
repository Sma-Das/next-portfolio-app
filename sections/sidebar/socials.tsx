import {
  faGithub,
  faGoogleDrive,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Social = {
  linkTo: string;
  icon: IconDefinition;
};

type SidebarSocials = {
  socials?: Array<Social>;
};

const defaultSocials: Array<Social> = [
  {
    linkTo: "https",
    icon: faLinkedinIn,
  },
  {
    linkTo: "https",
    icon: faGithub,
  },
  {
    linkTo: "https",
    icon: faGoogleDrive,
  },
];
const SidebarSocials: React.FC<SidebarSocials> = ({
  socials = defaultSocials,
}) => {
  return (
    <>
      <div
        id="socials"
        className="flex py-2 md:py-5 items-center justify-evenly"
      >
        {socials.map(({ icon, linkTo }, idx) => (
          <a
            href={linkTo}
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7"
            key={idx}
          >
            <FontAwesomeIcon
              icon={icon}
              color="#000"
              className="hover:text-gray-700 w-full h-full"
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default SidebarSocials;
