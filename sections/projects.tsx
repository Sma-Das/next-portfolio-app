import Grid from "../components/grid";
import GridItem, { GridItemProps } from "../components/grid-item";

const projects: Array<GridItemProps> = [
  {
    heading: "DockerSecOps: Security Automation and Orchestration for Docker",
    location: "Rochester Institute of Technology",
    duration: "May 2023 - Current",
    gridImage: "/assets/projects/docker.jpg",
    description:
      "Leveraging automation and orchestration capabilities, this project aims to streamline security processes and ensure a consistent and reliable security posture across the Docker infrastructure. It offers automated vulnerability scanning, image integrity checks, and compliance assessments, reducing manual effort and minimizing the risk of human error. ",
  },
  {
    heading: "Fingerprint Recognition using Convolutional Neural Networks",
    location: "Rochester Institute of Technology",
    duration: "Jan 2023 - May 2023",
    gridImage: "/assets/projects/fingerprint.jpg",
    description:
      "Developed a CNN model using Keras & Tensorflow to recognize fingerprints. The model was trained on a dataset of 1000 images and achieved an accuracy of 99.5%.",
  },
  {
    heading: "Student Government Technology Coordinator",
    location: "Rochester Institute of Technology Dubai",
    duration: "Jan 2022 - December 2022",
    gridImage: "/assets/company_logos/rit.png",
    description:
      "Responsible for the technology requirements of the Student Government; including the development and maintenance of the official website and app as well as remediating any issues encountered by the Student Body",
  },
  {
    heading: "Database Developer",
    location: "Rochester Institute of Technology Dubai",
    duration: "Jan 2022 - May 2022",
    gridImage: "/assets/company_logos/rit-logo.jpg",
    description:
      "Developed a MySQL database that was responsibe to store information about  all students, employers, and courses offered by the university. Also developed a CLI interface using Python to streamline updating information in the database as well as introduce security measures preventing SQL Injection.",
  },
];
const Projects: React.FC = () => {
  return (
    <>
      <section
        id="projects"
        className="flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 pb-10 after:pt-10"
      >
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            Projects
          </h1>
        </div>
        <div className=" xl:mx-4 p-5 ">
          <Grid>
            {projects.map((position, idx) => (
              <GridItem key={idx} {...position} />
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Projects;
