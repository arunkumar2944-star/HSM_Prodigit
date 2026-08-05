import {
  MdHotel,
  MdBedroomParent,
  MdBookOnline,
  MdPeople,
  MdAttachMoney,
  MdMeetingRoom,
} from "react-icons/md";

import StatCard from "./StatsCard";

function DashboardStats() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">

      <StatCard
        title="Total Hotels"
        value="15"
        subtitle="+2 New Hotels"
        icon={<MdHotel />}
        iconBg="bg-blue-100"
        iconColor="text-blue-600"
      />

      <StatCard
        title="Total Rooms"
        value="286"
        subtitle="32 Available"
        icon={<MdBedroomParent />}
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />

      <StatCard
        title="Bookings"
        value="1,248"
        subtitle="+15 Today"
        icon={<MdBookOnline />}
        iconBg="bg-green-100"
        iconColor="text-green-600"
      />

      <StatCard
        title="Customers"
        value="642"
        subtitle="+12 New"
        icon={<MdPeople />}
        iconBg="bg-orange-100"
        iconColor="text-orange-600"
      />

      <StatCard
        title="Revenue"
        value="₹12,45,600"
        subtitle="+18% This Month"
        icon={<MdAttachMoney />}
        iconBg="bg-emerald-100"
        iconColor="text-emerald-600"
      />

      <StatCard
        title="Occupied Rooms"
        value="254"
        subtitle="89% Occupancy"
        icon={<MdMeetingRoom />}
        iconBg="bg-red-100"
        iconColor="text-red-600"
      />

    </div>
  );
}

export default DashboardStats;