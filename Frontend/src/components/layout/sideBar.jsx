import {
  MdDashboard,
  MdHotel,
  MdBedroomParent,
  MdPeople,
  MdBookOnline,
  MdPayments,
  MdBarChart,
  MdSettings,
  MdLogout,
} from "react-icons/md";
// import storage from "redux-persist/lib/storage";

let userRole = JSON.parse(localStorage.getItem("user"))?.role;

if (userRole !== null && userRole !== undefined) {
  userRole = userRole.toLowerCase();
}
// console.log(storage);
let menuItems = [];
if (userRole === "admin") {
  menuItems = [
    { title: "Dashboard", icon: <MdDashboard /> },
    { title: "Hotels", icon: <MdHotel /> },
    { title: "Rooms", icon: <MdBedroomParent /> },
    { title: "Bookings", icon: <MdBookOnline /> },
    { title: "Customers", icon: <MdPeople /> },
    { title: "Payments", icon: <MdPayments /> },
    { title: "Reports", icon: <MdBarChart /> },
    { title: "Settings", icon: <MdSettings /> },
  ];
}
else if (userRole === "hotelmanager") {
  menuItems = [
    { title: "Dashboard", icon: <MdDashboard /> },
    { title: "Hotels", icon: <MdHotel /> },
    { title: "Rooms", icon: <MdBedroomParent /> },
    { title: "Bookings", icon: <MdBookOnline /> },
  ];
}

function Sidebar({ isOpen }) {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen w-64 bg-slate-900 text-white transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="flex items-center justify-center h-20 border-b border-slate-700">
        <img
          src="/HMS_PRODIGIT.png"
          alt="HotelMS Logo"
          className="w-16 h-16 object-contain"
        />

        <h1 className="ml-3 text-2xl font-bold text-blue-400">
          HotelMS
        </h1>
      </div>

      <nav className="mt-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`flex w-full items-center gap-4 px-6 py-3 text-left transition
            hover:bg-blue-600 hover:text-white ${index === 0 ? "bg-blue-600" : ""
              }`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </nav>

      {/* <div className="absolute bottom-0 w-full border-t border-slate-700">
        <button className="flex w-full items-center gap-4 px-6 py-4 hover:bg-red-500">
          <MdLogout size={24} />
          Logout
        </button>
      </div> */}
    </aside>
  );
}

export default Sidebar;