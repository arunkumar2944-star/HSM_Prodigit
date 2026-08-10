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

import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // ==========================================
  // GET USER FROM LOCAL STORAGE
  // ==========================================

  let storedUser = null;

  try {
    storedUser = JSON.parse(localStorage.getItem("user"));
  } catch (error) {
    console.log("User data parsing error:", error);
  }

  // ==========================================
  // PROFILE DATA
  // ==========================================

  const user = {
    name:
      storedUser?.FirstName ||
      storedUser?.firstName ||
      storedUser?.name ||
      "Arunkumar",

    lastName: storedUser?.LastName || storedUser?.lastName || "",

    role: storedUser?.Role || storedUser?.role || "Admin",

    email: storedUser?.Email || storedUser?.email || "arunkumar@gmail.com",

    phone: storedUser?.Phone || storedUser?.phone || "+91 9876543210",

    address: storedUser?.Address || storedUser?.address || "Trichy, Tamil Nadu",

    dob: storedUser?.DateOfBirth || storedUser?.dob || "12 May 1998",

    gender: storedUser?.Gender || storedUser?.gender || "Male",

    joined:
      storedUser?.CreatedAt ||
      storedUser?.createdAt ||
      storedUser?.joined ||
      "20 Jan 2026",

    status:
      storedUser?.IsActive === 0 || storedUser?.isActive === false
        ? "Blocked"
        : "Active",

    image:
      storedUser?.ProfileImage ||
      storedUser?.profileImage ||
      "https://i.pravatar.cc/300?img=12",
  };

  // ==========================================
  // FULL NAME
  // ==========================================

  const fullName = `${user.name} ${user.lastName}`.trim();

  // ==========================================
  // ROLE URL
  // ==========================================

  const role = String(user.role).toLowerCase();

  // ==========================================
  // EDIT PROFILE ACTION
  // ==========================================

  const handleEditProfile = () => {
    if (role === "admin") {
      navigate("/admin/edit-profile");
      return;
    }

    if (role === "hotelmanager" || role === "manager") {
      navigate("/hotel-manager/edit-profile");
      return;
    }

    navigate("/edit-profile");
  };

  // ==========================================
  // CHANGE PASSWORD ACTION
  // ==========================================

  const handleChangePassword = () => {
    if (role === "admin") {
      navigate("/admin/change-password");
      return;
    }

    if (role === "hotelmanager" || role === "manager") {
      navigate("/hotel-manager/change-password");
      return;
    }

    navigate("/change-password");
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-950 mt-16">
      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 h-56 w-auto rounded-3xl shadow-lg relative">
        <div className="max-w-7xl mx-auto px-6 pt-8">
          <h1 className="text-4xl font-bold text-white mt-8">Profile</h1>

          <p className="text-blue-100 mt-2">View your personal information</p>
        </div>
      </div>

      {/* ==========================================
          PROFILE CARD
      ========================================== */}

      <div className="max-w-7xl mx-auto -mt-24 px-6 pb-10">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-3">
            {/* ==========================================
                LEFT SIDE
            ========================================== */}

            <div className="bg-gray-50 dark:bg-gray-800 p-10 border-r dark:border-gray-700">
              <div className="flex flex-col items-center">
                {/* PROFILE IMAGE */}

                <div className="relative">
                  <img
                    src={user.image}
                    alt="Profile"
                    className="
                      w-40
                      h-40
                      rounded-full
                      border-8
                      border-white
                      dark:border-gray-700
                      shadow-lg
                      object-cover
                    "
                  />
                </div>

                {/* NAME */}

                <h2 className="text-3xl font-bold mt-5 text-gray-900 dark:text-white">
                  {fullName}
                </h2>

                {/* ROLE */}

                <span
                  className="
                  bg-blue-100
                  dark:bg-blue-900/30
                  text-blue-700
                  dark:text-blue-400
                  px-4
                  py-1
                  rounded-full
                  mt-2
                  font-semibold
                "
                >
                  {user.role}
                </span>

                {/* STATUS */}

                <span
                  className={`
                    flex
                    items-center
                    gap-2
                    mt-5
                    px-4
                    py-2
                    rounded-full
                    ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  <FaCheckCircle />

                  {user.status}
                </span>
              </div>

              {/* ==========================================
                  ACTION BUTTONS
              ========================================== */}

              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 mt-8">
                {/* EDIT PROFILE */}

                <button
                  type="button"
                  onClick={handleEditProfile}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-5
                    py-3
                    rounded-lg
                    transition
                    font-medium
                  "
                >
                  <FaEdit />
                  Edit Profile
                </button>

                {/* CHANGE PASSWORD */}

                <button
                  type="button"
                  onClick={handleChangePassword}
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-gray-300
                    dark:border-gray-600
                    text-gray-700
                    dark:text-gray-200
                    hover:bg-gray-100
                    dark:hover:bg-gray-700
                    px-5
                    py-3
                    rounded-lg
                    transition
                    font-medium
                  "
                >
                  <FaLock />
                  Password
                </button>
              </div>
            </div>

            {/* ==========================================
                RIGHT SIDE
            ========================================== */}

            <div className="lg:col-span-2 p-10 mt-16">
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Info icon={<FaEnvelope />} title="Email" value={user.email} />

                <Info icon={<FaPhone />} title="Phone" value={user.phone} />

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

                <Info icon={<FaUserTie />} title="Gender" value={user.gender} />

                <Info
                  icon={<FaCalendarAlt />}
                  title="Joined"
                  value={user.joined}
                />
              </div>

              {/* ==========================================
                  STATISTICS
              ========================================== */}

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Statistics
                </h2>

                <div className="grid md:grid-cols-3 gap-5">
                  <Card title="Bookings" value="152" color="blue" />

                  <Card title="Reviews" value="84" color="green" />

                  <Card title="Experience" value="2 Years" color="purple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// INFORMATION COMPONENT
// ==========================================

function Info({ icon, title, value }) {
  return (
    <div
      className="
      bg-gray-50
      dark:bg-gray-800
      rounded-xl
      p-5
      border
      border-gray-100
      dark:border-gray-700
    "
    >
      <div
        className="
        flex
        items-center
        gap-3
        mb-2
        text-blue-600
        dark:text-blue-400
        text-xl
      "
      >
        {icon}

        <h3
          className="
          font-semibold
          text-gray-900
          dark:text-white
        "
        >
          {title}
        </h3>
      </div>

      <p
        className="
        text-gray-700
        dark:text-gray-300
        break-words
      "
      >
        {value || "-"}
      </p>
    </div>
  );
}

// ==========================================
// STATISTICS CARD
// ==========================================

function Card({ title, value, color }) {
  return (
    <div
      className={`
        rounded-2xl
        p-6
        shadow
        text-center

        ${
          color === "blue"
            ? "bg-blue-50 dark:bg-blue-900/20"
            : color === "green"
              ? "bg-green-50 dark:bg-green-900/20"
              : "bg-purple-50 dark:bg-purple-900/20"
        }
      `}
    >
      <p
        className="
        text-gray-700
        dark:text-gray-300
        font-medium
      "
      >
        {title}
      </p>

      <p
        className="
        text-3xl
        font-bold
        mt-3
        text-gray-900
        dark:text-white
      "
      >
        {value}
      </p>
    </div>
  );
}
