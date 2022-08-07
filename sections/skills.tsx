import Image from "next/image";

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
      imageSrc: "C.png",
      alt: "C/C++",
      width: "100%",
    },
    {
      imageSrc: "Java.png",
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
      alt: "AWS Cloud",
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
  // "Markup Languages": [
  //   {
  //     imageSrc: "html.png",
  //     alt: "HTML",
  //     width: "100%",
  //   },
  //   {
  //     imageSrc: "css.png",
  //     alt: "CSS",
  //     width: "100%",
  //   },
  //   {
  //     imageSrc: "markdown.png",
  //     alt: "Markdown",
  //     width: "100%",
  //   },
  //   {
  //     imageSrc: "latex.png",
  //     alt: "LaTeX",
  //     width: "100%",
  //   },
  // ],
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
        {Object.entries(SkillsList).map(([heading, skillItems], idx) => {
          return (
            <>
              <h2 key={idx} className="text-center text-3xl my-2">
                <span className="drop-shadow-xl">{heading}</span>
              </h2>
              <div className="grid grid-cols-3 md:grid-flow-col md:grid-cols-none gap-5 p-5  text-center justify-center mx-auto">
                {skillItems.map(({ imageSrc, alt, width }, idx) => (
                  <>
                    <div
                      className="w-full group relative pt-3 scale-90 xl:scale-95 hover:scale-105 xl:hover:scale-100"
                      key={idx}
                    >
                      <div className="hidden group-hover:block absolute left-0 right-0 mx-auto z-10 bottom-0 translate-y-7 bg-white shadow-xl pb-1 rounded-md text-center pt-1 border">
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
            </>
          );
        })}
      </section>
    </>
  );
};

export default Skills;
