import Image from "next/image";
import SidebarNavigation from "./navigation";
import SidebarSocials from "./socials";

const ProfilePicture: React.FC = () => {
  return (
    <>
      <Image
        src="/assets/sma_das.jpg"
        layout="fill"
        alt="Sma Das"
        className="rounded-r-full hover:rounded-l-full hover:rounded-none transition-all duration-1000 "
      />
    </>
  );
};

const SideBar: React.FC = () => {
  return (
    <>
      <div className="min-h-screen h-full w-[14%] xl:w-[9%] hidden md:flex sticky top-0 flex-shrink-0 bg-white shadow-2xl overflow-x-hidden flex-col items-center justify-center">
        <div className="flex-shrink-0 relative p-3 mt-3 w-11/12 aspect-square">
          <ProfilePicture />
        </div>
        <SidebarNavigation />
        <div className="bg-slate-200 w-full flex-shrink-0 rounded-r-full">
          <SidebarSocials />
        </div>
      </div>
    </>
  );
};

export default SideBar;
