import {
  FaHotel,
  FaEnvelope,
  FaPhone,
  FaStar,
  FaUserTie,
  FaMapMarkerAlt,
  FaCity,
  FaMap,
  FaMapPin,
  FaImage,
  FaLock,
  FaBuilding,
} from "react-icons/fa";

function HotelRegisterForm({
  hotel,
  handleChange,
  handleImage,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-8">

      {/* Hotel Information */}
      <div>

        <div className="flex items-center gap-3 mb-6">
          <FaBuilding className="text-amber-500 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">
            Hotel Information
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <Input
            icon={<FaHotel />}
            label="Hotel Name"
            name="hotelName"
            value={hotel.hotelName}
            placeholder="Enter hotel name"
            onChange={handleChange}
          />

          <Input
            icon={<FaEnvelope />}
            label="Hotel Email"
            type="email"
            name="hotelEmail"
            value={hotel.hotelEmail}
            placeholder="hotel@example.com"
            onChange={handleChange}
          />

          <Input
            icon={<FaPhone />}
            label="Hotel Phone"
            name="hotelPhone"
            value={hotel.hotelPhone}
            placeholder="+91 XXXXX XXXXX"
            onChange={handleChange}
          />

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Hotel Category
            </label>

            <div className="flex items-center border rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
              <FaStar className="text-gray-400 mr-3" />

              <select
                name="hotelCategory"
                value={hotel.hotelCategory}
                onChange={handleChange}
                className="w-full bg-transparent outline-none"
                required
              >
                <option value="">Select Category</option>
                <option>1 Star</option>
                <option>2 Star</option>
                <option>3 Star</option>
                <option>4 Star</option>
                <option>5 Star</option>
                <option>Luxury</option>
              </select>
            </div>
          </div>

        </div>

      </div>

      {/* Owner */}

      <div>

        <div className="flex items-center gap-3 mb-6">
          <FaUserTie className="text-amber-500 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">
            Owner Information
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <Input
            icon={<FaUserTie />}
            label="Owner Name"
            name="ownerName"
            value={hotel.ownerName}
            placeholder="Owner Full Name"
            onChange={handleChange}
          />

          <Input
            icon={<FaEnvelope />}
            label="Owner Email"
            type="email"
            name="ownerEmail"
            value={hotel.ownerEmail}
            placeholder="owner@example.com"
            onChange={handleChange}
          />

        </div>

      </div>

      {/* Address */}

      <div>

        <div className="flex items-center gap-3 mb-6">
          <FaMapMarkerAlt className="text-amber-500 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">
            Address
          </h3>
        </div>

        <div>

          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Hotel Address
          </label>

          <div className="flex border rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-amber-400">
            <FaMapMarkerAlt className="text-gray-400 mt-1 mr-3" />

            <textarea
              rows="4"
              name="address"
              value={hotel.address}
              onChange={handleChange}
              placeholder="Enter complete hotel address"
              className="w-full resize-none outline-none"
              required
            />
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-5">

          <Input
            icon={<FaCity />}
            label="City"
            name="city"
            value={hotel.city}
            onChange={handleChange}
          />

          <Input
            icon={<FaMap />}
            label="State"
            name="state"
            value={hotel.state}
            onChange={handleChange}
          />

          <Input
            icon={<FaMapPin />}
            label="Pincode"
            name="pincode"
            value={hotel.pincode}
            onChange={handleChange}
          />

        </div>

      </div>

      {/* Logo */}

      <div>

        <div className="flex items-center gap-3 mb-6">
          <FaImage className="text-amber-500 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">
            Hotel Logo
          </h3>
        </div>

        <label className="border-2 border-dashed rounded-xl p-8 flex justify-center cursor-pointer hover:border-amber-500 transition">

          <div className="text-center">

            <FaImage className="mx-auto text-5xl text-amber-500 mb-3" />

            <p className="font-medium text-gray-700">
              Click to Upload Hotel Logo
            </p>

            <p className="text-sm text-gray-400 mt-1">
              JPG, PNG or JPEG
            </p>

          </div>

          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImage}
          />

        </label>

      </div>

      {/* Password */}

      <div>

        <div className="flex items-center gap-3 mb-6">
          <FaLock className="text-amber-500 text-xl" />
          <h3 className="text-xl font-bold text-gray-800">
            Security
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <Input
            icon={<FaLock />}
            label="Password"
            type="password"
            name="password"
            value={hotel.password}
            onChange={handleChange}
          />

          <Input
            icon={<FaLock />}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={hotel.confirmPassword}
            onChange={handleChange}
          />

        </div>

      </div>

      {/* Terms */}

      <div className="flex items-start gap-3">
        <input
          id="terms"
          type="checkbox"
          className="mt-1 h-4 w-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
          required
        />

        <label htmlFor="terms" className="text-gray-600">
          I agree to the
          <span className="text-amber-500 font-semibold">
            {" "}Terms & Conditions
          </span>
          {" "}and Privacy Policy.
        </label>
      </div>

      {/* Button */}

      <button
        type="submit"
        className="w-full h-14 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:from-amber-600 hover:to-orange-600 transition"
      >
        Register Hotel
      </button>

    </form>
  );
}

function Input({
  icon,
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-700">
        {label}
      </label>

      <div className="flex items-center border rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
        <span className="text-gray-400 mr-3">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="w-full outline-none"
          required
        />
      </div>
    </div>
  );
}

export default HotelRegisterForm;