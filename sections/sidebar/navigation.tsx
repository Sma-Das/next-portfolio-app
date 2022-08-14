import { useContext } from "react";
import { OffsetContext } from "../../utils/offset-observer";
import { ScrollContext } from "../../utils/scroll-observer";

export type Route = {
  displayText: string;
  route: string;
};

type NavigationProps = {
  routes: Array<Route>;
};

const SidebarNavigation: React.FC<NavigationProps> = ({ routes }) => {
  const sectionOffsetValues = useContext(OffsetContext);
  const { scrollY } = useContext(ScrollContext);

  const isActive = (route: string) => {
    const halfScreen = window.innerHeight / 2;
    const sectionOffset = sectionOffsetValues.get(route.substring(1));
    return (
      sectionOffset && // Check the offset exists
      scrollY >= sectionOffset - halfScreen && // Check the scroll is in the middle of the screen
      scrollY <= sectionOffset + halfScreen
    );
  };

  return (
    <>
      <nav className="flex flex-col grow justify-center items-center w-full">
        {routes.map(({ displayText, route }, idx) => (
          <a
            className="w-full h-full text-center hover:rounded-r-full group relative"
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
