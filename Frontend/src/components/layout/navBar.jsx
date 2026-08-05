import {
  MdMenu,
  MdNotifications,
  MdSearch,
} from "react-icons/md";
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

  const handleLogout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };
let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between bg-slate-900 text-white transition-transform duration-300">
      <div className="flex items-center gap-4">
        <button
          className="text-3xl lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <MdMenu />
        </button>


      </div>



      <div className="flex" ref={dropdownRef}>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <MdNotifications
              className="text-amber-500 hover:text-amber-600 transition"
              size={35}
            />

            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              3
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-slate-700 transition"
        >
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt=""
            className="w-11 h-11 rounded-full object-cover border-2 border-blue-500"
          />

          <div className="hidden md:block text-left">
            <h4 className="font-semibold text-white">
              {user?.name}
            </h4>

            <p className="text-sm text-white">
              {user?.role}
            </p>
          </div>

          <FaChevronDown
            className={`transition duration-300 ${showProfile ? "rotate-180" : ""
              }`}
          />
        </button>

        {showProfile && (
          <div className="absolute right-0 mt-16 w-72 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">

            {/* Header */}

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5">

              <div className="flex items-center gap-3">

                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt=""
                  className="w-14 h-14 rounded-full border-2 border-white"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {user?.name}
                  </h3>

                  <p className="text-sm text-blue-100">
                    {user?.role}
                  </p>
                </div>

              </div>

            </div>

            {/* Menu */}

            <div className="py-2">

              <Link
                to="/admin/profile"
                className="flex items-center gap-3 px-5 py-3 hover:bg-slate-700 text-blue-500 transition"
              >
                <FaUser className="text-blue-600" />
                My Profile
              </Link>

              {/* <Link
                to="/admin/profile/edit"
                className="flex items-center gap-3 px-5 py-3 text-green-400 hover:bg-slate-500 transition"
              >
                <FaUserEdit className="text-green-600" />
                Edit Profile
              </Link> */}

              <Link
                to="/admin/change-password"
                className="flex items-center gap-3 px-5 py-3 text-orange-500 hover:bg-slate-700 transition"
              >
                <FaLock className="text-orange-500" />
                Change Password
              </Link>

              <hr className="my-2 text-gray-600" />

              <button onClick={handleLogout}
                className="w-full flex items-center gap-3 px-5 py-3 hover:bg-red-700 hover:text-red-300 text-red-800 transition"
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