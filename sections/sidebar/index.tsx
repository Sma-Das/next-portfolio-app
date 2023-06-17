import {
  faGithub,
  faGoogleDrive,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import SidebarNavigation, { Route } from "./navigation";
import ProfilePicture from "./picture";
import SidebarSocials, { Social } from "./socials";

const routes: Array<Route> = [
  {
    displayText: "Experience",
    route: "#experience",
  },
  {
    displayText: "Projects",
    route: "#projects",
  },
  {
    displayText: "Certifications",
    route: "#certifications",
  },
  {
    displayText: "Education",
    route: "#education",
  },
  {
    displayText: "About Me",
    route: "#about-me",
  },
  {
    displayText: "Skills",
    route: "#skills",
  },
];

const socials: Array<Social> = [
  {
    linkTo: "https://www.linkedin.com/in/sma-das/",
    icon: faLinkedinIn,
  },
  {
    linkTo: "https://github.com/Sma-Das",
    icon: faGithub,
  },
  {
    linkTo:
      "https://docs.google.com/document/d/1jUCSyAGTy1O1_sw3cd2fgcKfp4Ov6Nxfya_uRUp-818",
    icon: faGoogleDrive,
  },
];
const SideBar: React.FC = () => {
  return (
    <>
      <div className="min-h-screen h-full w-[14%] xl:w-[9%] hidden md:flex sticky top-0 flex-shrink-0 bg-white shadow-2xl overflow-x-hidden flex-col items-center justify-center">
        <div className="flex-shrink-0 relative p-3 mt-3 w-11/12 aspect-square">
          <ProfilePicture />
        </div>
        <SidebarNavigation routes={routes} />
        <div className="bg-slate-200 w-full flex-shrink-0 rounded-r-full">
          <SidebarSocials socials={socials} />
        </div>
      </div>
    </>
  );
};

export default SideBar;
