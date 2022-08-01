type NavigationProps = {
  links: { [key: string]: string };
};

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  return (
    <>
      <nav className=" sticky top-0 h-20 bg-black">
        <ol className="flex flex-row text-white justify-around items-center text-center h-full space">
          {Object.entries(links).map(([text, link], idx) => (
            <li key={idx}>
              <a
                href={link}
                className="hover-underline-animation p-1 after:bg-white"
              >
                {text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Navigation;
