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
      <div className="mt-5 relative aspect-square w-5/6 flex-shrink-0 px-2">
        <a href="#">
          <Image
            layout="fill"
            src="/assets/Sma Das.jpg"
            alt="Sma Das"
            className="rounded-full"
          />
        </a>
      </div>
      <SidebarNavigation routes={routes} />
      <section
        about="socials"
        className="pb-12 w-full flex-shrink-0 grow bg-slate-50 "
      >
        <div className="flex justify-evenly items-center">
          <div>
            <a href="#">hello</a>
          </div>
          <div>
            <a href="#">hello</a>
          </div>
          <div>
            <a href="#">hello</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
