import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../redux/slices/authSlice";
import {
  FaHotel,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      if (data.token) {
        dispatch(
          login({
            user: data.user,
            token: data.token,
          })
        );
      }

      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      console.log("Login successful:", data.user);
      if (data.user.role) {
        const role = data.user?.role?.toLowerCase();
        console.log("User role:", role);
        if (role === "admin") {
          navigate("/admin");
        } else if (role === "hotel") {
          navigate("/hotel-manager");
        } else if (role === "customer") {
          navigate("/customer/dashboard");
        } else {
          // navigate("/");
          console.error("Unknown user role:", role);
        }
      }

    } catch (err) {
      console.error(err);
      setError("Backend server not connected");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-white p-14">

          <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-8">
            <FaHotel size={42} />
          </div>

          <h1 className="text-5xl font-bold leading-tight">
            Welcome Back
          </h1>

          <p className="mt-6 text-lg text-amber-100 leading-8">
            Sign in to access your Hotel Management dashboard, manage bookings,
            reservations, and provide an exceptional guest experience.
          </p>

          <div className="mt-10 space-y-4">
            <div>✔ Secure Login</div>
            <div>✔ Easy Booking Management</div>
            <div>✔ 24/7 Customer Support</div>
          </div>

        </div>

        {/* Right Section */}
        <div className="p-8 md:p-14">

          <div className="text-center mb-10">

            <div className="w-20 h-20 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-500">
              <FaHotel size={34} />
            </div>

            <h2 className="text-4xl font-bold text-gray-800 mt-6">
              Login
            </h2>

            <p className="text-gray-500 mt-2">
              Sign in to your account
            </p>

          </div>

          {error && (
            <div className="mb-6 rounded-xl border border-red-200 bg-red-50 text-red-600 p-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Email Address
              </label>

              <div className="flex items-center border rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Password
              </label>

              <div className="flex items-center border rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">

                <FaLock className="text-gray-400 mr-3" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full outline-none"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-amber-500"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>

              </div>
            </div>

            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-amber-500 hover:text-amber-600 font-medium"
              >
                Forgot Password?
              </Link>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold transition duration-300 disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Login"}
            </button>

          </form>

          <div className="mt-8 text-center text-gray-500">

            Don't have an account?

            <Link
              to="/signup"
              className="ml-2 text-amber-500 font-semibold hover:text-amber-600"
            >
              Create Account
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;