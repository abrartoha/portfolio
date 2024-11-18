import { useState } from "react";
//import classes from "./SlideDrawer.module.css";

export default function SlideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="drawer-toggle" onClick={toggleDrawer}>
        Menu
      </button>
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <button onClick={toggleDrawer} className="close-btn">
          Close
        </button>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}
