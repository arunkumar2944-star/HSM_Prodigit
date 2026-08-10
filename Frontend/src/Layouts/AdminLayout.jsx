import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/layout/sideBar";
import Navbar from "../components/layout/navBar";

function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false);

  // Apply saved theme when Admin Layout loads
  useEffect(() => {
    const savedTheme = localStorage.getItem("adminTheme") || "light";

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Sidebar isOpen={isOpen} />

      <div className="lg:ml-64 min-h-screen bg-gray-100 dark:bg-gray-950 transition-colors duration-300">
        <Navbar setIsOpen={setIsOpen} />

        <main className="p-6 bg-gray-100 dark:bg-gray-950 min-h-[calc(100vh-80px)] transition-colors duration-300">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;