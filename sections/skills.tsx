import { useCallback, useContext, useEffect, useRef, useState } from "react";
const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const handleWidth = useCallback(() => {
    setInnerWidth(sectionRef.current?.clientWidth || 0);
  }, []);

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth, { passive: true });
    return () => window.removeEventListener("resize", handleWidth);
  }, [handleWidth]);

  useEffect(() => {
    console.log(`Section: ${innerWidth}`);
  }, [innerWidth]);

  return (
    <>
      <section
        id="skills"
        className="min-h-screen flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 pb-10 after:pt-10"
        ref={sectionRef}
      >
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            Skills
          </h1>
        </div>
        <div className="flex-grow p-5">content</div>
      </section>
    </>
  );
};

export default Skills;
