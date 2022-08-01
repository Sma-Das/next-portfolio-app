import Image from "next/image";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="mt-5 relative h-[150px] w-[150px] flex-shrink-0">
        <Image
          layout="fill"
          src="/assets/Sma Das.jpg"
          alt="Sma Das"
          className="rounded-full"
        />
      </div>
      <nav className="basis-3/4 grow text-center w-full flex flex-col ">
        <ol className="flex flex-col flex-1 items-center justify-center">
          <li className="my-3">About Me</li>
          <li className="my-3">Experience</li>
          <li className="my-3">Education</li>
          <li className="my-3">Skills</li>
        </ol>
      </nav>
      <section
        about="socials"
        className="pb-12 w-full flex-shrink-0 grow bg-slate-50 "
      >
        <div className="flex justify-around items-center">
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
