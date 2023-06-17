import React, { useCallback, useContext, useEffect, useState } from "react";
import { ObserverProps } from "./parent-observer";
import { SizeContext } from "./size-observer";

export type SectionOffset = Map<string, number>;

const sections = new Map<string, number>([
  ["experience", Infinity],
  ["projects", Infinity],
  ["certifications", Infinity],
  ["education", Infinity],
  ["about-me", Infinity],
  ["skills", Infinity],
]);

export const OffsetContext = React.createContext<SectionOffset>(sections);

const OffsetObserver: React.FC<ObserverProps> = ({ children }) => {
  const [, setOffsetValues] = useState<SectionOffset>();
  const { innerWidth } = useContext(SizeContext);
  const handleOffset = useCallback((newOffsetValues: SectionOffset) => {
    setOffsetValues(() => newOffsetValues);
  }, []);

  useEffect(() => {
    sections.forEach((_offsetValue, sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        sections.set(sectionId, element.offsetTop);
      }
    });
    handleOffset(sections);
  }, [handleOffset, innerWidth]);

  return (
    <OffsetContext.Provider value={sections}>{children}</OffsetContext.Provider>
  );
};

export default OffsetObserver;
