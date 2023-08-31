import { Outlet } from "react-router-dom";
import { NavBar } from "./components";

const Layout = () => {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-[15%]">
        <NavBar />
      </div>
      <div className="flex-1 border-red-600">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
