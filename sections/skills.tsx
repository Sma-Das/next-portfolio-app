import Image from "next/image";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import SliderContainer, { SliderItem } from "../components/slider-container";

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionWidth, setSectionWidth] = useState(0);
  const handleWidth = useCallback(() => {
    setSectionWidth(sectionRef.current?.clientWidth || 0);
  }, []);

  useEffect(() => {
    handleWidth();
    window.addEventListener("resize", handleWidth, { passive: true });
    return () => window.removeEventListener("resize", handleWidth);
  }, [handleWidth]);

  return (
    <>
      <section
        id="skills"
        className="min-h-screen flex flex-col after:border-b-2 after:w-4/5 after:mx-[10%] after:border-gray-500 bg-slate-50 pb-10 after:pt-10 items-center"
        ref={sectionRef}
      >
        <div className="text-center py-5">
          <h1 className="font-bold text-3xl drop-shadow-xl xl:text-5xl">
            Skills
          </h1>
        </div>
        <div className="flex-grow p-5 overflow-x-hidden">
          <SliderContainer containerWidth={sectionWidth} initialOffsetX={0}>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
            <SliderItem width={150}>
              <Image
                src="/assets/skills/python.png"
                width={150}
                height={150}
                alt="python"
              />
            </SliderItem>
          </SliderContainer>
        </div>
      </section>
    </>
  );
};

export default Skills;
