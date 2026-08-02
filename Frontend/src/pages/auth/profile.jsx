import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUserTie,
  FaCalendarAlt,
  FaEdit,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";

export default function Profile() {
  const user = {
    name: "Arunkumar",
    role: "Hotel Manager",
    email: "arunkumar@gmail.com",
    phone: "+91 9876543210",
    address: "Trichy, Tamil Nadu",
    dob: "12 May 1998",
    gender: "Male",
    joined: "20 Jan 2026",
    status: "Active",
    image:
      "https://i.pravatar.cc/300?img=12",
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 mt-16">

      {/* Header */}

      {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl shadow-lg h-52 relative">
      </div> */}

      {/* Card */}

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl -mt-24 relative p-8">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left */}

          <div className="lg:w-1/3 flex flex-col items-center">

            <img
              src={user.image}
              alt=""
              className="w-40 h-40 rounded-full border-8 border-white shadow-lg object-cover"
            />

            <h2 className="text-3xl font-bold mt-5">
              {user.name}
            </h2>

            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full mt-2 font-semibold">
              {user.role}
            </span>

            <span className="flex items-center gap-2 mt-5 bg-green-100 text-green-700 px-4 py-2 rounded-full">
              <FaCheckCircle />
              {user.status}
            </span>

            <div className="flex gap-4 mt-8">

              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg">
                <FaEdit />
                Edit Profile
              </button>

              <button className="flex items-center gap-2 border border-gray-300 hover:bg-gray-100 px-5 py-3 rounded-lg">
                <FaLock />
                Password
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="lg:w-2/3">

            <h2 className="text-2xl font-bold mb-8">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <Info
                icon={<FaEnvelope />}
                title="Email"
                value={user.email}
              />

              <Info
                icon={<FaPhone />}
                title="Phone"
                value={user.phone}
              />

              <Info
                icon={<FaMapMarkerAlt />}
                title="Address"
                value={user.address}
              />

              <Info
                icon={<FaBirthdayCake />}
                title="Date of Birth"
                value={user.dob}
              />

              <Info
                icon={<FaUserTie />}
                title="Gender"
                value={user.gender}
              />

              <Info
                icon={<FaCalendarAlt />}
                title="Joined"
                value={user.joined}
              />

            </div>

            {/* Statistics */}

            <div className="mt-12">

              <h2 className="text-2xl font-bold mb-6">
                Statistics
              </h2>

              <div className="grid md:grid-cols-3 gap-5">

                <Card
                  title="Bookings"
                  value="152"
                  color="blue"
                />

                <Card
                  title="Reviews"
                  value="84"
                  color="green"
                />

                <Card
                  title="Experience"
                  value="2 Years"
                  color="purple"
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-lg transition">

      <div className="flex items-center gap-3 mb-2 text-blue-600 text-xl">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>

      <p className="text-gray-700">{value}</p>

    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div
      className={`rounded-2xl p-6 shadow text-center
      ${
        color === "blue"
          ? "bg-blue-50"
          : color === "green"
          ? "bg-green-50"
          : "bg-purple-50"
      }`}
    >
      <h3 className="text-gray-500">{title}</h3>

      <p className="text-3xl font-bold mt-3">
        {value}
      </p>
    </div>
  );
}