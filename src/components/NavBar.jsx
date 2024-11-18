import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

export default function NavBar() {
  return (
    <>
      <nav className={"border border-1 border-light " + classes.nav}>
        <section>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${classes.brand} ${isActive ? classes.active : ""}`
            }
            end
          >
            Home
          </NavLink>
        </section>
        <ul className="d-flex align-items-center m-0 p-0">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${classes.links} ${isActive ? classes.active : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${classes.links} ${isActive ? classes.active : ""}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${classes.links} ${isActive ? classes.active : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `${classes.links} ${isActive ? classes.active : ""}`
              }
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
