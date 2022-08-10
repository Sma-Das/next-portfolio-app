import { useCallback, useContext, useEffect, useState } from "react";
import { OffsetContext, OffsetValues } from "../../utils/offset-observer";
import { ScrollContext } from "../../utils/scroll-observer";

export type Route = {
  displayText: string;
  route: string;
};

type NavigationProps = {
  routes?: Array<Route>;
};

const defaultRoutes: Array<Route> = [
  {
    displayText: "About Me",
    route: "#about-me",
  },
  {
    displayText: "Experience",
    route: "#experience",
  },
  {
    displayText: "Education",
    route: "#education",
  },
  {
    displayText: "Certifications",
    route: "#certifications",
  },
  {
    displayText: "Skills",
    route: "#skills",
  },
];

const SidebarNavigation: React.FC<NavigationProps> = ({
  routes = defaultRoutes,
}) => {
  const offsetValues = useContext(OffsetContext);
  const { scrollY } = useContext(ScrollContext);

  const [activeSection, setActiveSection] = useState<string>("about-me");

  const handleActive = useCallback(() => {
    const activeSection = findActiveSection(offsetValues, scrollY);
    if (activeSection) {
      setActiveSection(activeSection[0]);
    }
  }, [offsetValues, scrollY]);

  const isActive = useCallback(
    (sectionId: string) => {
      return sectionId === `#${activeSection}`;
    },
    [activeSection]
  );

  const findActiveSection = (offsetValues: OffsetValues, scrollY: number) => {
    const halfScreen = window.innerHeight * 0.5;
    return Object.entries(offsetValues).find(([, sectionOffset]) => {
      return (
        scrollY >= sectionOffset - halfScreen &&
        scrollY <= sectionOffset + halfScreen
      );
    });
  };

  useEffect(() => {
    handleActive();
  }, [handleActive]);
  return (
    <>
      <nav className="flex flex-col grow justify-center items-center w-full">
        {routes.map(({ displayText, route }, idx) => (
          <a
            className=" w-full h-full text-center hover:rounded-r-full group relative"
            href={route}
            key={idx}
          >
            <div
              className={`transition-all duration-1000  bg-slate-300 absolute w-[95%] h-full rounded-r-full -translate-x-full group-hover:translate-x-0 ${
                isActive(route) ? "translate-x-0" : ""
              }`}
            ></div>
            <p
              className={`p-0 md:p-1 relative group-hover:opacity-100 group-hover:font-bold after:bg-black active:font-bold my-3 ${
                isActive(route)
                  ? "font-bold transition-colors delay-200"
                  : "font-thin opacity-60"
              }`}
            >
              {displayText}
            </p>
          </a>
        ))}
      </nav>
    </>
  );
};

export default SidebarNavigation;
