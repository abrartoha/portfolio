import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import SlideDrawer from "../components/SlideDrawer";

export default function Root() {
  return (
    <>
      <NavBar />
      <SlideDrawer />
      <Outlet />
    </>
  );
}
