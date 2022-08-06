import { ReactNode, useCallback, useRef } from "react";
import useAnimationFrame from "../utils/animation-frame";

type SliderContainerProps = {
  children: ReactNode;
  initialOffsetX: number;
  containerWidth: number;
};

const SliderContainer: React.FC<SliderContainerProps> = ({
  children,
  initialOffsetX,
  containerWidth,
}) => {
  const refScrollX = useRef<number>(initialOffsetX);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const sliderContentRef = useRef<HTMLDivElement>(null);
  useAnimationFrame(
    useCallback(() => {
      const { current: container } = sliderContainerRef;
      const { current: content } = sliderContentRef;
      if (container && content) {
        refScrollX.current += 0.5;
        container.scrollLeft = refScrollX.current;
        if (refScrollX.current > content.clientWidth) {
          refScrollX.current = 0;
          container.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <>
      <div
        className={`slider-container overflow-x-hidden whitespace-nowrap pointer-events-none`}
        ref={sliderContainerRef}
        style={{ maxWidth: containerWidth * 0.8 }}
      >
        <div ref={sliderContentRef} className="inline-block">
          {children}
        </div>
        <div className="inline-block">{children}</div>
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
