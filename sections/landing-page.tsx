import Image from "next/image";
import React from "react";

type LandingPageProps = {
  source: string;
};

const VideoBackground: React.FC<LandingPageProps> = ({ source }) => {
  return (
    <>
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src={`${source}.mp4`} type="video/mp4; codecs=hvc1" />
        <source src={`${source}.webm`} type="video/webm; codecs=vp9" />
      </video>
    </>
  );
};

const LandingPage: React.FC = () => {
  const backgroundSource: string = "/assets/background";

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <VideoBackground source={backgroundSource} />
        <div className="flex-grow-0 pt-10 transition-opacity duration-1000">
          <Image
            src="/assets/icons/icon_s_100.png"
            height="75"
            width="75"
            alt="logo"
          />
        </div>
        <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
          <h1 className="text-6xl">Sma Das</h1>
          <h2 className="text-3xl opacity-75">
            Cybersecurity & Software Development
          </h2>
        </div>
        <div className="flex-grow-0 pb-2 xl:pb-10 transition-all duration-1000 animate-bounce">
          <Image
            src="/assets/icons/arrow_down.png"
            height={105 / 3}
            width={188 / 3}
            alt="arrow down"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
