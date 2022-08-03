type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="bg-slate-50 grow">{children}</div>;
};

export default Layout;
