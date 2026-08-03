import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../components/layout/sideBar";
import Navbar from "../../components/layout/navBar";

function HMLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-100 min-h-screen">
      <Sidebar isOpen={isOpen} />

      <div className="lg:ml-64">
        <Navbar setIsOpen={setIsOpen} />

        <main className="p-6">

        <Outlet/>

        </main>
      </div>
    </div>
  );
}

export default HMLayout;