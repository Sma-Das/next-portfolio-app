import {
  faGithub,
  faGoogleDrive,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import SidebarNavigation from "./sidebar-navigation";

const Sidebar: React.FC = () => {
  const routes = [
    ["#about-me", "About Me"],
    ["#experience", "Experience"],
    ["#education", "Education"],
    ["#skills", "Skills"],
  ];

  return (
    <>
      <div className="mt-5 relative box-border pt-[84%] w-5/6 flex-shrink-0 px-2">
        {/* <div className="mt-5 relative aspect-square w-5/6 flex-shrink-0 px-2 hover:w-11/12"> */}
        <a href="#about-me">
          <Image
            layout="fill"
            src="/assets/sma_das.jpg"
            alt="Sma Das"
            className="rounded-full"
          />
        </a>
      </div>
      <SidebarNavigation routes={routes} />
      <section
        about="socials"
        className="py-10 w-full flex-shrink-0 grow bg-slate-50 "
      >
        <div className="flex justify-evenly items-center">
          <a
            href="https://github.com/Sma-Das"
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#000"
              className="hover:text-gray-700 w-full h-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sma-das/"
            target="_blank"
            className="w-7 h-7"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="#000"
              className="hover:text-gray-700 w-full h-full"
            />
          </a>
          <a href="/assets/files/Sma_Das_CV_2022.docx" className="w-7 h-7">
            <FontAwesomeIcon
              icon={faGoogleDrive}
              color="#000"
              className="hover:text-gray-700 w-full h-full"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
