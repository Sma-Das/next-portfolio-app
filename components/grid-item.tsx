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
      <span className="hidden md:block justify-self-center scale-90 xl:scale-110">
        <Image
          src={gridImage}
          width="100%"
          height="100%"
          alt="logo"
          className="rounded-full"
        />
      </span>
      <div className="grid grid-cols-4 grid-rows-4 col-span-full md:col-span-7 p-3 text-xs md:text-base">
        <div className="col-span-2 row-span-1 font-bold ">
          <p className="animate-underline after:bg-black">{heading}</p>
        </div>
        <div className="col-span-2 row-span-1 text-right font-bold md:pr-3">
          <p className="animate-underline after:bg-black">{duration}</p>
        </div>
        <div className="col-span-4 row-span-1  text-slate-600 before:content-['@']">
          <p className="animate-underline after:bg-slate-600">{location}</p>
        </div>
        <div className="col-span-4 row-span-2  text-slate-500 whitespace-pre-wrap">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default GridItem;
