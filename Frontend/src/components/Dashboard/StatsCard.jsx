import React from "react";

function StatCard({ title, value, subtitle, icon, iconBg, iconColor }) {
  return (
    <div
      className="
        w-full
        rounded-2xl
        bg-white
        dark:bg-slate-800
        border
        border-gray-200
        dark:border-slate-700
        p-6
        shadow-sm
        dark:shadow-lg
        transition-all
        duration-300
        hover:shadow-md
        dark:hover:bg-slate-750
      "
    >
      <div className="flex items-center justify-between">
        {/* LEFT SIDE */}
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
            {value}
          </h2>

          <p className="text-sm text-green-600 dark:text-green-400 mt-3">
            {subtitle}
          </p>
        </div>

        {/* ICON */}
        <div
          className={`
            w-14
            h-14
            rounded-xl
            flex
            items-center
            justify-center
            ${iconBg}
          `}
        >
          <span className={`text-3xl ${iconColor}`}>{icon}</span>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
