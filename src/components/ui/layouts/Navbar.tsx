import { NavLink } from "react-router-dom";
import { Button } from "../button";

const Navbar = () => {
  return (
    <header className="h-16">
      <nav className="w-full h-full px-[20px] max-w-[1200px] mx-auto bg-cyan-300 flex justify-between items-center">
        <span className="text-3xl">IRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">HOme</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
