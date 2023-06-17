import Image from "next/image";

type GridItemProps = {
  gridImage: string;
  heading: string;
  location: string;
  duration: string;
  description: string;
};

const GridItem: React.FC<GridItemProps> = ({
  gridImage,
  heading,
  location,
  duration,
  description,
}) => {
  return (
    <>
      <span className="hidden md:block justify-self-center scale-90 xl:scale-110 hover:scale-110 xl:hover:scale-125">
        <Image
          src={gridImage}
          width="100%"
          height="100%"
          alt="logo"
          objectFit="scale-down"
        />
      </span>
      <div className="grid grid-cols-4 grid-rows-4 col-span-full md:col-span-7 p-3 text-xs md:text-base">
        <div className="col-span-2 row-span-1 font-bold ">
          <p className="animate-underline after:origin-bottom-right hover:after:origin-bottom-left after:bg-black">
            {heading}
          </p>
        </div>
        <div className="col-span-2 row-span-1 text-right font-bold md:pr-3 ">
          <p className="animate-underline after:bg-black after:origin-bottom-right hover:after:origin-bottom-left">
            {duration}
          </p>
        </div>
        <div className="col-span-4 row-span-1  text-slate-600 before:content-['@']">
          <p className="animate-underline after:bg-slate-400 after:origin-bottom-right hover:after:origin-bottom-left">
            {location}
          </p>
        </div>
        <div className="col-span-4 row-span-2  text-slate-500 whitespace-pre-wrap">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default GridItem;
