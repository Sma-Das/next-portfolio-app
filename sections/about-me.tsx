import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "../components/progress-provider";

const year = new Date().getFullYear() - 2020 + 1;
const getOrdinal = (n: number) => {
  const s = ["th", "st", "nd", "rd"],
    v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

const status =
  year > 4 ? (
    <>graduate</>
  ) : (
    <>
      {year}
      <sup>{getOrdinal(year)}</sup> Year
    </>
  );

const AboutMe: React.FC = () => {
  return (
    <>
      <section
        id="about-me"
        className=" min-h-screen flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 mb-10"
      >
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            About Me
          </h1>
          <h2 className="font-bold text-lg drop-shadow-xl xl:text-2xl -ml-[1em]">
            Hi, I&#39;m Sma Das{" "}
            <span className="animate-wave absolute origin-[80%_80%]">👋🏻</span>
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row flex-grow p-5 gap-3">
          <div className="bg-white flex-grow rounded-xl p-10 leading-loose shadow-md m-5">
            <p>
              I am a {status} student in Computing Security with a minor in
              Economics from Rochester Institute of Technology. My academic
              standing is a cGPA of 3.9/4 and a GPA of 4/4.
            </p>
            <p>I am currently a Research and Development Intern at IBM</p>
            <p>
              I have experience developing secure scaling cloud technology
              infrastructure using AWS and Google Cloud. I also have experience
              in penetration testing and creating virtual attack environments.
            </p>
            <p>My coursework consists of various disciplines which include:</p>
            <ul className="list-item list-disc list-outside ml-10 marker:text-gray-700 mb-5">
              <li>Software Development and Analysis</li>
              <li>System Administration</li>
              <li>Forensic Analysis</li>
              <li>Malware Analysis</li>
              <li>Network Software Penetration Testing</li>
            </ul>
            <p>
              In 2022, I led a team of developers to create a cloud environment
              using AWS. It would capture and store user data later integrated
              into existing Salesforce CRMs.
            </p>
            <p>
              I have participated in multiple CTF (Capture The Flag)
              competitions hosted by HackTheBox, TryHackMe, and picoCTF. CTF
              Competitions focus on simulating real-world hacking scenarios from
              reconnaissance, gaining and maintaining access, and privilege
              escalation. I have ranked as high as 2nd nationally and
              consistently placed in the top 0.1% globally.
            </p>
            <p>
              Utilizing the experience I gained in participating in CTFs and
              coursework, I have developed multiple virtual environments using
              Docker with predetermined vulnerabilities. These docker containers
              were submitted to TryHackMe and HackTheBox.
            </p>
          </div>
          <div className="flex lg:flex-col gap-3 lg:w-1/4 whitespace-pre w-1/2 self-center">
            <ProgressProvider valueStart={0} valueEnd={(3.9 / 4) * 100}>
              {(value) => (
                <CircularProgressbar
                  strokeWidth={3}
                  value={value}
                  text="cGPA: 3.9/4"
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    // Text size
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 1,
                    pathColor: `orange`,
                    textColor: "#000",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                    textSize: "0.9em",
                  })}
                />
              )}
            </ProgressProvider>
            <ProgressProvider valueStart={0} valueEnd={(4 / 4) * 100}>
              {(value) => (
                <CircularProgressbar
                  strokeWidth={3}
                  value={value}
                  text="GPA: 4/4"
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    // Text size
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 1,
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',
                    // Colors
                    pathColor: `orange`,
                    textColor: "#000",
                    trailColor: "#d6d6d6",
                    backgroundColor: "#3e98c7",
                    textSize: "0.9em",
                  })}
                />
              )}
            </ProgressProvider>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
