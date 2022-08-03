import React from "react";

type GridProps = {
  children: React.ReactNode;
};

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <>
      <div className="grid gap-y-10 grid-flow-row grid-cols-8 [&>div]:shadow-md [&>div]:bg-white items-center">
        {children}
      </div>
    </>
  );
};

export default Grid;
