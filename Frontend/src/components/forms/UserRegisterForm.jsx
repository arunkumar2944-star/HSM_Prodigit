import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaCalendarAlt,
  FaVenusMars,
  FaMapMarkerAlt,
  FaImage,
  FaUserPlus,
} from "react-icons/fa";

function UserRegisterForm({
  user,
  handleChange,
  handleImage,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-3 border-b border-gray-200 pb-4">

        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
          <FaUserPlus className="text-amber-500 text-xl" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-800">
            Customer Information
          </h3>
        </div>
      </div>
      {/* Name */}
      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            First Name
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
            <FaUser className="text-gray-400 mr-3" />

            <input
              type="text"
              name="firstName"
              value={user.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Last Name
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
            <FaUser className="text-gray-400 mr-3" />

            <input
              type="text"
              name="lastName"
              value={user.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

      </div>

      {/* Email */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </label>

        <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
          <FaEnvelope className="text-gray-400 mr-3" />

          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full outline-none"
            required
          />
        </div>
      </div>

      {/* Phone */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Phone Number
        </label>

        <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
          <FaPhone className="text-gray-400 mr-3" />

          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full outline-none"
            required
          />
        </div>
      </div>

      {/* Password */}

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Password
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
            <FaLock className="text-gray-400 mr-3" />

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Confirm Password
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
            <FaLock className="text-gray-400 mr-3" />

            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full outline-none"
              required
            />
          </div>
        </div>

      </div>

      {/* DOB & Gender */}

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Date of Birth
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
            <FaCalendarAlt className="text-gray-400 mr-3" />

            <input
              type="date"
              name="dateOfBirth"
              value={user.dateOfBirth}
              onChange={handleChange}
              className="w-full outline-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Gender
          </label>

          <div className="flex items-center border border-gray-300 rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
            <FaVenusMars className="text-gray-400 mr-3" />

            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
              className="w-full bg-transparent outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

      </div>

      {/* Address */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Address
        </label>

        <div className="flex border border-gray-300 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-400">
          <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3" />

          <textarea
            rows="4"
            name="address"
            value={user.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="w-full outline-none resize-none"
          />
        </div>
      </div>

      {/* Profile Image */}

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Profile Image
        </label>

        <label className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-amber-500 transition">

          <div className="text-center">

            <FaImage className="mx-auto text-4xl text-amber-500 mb-3" />

            <p className="text-gray-600">
              Click to upload profile image
            </p>

            <p className="text-sm text-gray-400 mt-1">
              JPG, PNG or JPEG
            </p>

          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />

        </label>
      </div>

      {/* Submit */}

      <button
        type="submit"
        className="w-full h-14 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-3"
      >
        <FaUserPlus />
        Create Account
      </button>

    </form>
  );
}

export default UserRegisterForm;