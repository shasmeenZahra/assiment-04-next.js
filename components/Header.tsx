
const Header = () => {
    return (
      <header className="bg-pink-500 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My Landing Page</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="text-white hover:underline">Home</a>
            </li>
            <li>
              <a href="#portfolio" className="text-white hover:underline">Portfolio</a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  