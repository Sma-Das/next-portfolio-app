import Image from "next/image";

const Experience: React.FC = () => {
  return (
    <>
      <section
        id="experience"
        className="flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 pb-10 after:pt-10"
      >
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            Experience
          </h1>
        </div>
        <div className="flex-grow p-5 ">
          <div className="grid  gap-y-10 grid-flow-row grid-cols-8 [&>div]:shadow-md [&>div]:bg-white items-center">
            <span className="hidden md:block justify-self-center">
              <Image
                src="/assets/company_logos/unitech.png"
                width="100%"
                height="100%"
                alt="logo"
                className="rounded-full"
              />
            </span>
            <div className="grid grid-cols-4 grid-rows-5 col-span-full md:col-span-7 p-3">
              <div className="col-span-2 row-span-1 font-bold">
                <p className="animate-underline after:bg-black pb-1">
                  Position
                </p>
              </div>
              <div className="col-span-2 row-span-1 text-right font-bold">
                Duration
              </div>
              <div className="col-span-4 row-span-1 mt-1 text-slate-600">
                Company
              </div>
              <div className="col-span-4 row-span-2 mt-3 text-slate-500">
                Description
              </div>
            </div>
            <span className="hidden md:block justify-self-center">
              <Image
                src="/assets/sma_das.jpg"
                width="100%"
                height="100%"
                alt="logo"
                className="rounded-full"
              />
            </span>
            <div className="grid grid-cols-4 grid-rows-5 col-span-full md:col-span-7 p-3">
              <div className="col-span-2 row-span-1 font-bold">Position</div>
              <div className="col-span-2 row-span-1 text-right font-bold">
                Duration
              </div>
              <div className="col-span-4 row-span-1 mt-1 text-slate-600">
                Company
              </div>
              <div className="col-span-4 row-span-2 mt-3 text-slate-500">
                Description
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
