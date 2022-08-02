const AboutMe: React.FC = () => {
  return (
    <>
      <section id="about-me" className="h-screen flex flex-col">
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            About Me
          </h1>
          <h2 className="font-bold text-lg drop-shadow-xl xl:text-2xl -ml-[1em]">
            Hi, I&#39;m Sma Das{" "}
            <span className="animate-wave absolute origin-[80%_80%]">👋🏻</span>
          </h2>
        </div>
        <div className="flex-grow p-5">content</div>
      </section>
    </>
  );
};

export default AboutMe;
