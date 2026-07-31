import { Outlet } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

function HomeLayout() {
  return (
    <div>
      <Navbar />

      <main className="home-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default HomeLayout;