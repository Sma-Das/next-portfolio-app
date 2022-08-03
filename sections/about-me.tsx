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
        <div className="flex flex-col flex-grow p-5 justify-evenly">
          <div className="flex-shrink-0 leading-loose">
            I am currently a 3<sup>rd</sup> year student at Rochester Institute
            of Technology pursing an undergraduate degree in Computing Security
            with a minor in Economics.
            <br />
            <br className="md:hidden" />I have participated in multiple CTF
            competitions as well as developing vunerable boxes using Docker
            Containers.
            <br />
            <br className="md:hidden" />I also have a passion for Software
            Development. I have extensive experience in <code>Python</code>,{" "}
            <code>JavaScript</code> /<code>TypeScript</code>, <code>C</code>/
            <code>C++</code>, <code>Java</code>, and I am currently learning{" "}
            <code>Go</code> and <code>Rust</code>.
          </div>
          <div className="leading-loose">
            My course work includes:
            <br />
            <br className="hidden md:block" />
            <ul className="list-item list-disc list-outside ml-10 marker:text-gray-400">
              <li>Reverse Engineering and Malware Analysis</li>
              <li>Computer System Forensics</li>
              <li>Software Devlopment in Python and Java</li>
              <li>Database and Data Modeling</li>
              <li>System Administration 1 & 2</li>
            </ul>
          </div>
          <div className="leading-loose py-5 md:py-3">
            My current academic standing rests at a cGPA of 3.84/4 with my
            previous two semesters yielding a GPA of 3.91/4 and 4/4
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
