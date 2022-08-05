import React, { createContext, useCallback, useEffect, useState } from "react";

type SizeValue = {
  innerWidth: number;
};

export const SizeContext = createContext<SizeValue>({
  innerWidth: 0,
});

type SizeObserverProps = {
  children: React.ReactNode;
};

const SizeObserver: React.FC<SizeObserverProps> = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const handleWidth = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleWidth();
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
