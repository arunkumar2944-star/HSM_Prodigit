import { useState } from "react";
import { Link } from "react-router-dom";

import UserRegisterForm from "../../components/forms/UserRegisterForm";
import HotelRegisterForm from "../../components/forms/HotelRegisterForm";

function Signup() {
  const [activeTab, setActiveTab] = useState("customer");

  // Customer State
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
    role: "",
    profileImage: null,
  });

  // Hotel State
  const [hotel, setHotel] = useState({
    hotelName: "",
    hotelEmail: "",
    hotelPhone: "",
    hotelCategory: "",
    ownerName: "",
    ownerEmail: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    password: "",
    confirmPassword: "",
    logo: null,
  });

  // Customer input

  const handleChange = (e) => {
    setUser({
      ...user,

      [e.target.name]: e.target.value,
    });

    // console.log("User Info",e.target.name, e.target.value)
  };

  // Customer image

  const handleImage = (e) => {
    setUser({
      ...user,

      profileImage: e.target.files[0],
    });
  };
  
    // Hotel input

    const handleHotelChange = (e) => {
      setHotel({
        ...hotel,

        [e.target.name]: e.target.value,
      });
    };

    // Hotel image

    const handleHotelImage = (e) => {
      setHotel({
        ...hotel,

        logo: e.target.files[0],
      });
    };

    // Customer Register

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
    // Hotel Register

    const handleHotelSubmit = async (e) => {
      e.preventDefault();

      if (hotel.password !== hotel.confirmPassword) {
        alert("Password not match");
        return;
      }

      const hotelData = {
        ...hotel,

        role: "Hotel",
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
          alert("Hotel Registered");

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

    <div className="w-full max-w-7xl bg-white rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-1">

      {/* Left Section */}
      {/* <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-white p-14">

        <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl">
          🏨
        </div>

        <h1 className="text-5xl font-bold mt-8">
          Join HotelMS
        </h1>

        <p className="mt-6 text-lg text-amber-100 leading-8">
          Create your account and enjoy secure hotel booking,
          reservation management, and premium hospitality services.
        </p>

        <div className="mt-10 space-y-4 text-lg">
          <p>✔ Customer Registration</p>
          <p>✔ Hotel Partner Registration</p>
          <p>✔ Secure Account Creation</p>
          <p>✔ Fast & Easy Setup</p>
        </div>

      </div> */}

      {/* Right Section */}

      <div className="p-8 md:p-12">

        <div className="text-center">

          <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-4xl">
            🏨
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mt-6">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2">
            Register as a Customer or Hotel Partner
          </p>

        </div>

        {/* Tabs */}

        <div className="mt-10 flex bg-gray-100 rounded-xl p-1">

          <button
            type="button"
            onClick={() => setActiveTab("customer")}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "customer"
                ? "bg-amber-500 text-white shadow-lg"
                : "text-gray-600 hover:text-amber-500"
            }`}
          >
            👤 Customer
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("hotel")}
            className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "hotel"
                ? "bg-amber-500 text-white shadow-lg"
                : "text-gray-600 hover:text-amber-500"
            }`}
          >
            🏨 Hotel
          </button>

        </div>

        {/* Form */}

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

        {/* Login */}

        <div className="text-center mt-8">

          <span className="text-gray-500">
            Already have an account?
          </span>

          <Link
            to="/login"
            className="ml-2 text-amber-500 font-semibold hover:text-amber-600"
          >
            Login
          </Link>

        </div>

      </div>

    </div>

  </div>
);
  }

export default Signup;
