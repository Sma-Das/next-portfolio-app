type SidebarNavigationProps = {
  routes: Array<Array<string>>;
};

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ routes }) => {
  return (
    <>
      <nav className="basis-3/4 grow text-center w-full flex flex-col flex-1 items-center justify-center">
        {routes.map(([route, displayText], idx) => (
          <a
            key={idx}
            href={route}
            className="p-1 animate-underline hover:font-bold after:bg-black active:font-bold my-3"
          >
            {displayText}
          </a>
        ))}
      </nav>
    </>
  );
};

export default SidebarNavigation;
