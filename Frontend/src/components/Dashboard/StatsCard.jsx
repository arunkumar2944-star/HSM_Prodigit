import React from "react";

function StatCard({
  title,
  value,
  subtitle,
  icon,
  iconBg,
  iconColor,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            {value}
          </h2>

          <p className="text-sm text-green-600 mt-3">
            {subtitle}
          </p>
        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <span className={`text-3xl ${iconColor}`}>
            {icon}
          </span>
        </div>
      </div>
    </div>
  );
}

export default StatCard;