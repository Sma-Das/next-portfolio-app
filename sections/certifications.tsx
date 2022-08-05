import Grid from "../components/grid";
import GridItem from "../components/grid-item";

const certifcations = [
  {
    heading: "CompTIA Security+",
    location: "CompTIA",
    duration: "In Progress",
    gridImage: "/assets/certifications/security.png",
    description:
      "Validate baseline security skills and for fulfilling the DoD 8570 compliance.\n" +
      "The only baseline cybersecurity certification emphasizing hands-on practical skills, ensuring the security professional is better prepared to problem solve a wider variety of today's complex issues.\n" +
      "Aligned to the latest trends and techniques.",
  },
  {
    heading: "CompTIA Network+",
    location: "CompTIA",
    duration: "In Progress",
    gridImage: "/assets/certifications/network_plus.png",
    description:
      "Validate baseline security skills and for fulfilling the DoD 8570 compliance.\n" +
      "The only baseline cybersecurity certification emphasizing hands-on practical skills, ensuring the security professional is better prepared to problem solve a wider variety of today's complex issues.\n" +
      "Aligned to the latest trends and techniques.",
  },
  {
    heading: "Practical Network Penetration Tester",
    location: "TCM Security",
    duration: "December 2021",
    gridImage: "/assets/certifications/tcm_security.png",
    description:
      "Validate baseline security skills and for fulfilling the DoD 8570 compliance.\n" +
      "The only baseline cybersecurity certification emphasizing hands-on practical skills, ensuring the security professional is better prepared to problem solve a wider variety of today's complex issues.\n" +
      "Aligned to the latest trends and techniques.",
  },
  {
    heading: "CS50",
    location: "Harvard University",
    duration: "June 2021",
    gridImage: "/assets/certifications/cs50.png",
    description:
      "Validate baseline security skills and for fulfilling the DoD 8570 compliance.\n" +
      "The only baseline cybersecurity certification emphasizing hands-on practical skills, ensuring the security professional is better prepared to problem solve a wider variety of today's complex issues.\n" +
      "Aligned to the latest trends and techniques.",
  },
  {
    heading: "Introduction to Machine Learning",
    location: "Stanford University",
    duration: "Jan 2021",
    gridImage: "/assets/certifications/stanford.png",
    description:
      "Validate baseline security skills and for fulfilling the DoD 8570 compliance.\n" +
      "The only baseline cybersecurity certification emphasizing hands-on practical skills, ensuring the security professional is better prepared to problem solve a wider variety of today's complex issues.\n" +
      "Aligned to the latest trends and techniques.",
  },
];

const Certifications: React.FC = () => {
  return (
    <>
      <section
        id="certifications"
        className="flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 pb-10 after:pt-10"
      >
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            Certifications
          </h1>
        </div>
        <div className="xl:mx-4 p-5">
          <Grid>
            {certifcations.map((certification, idx) => (
              <GridItem key={idx} {...certification} />
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Certifications;
