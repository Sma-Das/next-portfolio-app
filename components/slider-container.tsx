import { ReactNode, useRef } from "react";

type SliderContainerProps = {
  children: ReactNode;
  initialOffsetX: number;
  contentWidth: number;
  className: string;
  containerWidth: number;
};

const SliderContainer: React.FC<SliderContainerProps> = ({
  children,
  initialOffsetX,
  contentWidth,
  className,
  containerWidth,
}) => {
  const refScrollX = useRef<number>(initialOffsetX);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const sliderContentRef = useRef<HTMLDivElement>(null);

  const enabled = containerWidth < contentWidth;
  return (
    <>
      <div
        className={`slider-container overflow-x-hidden whitespace-nowrap pointer-events-none ${className}`}
        ref={sliderContainerRef}
        style={{ maxWidth: containerWidth }}
      >
        <div ref={sliderContentRef} className="inline-block">
          {children}
        </div>
      </div>
    </>
  );
};

type SliderItemProps = {
  children: ReactNode;
  width: number;
};

export const SliderItem: React.FC<SliderItemProps> = ({ children, width }) => (
  <div
    className="inline-flex justify-center items-center mx-4"
    style={{ width }}
  >
    {children}
  </div>
);

export default SliderContainer;
