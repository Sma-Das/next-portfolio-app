import Image from "next/image";

const currYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <>
      <footer className="grid grid-cols-10 grid-rows-3 bg-black h-[3%] w-full text-white justify-items-center pt-3 text-xs xl:text-base px-1">
        <div className="col-span-2 hidden md:block"></div>
        <div className="col-span-full md:col-span-6 text-base fill-white">
          <p>
            Made with <span className="animate-pulse">❤️</span> using:
          </p>
        </div>
        <div className="col-span-2 hidden md:block">
          <p>Last Updated: August 2022</p>
        </div>
        <div className="col-span-2 hidden md:block"></div>
        <div className="col-span-full md:col-span-6 text-base fill-white">
          <a
            className="inline-block mx-5"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/icons/nextjs.png"
              width="30px"
              height="30px"
              alt="nextjs"
              className="animate-wiggle"
            />
          </a>
          <a
            className="inline-block mx-5"
            href="https://tailwindcss.com/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src="/assets/icons/tailwind.png"
              width="30px"
              height="30px"
              alt="nextjs"
              className="animate-wave"
            />
          </a>
          <a
            className="inline-block mx-5"
            href="https://reactjs.org/"
            rel="noreferrer"
            target="_blank"
          >
            <Image
              src="/assets/icons/reactjs.png"
              width="30px"
              height="30px"
              alt="nextjs"
              className="animate-[spin_3s_linear_infinite]"
            />
          </a>
        </div>
        <div className="col-span-2 hidden md:block">
          &copy; Sma Das {currYear}
        </div>
        <div className="col-span-10 inline-flex text-base p-1 font-medium">
          <a
            href="https://github.com/Sma-Das/next-portfolio-app"
            className="hover:animate-pulse"
          >
            Source Code
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
