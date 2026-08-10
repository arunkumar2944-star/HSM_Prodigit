import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaUser,
  FaLock,
  FaPalette,
  FaSun,
  FaMoon,
  FaDesktop,
  FaChevronRight,
  FaCheck,
  FaShieldAlt,
} from "react-icons/fa";

export default function AdminSettings() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("adminTheme") || "light",
  );

  // ============================
  // APPLY THEME
  // ============================
  const applyTheme = (selectedTheme) => {
    const root = document.documentElement;

    if (selectedTheme === "dark") {
      root.classList.add("dark");
    } else if (selectedTheme === "light") {
      root.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      root.classList.toggle("dark", prefersDark);
    }
  };

  // ============================
  // THEME EFFECT
  // ============================
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // ============================
  // CHANGE THEME
  // ============================
  const changeTheme = (selectedTheme) => {
    console.log("Selected theme:", selectedTheme);

    setTheme(selectedTheme);
    localStorage.setItem("adminTheme", selectedTheme);

    const root = document.documentElement;

    if (selectedTheme === "dark") {
      root.classList.add("dark");
    } else if (selectedTheme === "light") {
      root.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      if (prefersDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }

    console.log("HTML classes:", document.documentElement.className);
  };

  return (
    <div className="space-y-8">
      {/* ============================
          HEADER
      ============================ */}

      <div>
        <div className="flex items-center gap-3">
          <div
            className="
              w-11 h-11
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
            "
          >
            <FaShieldAlt />
          </div>

          <div>
            <h1
              className="
                text-3xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              Settings
            </h1>

            <p
              className="
                text-gray-500
                dark:text-gray-400
                mt-1
              "
            >
              Manage your administrator account and dashboard preferences
            </p>
          </div>
        </div>
      </div>

      {/* ============================
          ACCOUNT
      ============================ */}

      <section>
        <div className="mb-3">
          <h2
            className="
              text-lg
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Account
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Manage your administrator information
          </p>
        </div>

        <div
          onClick={() => navigate("/admin/profile/edit")}
          className="
            group
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-6
            shadow-sm
            hover:shadow-md
            hover:border-blue-300
            dark:hover:border-blue-700
            cursor-pointer
            transition-all
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div
                className="
                  w-14 h-14
                  rounded-xl
                  bg-blue-50
                  dark:bg-blue-900/30
                  text-blue-600
                  dark:text-blue-400
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                <FaUser />
              </div>

              <div>
                <h3
                  className="
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  Edit Profile
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                    mt-1
                  "
                >
                  Update your name, email and personal information
                </p>
              </div>
            </div>

            <FaChevronRight
              className="
                text-gray-400
                group-hover:text-blue-600
                transition
              "
            />
          </div>
        </div>
      </section>

      {/* ============================
          SECURITY
      ============================ */}

      <section>
        <div className="mb-3">
          <h2
            className="
              text-lg
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Security
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Keep your administrator account secure
          </p>
        </div>

        <div
          onClick={() => navigate("/admin/change-password")}
          className="
            group
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-6
            shadow-sm
            hover:shadow-md
            hover:border-red-300
            dark:hover:border-red-700
            cursor-pointer
            transition-all
          "
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div
                className="
                  w-14 h-14
                  rounded-xl
                  bg-red-50
                  dark:bg-red-900/30
                  text-red-600
                  dark:text-red-400
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                <FaLock />
              </div>

              <div>
                <h3
                  className="
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  Change Password
                </h3>

                <p
                  className="
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                    mt-1
                  "
                >
                  Update your password regularly to protect your account
                </p>
              </div>
            </div>

            <FaChevronRight
              className="
                text-gray-400
                group-hover:text-red-600
                transition
              "
            />
          </div>
        </div>
      </section>

      {/* ============================
          APPEARANCE
      ============================ */}

      <section>
        <div className="mb-3">
          <h2
            className="
              text-lg
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Appearance
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Customize how your administration dashboard appears
          </p>
        </div>

        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-6
            shadow-sm
          "
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className="
                w-12 h-12
                rounded-xl
                bg-purple-50
                dark:bg-purple-900/30
                text-purple-600
                dark:text-purple-400
                flex
                items-center
                justify-center
              "
            >
              <FaPalette />
            </div>

            <div>
              <h3
                className="
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                Dashboard Theme
              </h3>

              <p
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Select your preferred dashboard appearance
              </p>
            </div>
          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-4
            "
          >
            {/* LIGHT */}

            <button
              type="button"
              onClick={() => changeTheme("light")}
              className={`
                relative
                rounded-xl
                border-2
                p-6
                transition-all
                ${
                  theme === "light"
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
                }
              `}
            >
              {theme === "light" && (
                <FaCheck
                  className="
                    absolute
                    top-4
                    right-4
                    text-blue-600
                  "
                />
              )}

              <FaSun
                className="
                  text-3xl
                  text-yellow-500
                  mx-auto
                  mb-4
                "
              />

              <h4 className="font-bold text-gray-900">Light</h4>

              <p className="text-xs text-gray-500 mt-1">Clean and bright</p>
            </button>

            {/* DARK */}

            <button
              type="button"
              onClick={() => changeTheme("dark")}
              className={`
                relative
                rounded-xl
                border-2
                p-6
                transition-all
                ${
                  theme === "dark"
                    ? "border-blue-600 bg-gray-800"
                    : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
                }
              `}
            >
              {theme === "dark" && (
                <FaCheck
                  className="
                    absolute
                    top-4
                    right-4
                    text-blue-400
                  "
                />
              )}

              <FaMoon
                className="
                  text-3xl
                  text-indigo-500
                  mx-auto
                  mb-4
                "
              />

              <h4
                className="
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                Dark
              </h4>

              <p
                className="
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                  mt-1
                "
              >
                Comfortable at night
              </p>
            </button>

            {/* SYSTEM */}

            <button
              type="button"
              onClick={() => changeTheme("system")}
              className={`
                relative
                rounded-xl
                border-2
                p-6
                transition-all
                ${
                  theme === "system"
                    ? "border-blue-600 bg-blue-50 dark:bg-gray-800"
                    : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
                }
              `}
            >
              {theme === "system" && (
                <FaCheck
                  className="
                    absolute
                    top-4
                    right-4
                    text-blue-600
                  "
                />
              )}

              <FaDesktop
                className="
                  text-3xl
                  text-gray-500
                  mx-auto
                  mb-4
                "
              />

              <h4
                className="
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                System
              </h4>

              <p
                className="
                  text-xs
                  text-gray-500
                  dark:text-gray-400
                  mt-1
                "
              >
                Follow device settings
              </p>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
