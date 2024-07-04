import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="px-4 md:px-10">
      <Header />
      <SubHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
