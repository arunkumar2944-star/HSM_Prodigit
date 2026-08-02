import { useState } from "react";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function ChangePassword() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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

    if (score <= 2)
      return {
        text: "Weak",
        color: "bg-red-500",
      };

    if (score <= 4)
      return {
        text: "Medium",
        color: "bg-yellow-500",
      };

    return {
      text: "Strong",
      color: "bg-green-500",
    };
  };

  const strength = getStrength(form.newPassword);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.newPassword !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(form);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaShieldAlt size={28} />
          </div>

          <h1 className="text-3xl font-bold">
            Change Password
          </h1>

          <p className="mt-2 text-blue-100">
            Update your account password to keep your account secure.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >
          {/* Current Password */}
          <PasswordInput
            label="Current Password"
            name="currentPassword"
            value={form.currentPassword}
            onChange={handleChange}
            show={showCurrent}
            setShow={setShowCurrent}
          />

          {/* New Password */}
          <PasswordInput
            label="New Password"
            name="newPassword"
            value={form.newPassword}
            onChange={handleChange}
            show={showNew}
            setShow={setShowNew}
          />

          {/* Strength */}
          {form.newPassword && (
            <>
              <div className="w-full bg-gray-200 rounded-full h-2">
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
                Password Strength: {strength.text}
              </p>
            </>
          )}

          {/* Confirm Password */}
          <PasswordInput
            label="Confirm New Password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            show={showConfirm}
            setShow={setShowConfirm}
          />

          {/* Password Rules */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Password Requirements
            </h3>

            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Minimum 8 characters</li>
              <li>• At least one uppercase letter</li>
              <li>• At least one lowercase letter</li>
              <li>• At least one number</li>
              <li>• At least one special character</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              type="button"
              className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-100 font-medium"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

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
      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <FaLock className="absolute left-4 top-4 text-gray-400" />

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="w-full border rounded-lg py-3 pl-11 pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-4 text-gray-500 hover:text-blue-600"
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}