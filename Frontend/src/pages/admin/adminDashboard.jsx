import AdminLayout from "./layout";
import DashboardStats from "../../components/Dashboard/DashboardStats";

function Dashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Back, Admin 👋
        </h1>

        <p className="text-gray-500 mt-2">
          Here's an overview of your hotel management system.
        </p>
      </div>

      <DashboardStats />

    </div>

  );
}

export default Dashboard;