import HMLayour from "./layout";
import DashboardStats from "../../components/Dashboard/DashboardStats";

function HMDashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
            Hotel Dashboard
          </h1>

          <p className="text-slate-500 mt-1">
            Welcome back 👋 Here's what's happening today.
          </p>
      </div>

      <DashboardStats />
    </div>
  );
}

export default HMDashboard;