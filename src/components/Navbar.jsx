import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SS</p>
      </NavLink>
      <nav className="flex text-xl gap-7 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "teal-purple-gradient_text" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "teal-purple-gradient_text" : "text-black"
          }
        >
          Project
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "teal-purple-gradient_text" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
