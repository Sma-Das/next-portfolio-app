import React, { useCallback, useContext, useEffect, useState } from "react";
import { ObserverProps } from "./parent-observer";
import { SizeContext } from "./size-observer";

export type OffsetValues = { [key: string]: number };

const sections: OffsetValues = {
  "about-me": Infinity,
  experience: Infinity,
  education: Infinity,
  certifications: Infinity,
  skills: Infinity,
};

export const OffsetContext = React.createContext<OffsetValues>(sections);

const OffsetObserver: React.FC<ObserverProps> = ({ children }) => {
  const [offsetValues, setOffsetValues] = useState<OffsetValues>({});
  const { innerWidth } = useContext(SizeContext);
  const handleOffset = useCallback((newOffsetValues: OffsetValues) => {
    setOffsetValues(() => newOffsetValues);
  }, []);

  useEffect(() => {
    let newOffsetValues = sections;
    Object.keys(newOffsetValues).forEach((sectionId) => {
      const sectionRef = document.getElementById(sectionId);
      newOffsetValues[sectionId] =
        sectionRef?.offsetTop ?? newOffsetValues[sectionId];
    });
    handleOffset(newOffsetValues);
  }, [handleOffset, innerWidth]);

  return (
    <OffsetContext.Provider value={offsetValues}>
      {children}
    </OffsetContext.Provider>
  );
};

export default OffsetObserver;
