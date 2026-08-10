import {
  MdHotel,
  MdBedroomParent,
  MdPeople,
  MdBookOnline,
  MdPayments,
  MdSettings,
  MdLightMode,
  MdDarkMode,
  MdDashboard,
  MdLogout,
} from "react-icons/md";

import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../../public/HMS_PRODIGIT64.png";
import { logout } from "../../redux/slices/authSlice";

// ==========================================
// GET LOGGED USER ROLE
// ==========================================

let user = null;

try {
  user = JSON.parse(localStorage.getItem("user"));
} catch (error) {
  console.log("User data error:", error);
}

let userRole = user?.role || user?.Role || "";

userRole = String(userRole).toLowerCase();

let menuItems = [];

// ==========================================
// ADMIN MENU
// ==========================================

if (userRole === "admin") {
  menuItems = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      path: "/admin",
    },
    {
      title: "Hotels",
      icon: <MdHotel />,
      path: "/admin/hotels",
    },
    {
      title: "Customers",
      icon: <MdPeople />,
      path: "/admin/users",
    },
    // {
    //   title: "Payments",
    //   icon: <MdPayments />,
    //   path: "/admin/payments",
    // },
    //   {
    //     title: "Settings",
    //     icon: <MdSettings />,
    //     path: "/admin/settings",
    //   },
  ];
}

// ==========================================
// HOTEL MANAGER MENU
// ==========================================
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

// ==========================================
// RECEPTIONIST MENU
// ==========================================
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

// ==========================================
// SIDEBAR
// ==========================================

function Sidebar({ isOpen }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("adminTheme") || "light";
  });

  // ==========================================
  // APPLY THEME
  // ==========================================

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("adminTheme", theme);
  }, [theme]);

  // ==========================================
  // CHANGE THEME
  // ==========================================

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      return newTheme;
    });
  };

  return (
    <aside
      className={`
        fixed
        top-0
        left-0
        z-40
        h-screen
        w-64

        bg-white
        dark:bg-gray-900

        text-gray-900
        dark:text-gray-100

        border-r
        border-gray-200
        dark:border-gray-700

        transition-transform
        duration-300

        ${isOpen ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0
      `}
    >
      {/* ==========================================
          LOGO
      ========================================== */}

      <div
        className="
    h-20
    flex
    items-center
    gap-3
    px-5
    border-b
    border-gray-200
    dark:border-gray-700
  "
      >
        <img
          src={logo}
          alt="HotelMS Logo"
          className="
      w-10
      h-10
      object-contain
      rounded-lg
    "
        />

        <h1 className="text-2xl font-bold text-blue-500">HotelMS</h1>
      </div>
      {/* ==========================================
          MENU
      ========================================== */}

      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `
              flex
              w-full
              items-center
              gap-4
              px-6
              py-3
              text-left
              transition

              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 dark:text-gray-200"
              }

              hover:bg-blue-700
              dark:hover:bg-blue-700
              hover:text-white
              `
            }
          >
            <span className="text-xl">{item.icon}</span>

            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* ==========================================
          THEME BUTTON
      ========================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full

          border-t
          border-gray-200
          dark:border-gray-700

          bg-white
          dark:bg-gray-900
        "
      >
        <button
          type="button"
          onClick={toggleTheme}
          className="
            flex
            w-full
            items-center
            gap-4
            px-6
            py-4
            text-left

            text-gray-700
            dark:text-gray-200

            hover:bg-blue-600
            hover:text-white

            dark:hover:bg-blue-700

            transition
          "
        >
          {theme === "dark" ? (
            <MdLightMode className="text-xl text-yellow-400" />
          ) : (
            <MdDarkMode className="text-xl text-indigo-600" />
          )}

          <span className="font-medium">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
