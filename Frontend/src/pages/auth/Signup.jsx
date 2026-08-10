import { useState } from "react";
import { Link } from "react-router-dom";

import UserRegisterForm from "../../components/forms/UserRegisterForm";
import HotelRegisterForm from "../../components/forms/HotelRegisterForm";

function Signup() {
  const [activeTab, setActiveTab] = useState("customer");

  // =========================
  // CUSTOMER STATE
  // =========================

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",

    email: "",
    phone: "",

    password: "",
    confirmPassword: "",

    dateOfBirth: "",
    gender: "",

    address: "",

    profileImage: null,
  });

  // =========================
  // HOTEL STATE
  // =========================
  const [hotel, setHotel] = useState({
    // Hotel details

    hotelName: "",
    hotelEmail: "",
    hotelPhone: "",
    hotelCategory: "",

    // Owner details

    ownerName: "",
    ownerEmail: "",

    // Manager details

    managerName: "",
    managerEmail: "",
    managerPhone: "",

    // Address

    address: "",
    city: "",
    state: "",
    pincode: "",

    // Security

    password: "",
    confirmPassword: "",

    logo: null,
  });
  // =========================
  // CUSTOMER INPUT CHANGE
  // =========================

  const handleChange = (e) => {
    setUser({
      ...user,

      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // CUSTOMER IMAGE
  // =========================

  const handleImage = (e) => {
    setUser({
      ...user,

      profileImage: e.target.files[0],
    });
  };

  // =========================
  // HOTEL INPUT CHANGE
  // =========================

  const handleHotelChange = (e) => {
    setHotel({
      ...hotel,

      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // HOTEL LOGO
  // =========================

  const handleHotelImage = (e) => {
    setHotel({
      ...hotel,

      logo: e.target.files[0],
    });
  };

  // =========================
  // CUSTOMER REGISTER
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Password not match");

      return;
    }

    const customerData = {
      firstname: user.firstName,

      lastname: user.lastName,

      email: user.email,

      phone: user.phone,

      password: user.password,

      dateOfBirth: user.dateOfBirth,

      gender: user.gender,

      address: user.address,

      role: "Customer",
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(customerData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert("Customer Registered");

        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);

      alert("Server Error");
    }
  };

  // =========================
  // HOTEL REGISTER
  // =========================

  const handleHotelSubmit = async (e) => {
    e.preventDefault();

    if (hotel.password !== hotel.confirmPassword) {
      alert("Password not match");

      return;
    }

    const hotelData = {
      hotelName: hotel.hotelName,

      hotelEmail: hotel.hotelEmail,

      hotelPhone: hotel.hotelPhone,

      hotelCategory: hotel.hotelCategory,

      ownerName: hotel.ownerName,

      ownerEmail: hotel.ownerEmail,

      managerName: hotel.managerName,

      managerEmail: hotel.managerEmail,

      managerPhone: hotel.managerPhone,

      address: hotel.address,

      city: hotel.city,

      state: hotel.state,

      pincode: hotel.pincode,

      password: hotel.password,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/hotel/register",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(hotelData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert("Hotel Registered Successfully");

        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);

      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 md:p-12">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-4xl">
              🏨
            </div>

            <h2 className="text-4xl font-bold mt-6">Create Account</h2>

            <p className="text-gray-500 mt-2">
              Register as Customer or Hotel Partner
            </p>
          </div>

          {/* TAB */}

          <div className="mt-10 flex bg-gray-100 rounded-xl p-1">
            <button
              type="button"
              onClick={() => setActiveTab("customer")}
              className={`flex-1 py-3 rounded-lg font-semibold ${
                activeTab === "customer"
                  ? "bg-amber-500 text-white"
                  : "text-gray-600"
              }`}
            >
              👤 Customer
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("hotel")}
              className={`flex-1 py-3 rounded-lg font-semibold ${
                activeTab === "hotel"
                  ? "bg-amber-500 text-white"
                  : "text-gray-600"
              }`}
            >
              🏨 Hotel
            </button>
          </div>

          <div className="mt-8">
            {activeTab === "customer" ? (
              <UserRegisterForm
                user={user}
                handleChange={handleChange}
                handleImage={handleImage}
                handleSubmit={handleSubmit}
              />
            ) : (
              <HotelRegisterForm
                hotel={hotel}
                handleChange={handleHotelChange}
                handleImage={handleHotelImage}
                handleSubmit={handleHotelSubmit}
              />
            )}
          </div>

          <div className="text-center mt-8">
            <span className="text-gray-500">Already have account?</span>

            <Link to="/login" className="ml-2 text-amber-500 font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
