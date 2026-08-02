import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCamera,
  FaSave,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaVenusMars,
} from "react-icons/fa";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "Arunkumar",
    lastName: "S",
    email: "arunkumar@gmail.com",
    phone: "+91 9876543210",
    dob: "1998-05-12",
    gender: "Male",
    image: "https://i.pravatar.cc/300?img=12",
    role: "Admin",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        image: URL.createObjectURL(file),
      });
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 mt-16">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 h-56 w-auto  rounded-3xl shadow-lg relative">

        <div className="max-w-7xl mx-auto px-6 pt-8">

          <Link
            to={`/${formData.role.toLowerCase()}/profile`}
            className="inline-flex items-center gap-2 text-white hover:text-gray-200"
          >
            <FaArrowLeft />
            Back to Profile
          </Link>

          <h1 className="text-4xl font-bold text-white mt-8">
            Edit Profile
          </h1>

          <p className="text-blue-100 mt-2">
            Update your personal information
          </p>

        </div>
      </div>

      {/* Card */}

      <div className="max-w-7xl mx-auto -mt-24 px-6 pb-10">

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

          <div className="grid lg:grid-cols-3">

            {/* Left Side */}

            <div className="bg-gray-50 p-10 border-r">

              <div className="flex flex-col items-center">

                <div className="relative">

                  <img
                    src={formData.image}
                    alt=""
                    className="w-44 h-44 rounded-full object-cover border-8 border-white shadow-lg"
                  />

                  <label
                    htmlFor="image"
                    className="absolute bottom-2 right-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <FaCamera />
                  </label>

                  <input
                    id="image"
                    type="file"
                    className="hidden"
                    onChange={handleImage}
                  />

                </div>

                <h2 className="text-3xl font-bold mt-6">
                  {formData.firstName} {formData.lastName}
                </h2>

                <p className="text-gray-500 mt-2">
                  Hotel Manager
                </p>

                <span className="mt-5 bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  Active Account
                </span>

              </div>
            </div>

            {/* Right Side */}

            <div className="lg:col-span-2 p-10 mt-16">

              <h2 className="text-2xl font-bold mb-8">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {/* First Name */}

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    First Name
                  </label>

                  <div className="relative">

                    <FaUser className="absolute left-4 top-4 text-gray-400" />

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                  </div>
                </div>

                {/* Last Name */}

                <div>

                  <label className="block text-gray-700 mb-2 font-medium">
                    Last Name
                  </label>

                  <div className="relative">

                    <FaUser className="absolute left-4 top-4 text-gray-400" />

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                  </div>

                </div>

                {/* Email */}

                <div>

                  <label className="block text-gray-700 mb-2 font-medium">
                    Email
                  </label>

                  <div className="relative">

                    <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                  </div>

                </div>

                {/* Phone */}

                <div>

                  <label className="block text-gray-700 mb-2 font-medium">
                    Phone
                  </label>

                  <div className="relative">

                    <FaPhone className="absolute left-4 top-4 text-gray-400" />

                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                  </div>

                </div>

                {/* DOB */}

                <div>

                  <label className="block text-gray-700 mb-2 font-medium">
                    Date of Birth
                  </label>

                  <div className="relative">

                    <FaBirthdayCake className="absolute left-4 top-4 text-gray-400" />

                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                  </div>

                </div>

                {/* Gender */}

                <div>

                  <label className="block text-gray-700 mb-2 font-medium">
                    Gender
                  </label>

                  <div className="relative">

                    <FaVenusMars className="absolute left-4 top-4 text-gray-400" />

                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>

                  </div>

                </div>

              </div>

              {/* Buttons */}

              <div className="flex justify-end gap-4 mt-10">

                <button className="flex items-center gap-2 border px-6 py-3 rounded-xl hover:bg-gray-100">
                  <FaTimes />
                  Cancel
                </button>

                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
                  <FaSave />
                  Save & Continue
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}