import {
  MdHotel,
  MdBedroomParent,
  MdBookOnline,
  MdPeople,
  MdAttachMoney,
  MdMeetingRoom,
} from "react-icons/md";

import { useEffect, useState } from "react";

import API from "../../api/axios";

import StatCard from "./StatsCard";

function DashboardStats() {
  const [stats, setStats] = useState({
    totalHotels: 0,
    totalRooms: 0,
    totalBookings: 0,
    totalUsers: 0,
    totalRevenue: 0,
    occupiedRooms: 0,
  });

  // ==============================
  // GET DASHBOARD DATA
  // ==============================

  useEffect(() => {
    getDashboardStats();
  }, []);

  const getDashboardStats = async () => {
    try {
      const response = await API.get("/admin/dashboard");

      setStats({
        totalHotels: response.data.data.totalHotels || 0,

        totalRooms: response.data.data.totalRooms || 0,

        totalBookings: response.data.data.totalBookings || 0,

        totalUsers: response.data.data.totalUsers || 0,

        totalRevenue: response.data.data.totalRevenue || 0,

        occupiedRooms: response.data.data.occupiedRooms || 0,
      });
    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
      <StatCard
        title="Total Hotels"
        value={stats.totalHotels}
        subtitle="+2 New Hotels"
        icon={<MdHotel />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <StatCard
        title="Total Rooms"
        value={stats.totalRooms}
        subtitle="Available Rooms"
        icon={<MdBedroomParent />}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />

      <StatCard
        title="Bookings"
        value={stats.totalBookings}
        subtitle="+15 Today"
        icon={<MdBookOnline />}
        iconBg="bg-green-100"
        iconColor="text-green-600"
      />

      <StatCard
        title="Customers"
        value={stats.totalUsers}
        subtitle="+12 New"
        icon={<MdPeople />}
        iconBg="bg-orange-100"
        iconColor="text-orange-600"
      />

      <StatCard
        title="Revenue"
        value={`₹ ${stats.totalRevenue}`}
        subtitle="+18% This Month"
        icon={<MdAttachMoney />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-600"
      />

      <StatCard
        title="Occupied Rooms"
        value={stats.occupiedRooms}
        subtitle="89% Occupancy"
        icon={<MdMeetingRoom />}
        iconBg="bg-red-100"
        iconColor="text-red-600"
      />
    </div>
  );
}

export default DashboardStats;
