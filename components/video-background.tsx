type VideoBackgroundProps = {
  source: string;
};

const VideoBackground: React.FC<VideoBackgroundProps> = ({ source }) => {
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

export default VideoBackground;
