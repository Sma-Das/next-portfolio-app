import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import VideoBackground from "../components/video-background";
import { ScrollContext } from "../utils/scroll-observer";

const LandingPage: React.FC = () => {
  const backgroundSource = "/assets/background";
  const [imageLoaded, setImageLoaded] = useState(false);

  const { scrollY } = useContext(ScrollContext);

  let scrollPosition = 0;

  const mainRef = useRef<HTMLDivElement>(null);

  const { current: container } = mainRef;

  if (container !== null) {
    scrollPosition = Math.min(1, scrollY / container.clientHeight);
  }

  return (
    <>
      <div
        ref={mainRef}
        className="min-h-screen flex flex-col justify-center items-center translate-y-0 sticky top-0 -z-10"
        style={{ transform: `translateY(-${scrollPosition * 20}vh)` }}
      >
        <VideoBackground source={backgroundSource} />
        <div
          className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/assets/icons/icon_s_100.png"
            height="75"
            width="75"
            alt="logo"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
          <h1 className="text-6xl">Sma Das</h1>
          <h2 className="text-3xl opacity-75">
            Cybersecurity & Software Development
          </h2>
        </div>
        <div
          className={`flex-grow-0 pb-20 md:pb-10  xl:pb-10 transition-all duration-1000 animate-bounce ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/assets/icons/arrow_down.png"
            height={35}
            width={63}
            alt="arrow down"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
