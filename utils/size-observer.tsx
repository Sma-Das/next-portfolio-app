import React, { useCallback, useEffect } from "react";
import { ObserverProps } from "./parent-observer";

type WidthValue = {
  innerWidth: number;
};

export const SizeContext = React.createContext<WidthValue>({ innerWidth: 0 });

const SizeObserver: React.FC<ObserverProps> = ({ children }) => {
  const [innerWidth, setInnerWidth] = React.useState(0);
  const handleWidth = useCallback(() => setInnerWidth(window.innerWidth), []);

  useEffect(() => {
    window.addEventListener("resize", handleWidth, { passive: true });
    return () => window.removeEventListener("resize", handleWidth);
  }, [handleWidth]);

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeObserver;
