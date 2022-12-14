import Image from "next/image";
import React, { useState } from "react";

type SkillItem = {
  imageSrc: string;
  alt: string;
  width: string;
};

const SkillsList: { [heading: string]: Array<SkillItem> } = {
  "Programming Languages": [
    {
      imageSrc: "python.png",
      alt: "Python",
      width: "100%",
    },
    {
      imageSrc: "c.png",
      alt: "C/C++",
      width: "100%",
    },
    {
      imageSrc: "java.png",
      alt: "Java",
      width: "100%",
    },
    {
      imageSrc: "javascript.png",
      alt: "Javascript",
      width: "100%",
    },
    {
      imageSrc: "typescript.png",
      alt: "Typescript",
      width: "100%",
    },
    {
      imageSrc: "nasm.png",
      alt: "Assembly",
      width: "100%",
    },
  ],
  "Cloud Technologies": [
    {
      imageSrc: "aws.png",
      alt: "AWS",
      width: "100%",
    },
    {
      imageSrc: "s3.png",
      alt: "S3 Buckets",
      width: "100%",
    },
    {
      imageSrc: "dynamodb.png",
      alt: "DynamoDB",
      width: "100%",
    },
    {
      imageSrc: "lambda.png",
      alt: "Lambda",
      width: "100%",
    },
    {
      imageSrc: "gcloud.png",
      alt: "Google Cloud",
      width: "100%",
    },
  ],
  Frameworks: [
    {
      imageSrc: "react.png",
      alt: "ReactJS",
      width: "115%",
    },
    {
      imageSrc: "angular.png",
      alt: "Angular",
      width: "100%",
    },
    {
      imageSrc: "tailwind.png",
      alt: "Tailwind",
      width: "100%",
    },
    {
      imageSrc: "sass.png",
      alt: "SCSS",
      width: "100%",
    },
    {
      imageSrc: "nextjs.png",
      alt: "NextJS",
      width: "100%",
    },
  ],
  "Scripting Languages": [
    {
      imageSrc: "bash.png",
      alt: "Bash",
      width: "100%",
    },
    {
      imageSrc: "powershell.jpg",
      alt: "Powershell",
      width: "100%",
    },
  ],
  "Database Technologies": [
    {
      imageSrc: "mongodb.webp",
      alt: "MongoDB",
      width: "100%",
    },
    {
      imageSrc: "mysql.png",
      alt: "MySQL",
      width: "100%",
    },
  ],
};

const skillImageBase = "/assets/skills";

const Skills: React.FC = () => {
  const [activeHeading, setActiveHeading] = useState<string>(
    "Programming Languages"
  );
  const handleActive = (heading: string) => {
    if (heading !== activeHeading) {
      setActiveHeading(heading);
    }
  };

  return (
    <>
      <section
        id="skills"
        className="min-h-screen flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 pb-10 after:pt-10"
      >
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            Skills
          </h1>
        </div>
        {Object.entries(SkillsList).map(([heading, skillItems], idx) => (
          <React.Fragment key={idx}>
            <h2 key={idx} className="text-center text-xl md:text-3xl my-2">
              <span onClick={() => handleActive(heading)} className="">
                {heading}
                <span className="m-2 md:m-5">
                  <Image
                    src="/assets/icons/dark_arrow.png"
                    height="15px"
                    width="15px"
                    alt="logo"
                    className={`transition duration-1000 ${
                      activeHeading === heading ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </span>
              </span>
            </h2>
            <div
              className={
                "grid grid-cols-3 md:grid-flow-col md:grid-cols-none gap-5 p-5  justify-center mx-auto" +
                `transition-all duration-1000  ${
                  activeHeading !== heading ? "opacity-0" : "opacity-100"
                }`
              }
            >
              {skillItems.map(({ imageSrc, alt, width }, id) => (
                <React.Fragment key={id}>
                  <div
                    className={`transition-all duration-300 w-full group relative pt-3 scale-90 xl:scale-95 hover:scale-105 xl:hover:scale-100 ${
                      activeHeading === heading ? "" : "hidden"
                    }`}
                  >
                    <div className="hidden group-hover:block absolute left-0 right-0 mx-auto z-10 bottom-0 translate-y-7 bg-white shadow-xl p-1 rounded-md text-center border">
                      {alt}
                    </div>
                    <div>
                      <Image
                        src={`${skillImageBase}/${imageSrc}`}
                        width={width}
                        height="100%"
                        alt={alt}
                        title={alt}
                        placeholder="empty"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </React.Fragment>
        ))}
      </section>
    </>
  );
};

export default Skills;
