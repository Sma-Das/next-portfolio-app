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
      "The CompTIA Network+ validates the technical skills needed to securely establish, maintain and troubleshoot the essential networks that businesses rely on.\n" +
      "Unlike other vendor-specific networking certifications, CompTIA Network+ prepares candidates to support networks on any platform.\n" +
      "Covers the specific skills that network professionals need.",
  },
  {
    heading: "Practical Network Penetration Tester",
    location: "TCM Security",
    duration: "December 2021",
    gridImage: "/assets/certifications/tcm_security.png",
    description:
      "The PNPT certification exam is a one-of-a-kind ethical hacking certification exam that assesses a student's ability to perform an external and internal network penetration test at a professional level. \n" +
      "Perform Open-Source Intelligence (OSINT) to gather intel on how to properly attack the network.\n" +
      "Leverage their Active Directory exploitation skillsets to perform A/V and egress bypassing, lateral and vertical network movements, and ultimately compromise the exam Domain Controller.\n" +
      "Perform a live 15-minute report debrief in front of our assessors, comprised of all senior penetration testers.",
  },
  {
    heading: "CS50",
    location: "Harvard University",
    duration: "June 2021",
    gridImage: "/assets/certifications/cs50.png",
    description:
      "A broad and robust understanding of computer science and programming.\n" +
      "How to think algorithmically and solve programming problems efficiently.\n" +
      "Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
  },
  {
    heading: "Introduction to Machine Learning",
    location: "Stanford University",
    duration: "Jan 2021",
    gridImage: "/assets/certifications/stanford.png",
    description:
      "This course provides a broad introduction to machine learning and statistical pattern recognition.\n" +
      "Topics include: supervised learning, unsupervised learning, learning theory (bias/variance tradeoffs, practical advice); reinforcement learning and adaptive control. \n" +
      "The course will also discuss recent applications of machine learning, such as to robotic control, data mining, autonomous navigation, bioinformatics, speech recognition, and text and web data processing.",
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
