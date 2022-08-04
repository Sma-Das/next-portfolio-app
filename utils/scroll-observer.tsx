import React, { useCallback, useEffect } from "react";

type ScrollValue = {
  scrollY: number;
};

export const ScrollContext = React.createContext<ScrollValue>({ scrollY: 0 });

type ScrollObserverProps = {
  children: React.ReactNode;
};

const ScrollObserver: React.FC<ScrollObserverProps> = ({ children }) => {
  const [scrollY, setScrollY] = React.useState(0);
  const handleScroll = useCallback(() => setScrollY(window.scrollY), []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollObserver;
