import {
  MdDashboard,
  MdHotel,
  MdBedroomParent,
  MdPeople,
  MdBookOnline,
  MdPayments,
  MdBarChart,
  MdSettings,
  MdLogout,
} from "react-icons/md";

import { NavLink, useNavigate } from "react-router-dom";

// Get logged user role

let user = JSON.parse(localStorage.getItem("user"));

let userRole = user?.role || user?.Role || "";

userRole = userRole.toLowerCase();

let menuItems = [];

// =========================
// ADMIN MENU
// =========================

if (userRole === "admin") {
  menuItems = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      path: "/admin/dashboard",
    },

    {
      title: "Hotels",
      icon: <MdHotel />,
      path: "/admin/hotels",
    },

    {
      title: "Rooms",
      icon: <MdBedroomParent />,
      path: "/admin/rooms",
    },

    {
      title: "Bookings",
      icon: <MdBookOnline />,
      path: "/admin/bookings",
    },

    {
      title: "Customers",
      icon: <MdPeople />,
      path: "/admin/users",
    },

    {
      title: "Payments",
      icon: <MdPayments />,
      path: "/admin/payments",
    },

    {
      title: "Reports",
      icon: <MdBarChart />,
      path: "/admin/reports",
    },

    {
      title: "Settings",
      icon: <MdSettings />,
      path: "/admin/settings",
    },
  ];
}

// =========================
// HOTEL MANAGER MENU
// =========================
else if (userRole === "hotelmanager" || userRole === "manager") {
  menuItems = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      path: "/manager/dashboard",
    },

    {
      title: "Rooms",
      icon: <MdBedroomParent />,
      path: "/manager/rooms",
    },

    {
      title: "Bookings",
      icon: <MdBookOnline />,
      path: "/manager/bookings",
    },

    {
      title: "Receptionists",
      icon: <MdPeople />,
      path: "/manager/receptionists",
    },
  ];
}

// =========================
// RECEPTIONIST MENU
// =========================
else if (userRole === "receptionist") {
  menuItems = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      path: "/reception/dashboard",
    },

    {
      title: "Bookings",
      icon: <MdBookOnline />,
      path: "/reception/bookings",
    },

    {
      title: "Customers",
      icon: <MdPeople />,
      path: "/reception/customers",
    },

    {
      title: "Payments",
      icon: <MdPayments />,
      path: "/reception/payments",
    },
  ];
}

function Sidebar({ isOpen }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-64 bg-slate-900 text-white transition-transform duration-300
${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="flex items-center justify-center h-20 border-b border-slate-700">
        <img
          src="/HMS_PRODIGIT.png"
          alt="HotelMS Logo"
          className="w-16 h-16 object-contain"
        />

        <h1 className="ml-3 text-2xl font-bold text-blue-400">HotelMS</h1>
      </div>

      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `
flex w-full items-center gap-4 px-6 py-3 text-left transition
hover:bg-blue-600 hover:text-white

${isActive ? "bg-blue-600" : ""}

`
            }
          >
            <span className="text-2xl">{item.icon}</span>

            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full border-t border-slate-700">
        <button
          onClick={logout}
          className="
flex w-full items-center gap-4 px-6 py-4
hover:bg-red-500
"
        >
          <MdLogout size={24} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
