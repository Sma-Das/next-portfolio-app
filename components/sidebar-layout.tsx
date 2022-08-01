type SidebarLayoutProps = {
  children: React.ReactNode;
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen sticky top-0 hidden w-1/5 xl:w-[10%] md:flex items-center justify-evenly z-10 shadow-2xl flex-col ">
      {children}
    </div>
  );
};

export default SidebarLayout;
