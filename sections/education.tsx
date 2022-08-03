import Grid from "../components/grid";
import GridItem from "../components/grid-item";

const Education: React.FC = () => {
  const positions = [
    {
      heading: "BSc Computing Security",
      location: "Rochester Institute of Technology Dubai",
      duration: "Jan 2020 - Dec 2023",
      gridImage: "/assets/company_logos/rit-logo.jpg",
      description:
        "Responsible for the technology requirements of the Student Government; including the development and maintenance of the official website and app",
    },
    {
      heading: "Highschool",
      location: "Crawford College Sandton",
      duration: "Jan 2015 - Dec 2019",
      gridImage: "/assets/company_logos/crawford.png",
      description:
        "Responsible for the technology requirements of the Student Government; including the development and maintenance of the official website and app",
    },
  ];
  return (
    <>
      <section
        id="education"
        className="flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 pb-10 after:pt-10"
      >
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            Education
          </h1>
        </div>
        <div className="flex-grow xl:mr-12 p-5">
          <Grid>
            {positions.map((position, idx) => (
              <GridItem key={idx} {...position} />
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Education;
