import React from "react";

type SidebarLayoutProps = {
  children: React.ReactNode;
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen sticky top-0 hidden w-[13%]  md:flex items-center justify-evenly z-10 shadow-2xl flex-col bg-slate-50">
      {children}
    </div>
  );
};

export default SidebarLayout;
