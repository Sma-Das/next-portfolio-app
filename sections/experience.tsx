import Grid from "../components/grid";
import GridItem from "../components/grid-item";

const experience = [
  {
    heading: "Cloud & Software Engineer Lead",
    location: "Unitech",
    duration: "May 2022 - Current",
    gridImage: "/assets/company_logos/unitech.png",
    description:
      "Responsible for deploying a full backend using AWS to implement secure data and file storage using Lambda, S3 buckets, DynamoDB, and AWS Cognito.\nAWS Amplify was used to synchronize these technologies to service clients.",
  },
  {
    heading: "Student Government Technology Coordinator",
    location: "Rochester Institute of Technology Dubai",
    duration: "Jan 2022 - Current",
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
  {
    heading: "Pentetration Tester",
    location: "TryHackMe",
    duration: "Jan 2021 - Dec 2021",
    gridImage: "/assets/company_logos/tryhackme-logo.png",
    description:
      "Performed penetration tests on simulated machines to explore potential vunerablities. Also introduced to other sectors of cybersecurity such as blue-teaming as well as malware analysis, programming security, and industry-standard tools such as Burp Suite and Nmap",
  },
];
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
        <div className=" xl:mx-4 p-5 ">
          <Grid>
            {experience.map((position, idx) => (
              <GridItem key={idx} {...position} />
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Experience;
