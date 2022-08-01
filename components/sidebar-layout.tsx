type SidebarLayoutProps = {
  children: React.ReactNode;
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen sticky top-0 hidden w-1/5 xl:w-[10%] md:flex justify-center z-10 shadow-2xl">
      {children}
    </div>
  );
};

export default SidebarLayout;
