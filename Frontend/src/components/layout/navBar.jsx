import { MdMenu, MdNotifications, MdSearch } from "react-icons/md";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUserCircle,
  FaUser,
  FaUserEdit,
  FaLock,
  FaSignOutAlt,
  FaChevronDown,
  FaBell,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar({ setIsOpen }) {
  const [showProfile, setShowProfile] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  // ==========================================
  // GET USER
  // ==========================================

  let user = null;

  try {
    user = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.log("User data error:", error);
  }

  // ==========================================
  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  // ==========================================

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="
        sticky
        top-0
        z-30
        h-20

        bg-white
        dark:bg-gray-900

        border-b
        border-gray-200
        dark:border-gray-700

        text-gray-900
        dark:text-white

        shadow-sm
        dark:shadow-gray-950/30

        transition-colors
        duration-300

        flex
        items-center
        justify-between
        px-6
      "
    >
      {/* ==========================================
          MOBILE MENU BUTTON
      ========================================== */}

      <button
        className="
          text-3xl
          lg:hidden
          text-gray-700
          dark:text-gray-200
          hover:text-blue-600
          dark:hover:text-blue-400
          transition
        "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MdMenu />
      </button>

      {/* ==========================================
          RIGHT SIDE
      ========================================== */}

      <div className="flex items-center gap-4 ml-auto" ref={dropdownRef}>
        {/* ==========================================
            NOTIFICATIONS
        ========================================== */}

        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <MdNotifications
              className="
                text-amber-500
                hover:text-amber-600
                transition
              "
              size={35}
            />

            <span
              className="
                absolute
                -top-1
                -right-1
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-red-500
                text-[10px]
                font-bold
                text-white
              "
            >
              3
            </span>
          </div>
        </div>

        {/* ==========================================
            PROFILE BUTTON
        ========================================== */}

        <button
          onClick={() => setShowProfile(!showProfile)}
          className="
            flex
            items-center
            gap-3
            rounded-xl
            px-3
            py-2

            hover:bg-gray-100
            dark:hover:bg-gray-800

            transition
          "
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="
              w-11
              h-11
              rounded-full
              object-cover
              border-2
              border-blue-500
            "
          />

          <div className="hidden md:block text-left">
            <h4
              className="
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              {user?.name}
            </h4>

            <p
              className="
                text-sm
                text-gray-500
                dark:text-gray-300
              "
            >
              {user?.role}
            </p>
          </div>

          <FaChevronDown
            className={`
              text-gray-600
              dark:text-gray-300
              transition
              duration-300
              ${showProfile ? "rotate-180" : ""}
            `}
          />
        </button>

        {/* ==========================================
            PROFILE DROPDOWN
        ========================================== */}

        {showProfile && (
          <div
            className="
              absolute
              right-6
              top-16
              mt-1
              w-72

              bg-white
              dark:bg-gray-800

              rounded-2xl

              shadow-2xl
              dark:shadow-black/40

              border
              border-gray-200
              dark:border-gray-700

              overflow-hidden
              z-50

              transition-colors
              duration-300
            "
          >
            {/* ==========================================
                DROPDOWN HEADER
            ========================================== */}

            <div
              className="
                bg-gradient-to-r
                from-blue-600
                to-indigo-600
                text-white
                p-5
              "
            >
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt=""
                  className="
                    w-14
                    h-14
                    rounded-full
                    border-2
                    border-white
                  "
                />

                <div>
                  <h3 className="font-bold text-lg">{user?.name}</h3>

                  <p className="text-sm text-blue-100">{user?.role}</p>
                </div>
              </div>
            </div>

            {/* ==========================================
                MENU
            ========================================== */}

            <div className="py-2">
              {/* PROFILE */}

              <Link
                to="/admin/profile"
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3

                  text-blue-600
                  dark:text-blue-400

                  hover:bg-gray-100
                  dark:hover:bg-gray-700

                  transition
                "
              >
                <FaUser className="text-blue-600 dark:text-blue-400" />
                My Profile
              </Link>

              {/* EDIT PROFILE */}

              {/* 
              <Link
                to="/admin/profile/edit"
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  text-green-500
                  hover:bg-gray-100
                  dark:hover:bg-gray-700
                  transition
                "
              >
                <FaUserEdit />
                Edit Profile
              </Link>
              */}

              {/* CHANGE PASSWORD */}

              <Link
                to="/admin/change-password"
                className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3

                  text-orange-500

                  hover:bg-gray-100
                  dark:hover:bg-gray-700

                  transition
                "
              >
                <FaLock className="text-orange-500" />
                Change Password
              </Link>

              <hr
                className="
                  my-2
                  border-gray-200
                  dark:border-gray-700
                "
              />

              {/* LOGOUT */}

              <button
                onClick={handleLogout}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3

                  text-red-600
                  dark:text-red-400

                  hover:bg-red-50
                  dark:hover:bg-red-900/30

                  transition
                "
              >
                <FaSignOutAlt />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
