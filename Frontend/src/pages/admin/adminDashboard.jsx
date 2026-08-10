import DashboardStats from "../../components/Dashboard/DashboardStats";

function AdminDashboard() {
  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-slate-900
        text-gray-900
        dark:text-white
        transition-colors
        duration-300
      "
    >
      {/* ==============================
          HEADER
      ============================== */}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome Back, Admin 👋
        </h1>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Here's an overview of your hotel management system.
        </p>
      </div>

      {/* ==============================
          DASHBOARD STATISTICS
      ============================== */}

      <DashboardStats />
    </div>
  );
}

export default AdminDashboard;
