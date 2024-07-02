import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

const Layout = () => {
  return (
    <div className="px-4 md:px-10">
      <Header />
      <SubHeader />
      <Outlet />
    </div>
  );
};

export default Layout;
