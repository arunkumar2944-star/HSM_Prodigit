import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../../api/axios";

import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function ChangePassword() {
  const navigate = useNavigate();

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const getStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[@$!%*?&]/.test(password)) score++;

    if (score <= 2) {
      return {
        text: "Weak",
        color: "bg-red-500",
      };
    }

    if (score <= 4) {
      return {
        text: "Medium",
        color: "bg-yellow-500",
      };
    }

    return {
      text: "Strong",
      color: "bg-green-500",
    };
  };

  const strength = getStrength(form.newPassword);

  // ==========================================
  // CHANGE PASSWORD ACTION
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.currentPassword) {
      alert("Please enter your current password.");
      return;
    }

    if (!form.newPassword) {
      alert("Please enter your new password.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (form.newPassword.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(form.newPassword)) {
      alert(
        "Password must contain at least one uppercase letter."
      );
      return;
    }

    if (!/[a-z]/.test(form.newPassword)) {
      alert(
        "Password must contain at least one lowercase letter."
      );
      return;
    }

    if (!/\d/.test(form.newPassword)) {
      alert(
        "Password must contain at least one number."
      );
      return;
    }

    if (!/[@$!%*?&]/.test(form.newPassword)) {
      alert(
        "Password must contain at least one special character."
      );
      return;
    }

    if (
      form.currentPassword ===
      form.newPassword
    ) {
      alert(
        "New password must be different from current password."
      );
      return;
    }

    try {
      setLoading(true);

      console.log("Changing password...");

      const response = await API.put(
        "/admin/change-password",
        {
          currentPassword:
            form.currentPassword,

          newPassword:
            form.newPassword,
        }
      );

      console.log(
        "Change password response:",
        response
      );

      console.log(
        "Response data:",
        response.data
      );

      // SUCCESS ALERT

      alert(
        response.data?.message ||
          "Password changed successfully."
      );

      // Clear form

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

    } catch (error) {
      console.error(
        "CHANGE PASSWORD ERROR:",
        error
      );

      console.error(
        "STATUS:",
        error.response?.status
      );

      console.error(
        "DATA:",
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
          "Password change failed."
      );

    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // CANCEL ACTION
  // ==========================================

  const handleCancel = () => {
    setForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    navigate("/admin/settings");
  };

  return (
    <div
      className="
        max-w-2xl
        mx-auto
      "
    >
      {/* HEADER */}

      <div
        className="
          bg-blue-600
          text-white
          rounded-t-2xl
          p-8
        "
      >
        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14
              rounded-xl
              bg-white/20
              flex
              items-center
              justify-center
              text-2xl
            "
          >
            <FaShieldAlt />
          </div>

          <div>

            <h1 className="text-3xl font-bold">
              Change Password
            </h1>

            <p className="mt-2 text-blue-100">
              Update your account password to keep your account secure.
            </p>

          </div>

        </div>
      </div>

      {/* FORM */}

      <div
        className="
          bg-white
          dark:bg-gray-900
          rounded-b-2xl
          shadow-lg
          border
          border-gray-200
          dark:border-gray-800
        "
      >
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >

          {/* CURRENT PASSWORD */}

          <PasswordInput
            label="Current Password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            show={showCurrent}
            setShow={setShowCurrent}
          />

          {/* NEW PASSWORD */}

          <PasswordInput
            label="New Password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            show={showNew}
            setShow={setShowNew}
          />

          {/* STRENGTH */}

          {form.newPassword && (
            <>
              <div
                className="
                  w-full
                  bg-gray-200
                  dark:bg-gray-700
                  rounded-full
                  h-2
                "
              >
                <div
                  className={`${strength.color} h-2 rounded-full transition-all`}
                  style={{
                    width:
                      strength.text === "Weak"
                        ? "35%"
                        : strength.text === "Medium"
                        ? "70%"
                        : "100%",
                  }}
                />
              </div>

              <p
                className={`text-sm font-medium ${
                  strength.text === "Weak"
                    ? "text-red-600"
                    : strength.text === "Medium"
                    ? "text-yellow-600"
                    : "text-green-600"
                }`}
              >
                Password Strength:{" "}
                {strength.text}
              </p>
            </>
          )}

          {/* CONFIRM PASSWORD */}

          <PasswordInput
            label="Confirm New Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            show={showConfirm}
            setShow={setShowConfirm}
          />

          {/* PASSWORD RULES */}

          <div
            className="
              bg-blue-50
              dark:bg-blue-900/20
              border
              border-blue-100
              dark:border-blue-800
              rounded-xl
              p-4
            "
          >
            <h3
              className="
                font-semibold
                mb-3
                flex
                items-center
                gap-2
                text-gray-900
                dark:text-white
              "
            >
              <FaCheckCircle className="text-green-600" />

              Password Requirements
            </h3>

            <ul
              className="
                space-y-1
                text-sm
                text-gray-700
                dark:text-gray-300
              "
            >
              <li>
                • Minimum 8 characters
              </li>

              <li>
                • At least one uppercase letter
              </li>

              <li>
                • At least one lowercase letter
              </li>

              <li>
                • At least one number
              </li>

              <li>
                • At least one special character
              </li>
            </ul>
          </div>

          {/* BUTTONS */}

          <div className="flex gap-4 pt-2">

            {/* CANCEL */}

            <button
              type="button"
              onClick={handleCancel}
              disabled={loading}
              className="
                flex-1
                border
                border-gray-300
                dark:border-gray-700
                py-3
                rounded-lg
                hover:bg-gray-100
                dark:hover:bg-gray-800
                font-medium
                text-gray-700
                dark:text-gray-200
                disabled:opacity-50
              "
            >
              Cancel
            </button>

            {/* UPDATE PASSWORD */}

            <button
              type="submit"
              disabled={loading}
              className="
                flex-1
                bg-blue-600
                hover:bg-blue-700
                text-white
                py-3
                rounded-lg
                font-semibold
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading
                ? "Updating..."
                : "Update Password"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

// ==========================================
// PASSWORD INPUT COMPONENT
// ==========================================

function PasswordInput({
  label,
  name,
  value,
  onChange,
  show,
  setShow,
}) {
  return (
    <div>

      <label
        className="
          block
          text-sm
          font-semibold
          text-gray-700
          dark:text-gray-300
          mb-2
        "
      >
        {label}
      </label>

      <div className="relative">

        <FaLock
          className="
            absolute
            left-4
            top-4
            text-gray-400
          "
        />

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="
            w-full
            border
            border-gray-300
            dark:border-gray-700
            rounded-lg
            py-3
            pl-11
            pr-12
            bg-white
            dark:bg-gray-800
            text-gray-900
            dark:text-white
            focus:ring-2
            focus:ring-blue-500
            focus:outline-none
          "
        />

        <button
          type="button"
          onClick={() =>
            setShow(!show)
          }
          className="
            absolute
            right-4
            top-4
            text-gray-500
            hover:text-blue-600
          "
        >
          {show ? (
            <FaEyeSlash />
          ) : (
            <FaEye />
          )}
        </button>

      </div>
    </div>
  );
}