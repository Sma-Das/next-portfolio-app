import Grid from "../components/grid";
import GridItem from "../components/grid-item";

const education = [
  {
    heading: "Bachelor of Science in Computing Security",
    location: "Rochester Institute of Technology Dubai",
    duration: "Jan 2020 - Dec 2023",
    gridImage: "/assets/company_logos/rit-logo.jpg",
    description:
      "cGPA: 3.85/4\n" +
      "Student Government Technology Coordinator\n" +
      "Dean's List: Jan 2020 - Current",
  },
  {
    heading: "Highschool",
    location: "Crawford College Sandton",
    duration: "Jan 2015 - Dec 2019",
    gridImage: "/assets/company_logos/crawford.png",
    description:
      "Graduated with Full Honours\n" +
      "Public Debating Team Co-Founder\n" +
      "Chess Captain 2017-2019",
  },
];

const Education: React.FC = () => {
  return (
    <>
      <section
        id="education"
        className="flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 pb-10 after:pt-10"
      >
        <div className="text-center">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            Education
          </h1>
        </div>
        <div className="xl:mx-4 p-5 ">
          <Grid>
            {education.map((position, idx) => (
              <GridItem key={idx} {...position} />
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Education;
