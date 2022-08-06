import Image from "next/image";

type SkillItem = {
  imageSrc: string;
  alt: string;
  width: string;
};

const SkillItems: Array<SkillItem> = [
  {
    imageSrc: "python.png",
    alt: "Python",
    width: "100%",
  },
  {
    imageSrc: "typescript.png",
    alt: "Typescript",
    width: "100%",
  },
  {
    imageSrc: "javascript.png",
    alt: "Javascript",
    width: "100%",
  },
  {
    imageSrc: "bash.png",
    alt: "Bash",
    width: "100%",
  },
  {
    imageSrc: "html.png",
    alt: "HTML",
    width: "100%",
  },
  {
    imageSrc: "windows.png",
    alt: "Windows",
    width: "100%",
  },
  {
    imageSrc: "powershell.jpg",
    alt: "Powershell",
    width: "100%",
  },
  {
    imageSrc: "css.png",
    alt: "CSS",
    width: "100%",
  },
  {
    imageSrc: "tailwind.png",
    alt: "Tailwind",
    width: "100%",
  },
  {
    imageSrc: "react.png",
    alt: "ReactJS",
    width: "115%",
  },
  {
    imageSrc: "sass.png",
    alt: "ReactJS",
    width: "100%",
  },
  {
    imageSrc: "angular.png",
    alt: "Angular",
    width: "100%",
  },
  {
    imageSrc: "linux.png",
    alt: "Linux",
    width: "84%",
  },
  {
    imageSrc: "lambda.png",
    alt: "AWS Lambda",
    width: "100%",
  },
  {
    imageSrc: "nextjs.png",
    alt: "NextJS",
    width: "100%",
  },
  {
    imageSrc: "firebase.jpg",
    alt: "Firebase",
    width: "100%",
  },
  {
    imageSrc: "s3.png",
    alt: "AWS S3",
    width: "100%",
  },
  {
    imageSrc: "gcloud.png",
    alt: "Google Cloud",
    width: "100%",
  },
];

const skillImageBase = "/assets/skills";

const Skills: React.FC = () => {
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
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5 p-5 items-center justify-center text-center">
          {SkillItems.map(({ imageSrc, alt, width }, idx) => (
            <>
              <div className="w-full group relative pt-3" key={idx}>
                <div className="hidden group-hover:block absolute left-0 right-0 mx-auto z-10 bottom-0 translate-y-7 bg-gradient-to-r from-slate-100 to-slate-300 shadow-sm h-6 rounded-md text-center pt-1 ">
                  {alt}
                </div>
                <Image
                  src={`${skillImageBase}/${imageSrc}`}
                  width={width}
                  height="100%"
                  alt={alt}
                  title={alt}
                />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
