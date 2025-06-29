import Navbar from "../components/NavBar";
// import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      {/* <ScrollToTop /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
