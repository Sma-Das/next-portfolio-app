import { ReactElement, useEffect, useState } from "react";

type ProgressProviderProps = {
  valueStart: number;
  valueEnd: number;
  children: (value: number) => ReactElement;
};

const ProgressProvider: React.FC<ProgressProviderProps> = ({
  valueStart = 0,
  valueEnd,
  children,
}) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

export default ProgressProvider;
