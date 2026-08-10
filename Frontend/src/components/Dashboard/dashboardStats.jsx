import {
  MdHotel,
  MdBedroomParent,
  MdBookOnline,
  MdPeople,
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

      const data = response.data.data;

      setStats({
        totalHotels: data.totalHotels || 0,
        totalRooms: data.totalRooms || 0,
        totalBookings: data.totalBookings || 0,
        totalUsers: data.totalUsers || 0,
        occupiedRooms: data.occupiedRooms || 0,
      });
    } catch (error) {
      console.log("Dashboard Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* TOTAL HOTELS */}
      <StatCard
        title="Total Hotels"
        value={stats.totalHotels}
        subtitle="+2 New Hotels"
        icon={<MdHotel />}
        iconBg="bg-blue-100 dark:bg-blue-900/40"
        iconColor="text-blue-600 dark:text-blue-400"
      />

      {/* TOTAL ROOMS */}
      <StatCard
        title="Total Rooms"
        value={stats.totalRooms}
        subtitle="Available Rooms"
        icon={<MdBedroomParent />}
        iconBg="bg-purple-100 dark:bg-purple-900/40"
        iconColor="text-purple-600 dark:text-purple-400"
      />

      {/* BOOKINGS */}
      <StatCard
        title="Bookings"
        value={stats.totalBookings}
        subtitle="+15 Today"
        icon={<MdBookOnline />}
        iconBg="bg-green-100 dark:bg-green-900/40"
        iconColor="text-green-600 dark:text-green-400"
      />

      {/* CUSTOMERS */}
      <StatCard
        title="Customers"
        value={stats.totalUsers}
        subtitle="+12 New"
        icon={<MdPeople />}
        iconBg="bg-orange-100 dark:bg-orange-900/40"
        iconColor="text-orange-600 dark:text-orange-400"
      />

      {/* OCCUPIED ROOMS */}
      <StatCard
        title="Occupied Rooms"
        value={stats.occupiedRooms}
        subtitle="Currently Occupied"
        icon={<MdMeetingRoom />}
        iconBg="bg-red-100 dark:bg-red-900/40"
        iconColor="text-red-600 dark:text-red-400"
      />
    </div>
  );
}

export default DashboardStats;
