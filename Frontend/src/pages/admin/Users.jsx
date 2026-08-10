import { useEffect, useMemo, useState } from "react";
import API from "../../api/axios";

import {
  FaUserCheck,
  FaUserSlash,
  FaBan,
  FaTrash,
  FaUsers,
  FaSearch,
  FaSync,
  FaUserTie,
} from "react-icons/fa";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  useEffect(() => {
    getUsers();
  }, []);

  // =========================
  // GET USERS
  // =========================
  const getUsers = async () => {
    try {
      setLoading(true);

      const response = await API.get("/admin/users");

      setUsers(response.data.users || []);
    } catch (error) {
      console.log("Users Load Error", error);

      alert(error.response?.data?.message || "Unable to load users");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // USER ACTION
  // =========================
  const action = async (url) => {
    try {
      const response = await API.put(url);

      alert(response.data.message);

      getUsers();
    } catch (error) {
      console.log("User Action Error", error);

      alert(error.response?.data?.message || "Action failed");
    }
  };

  // =========================
  // DELETE USER
  // =========================
  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user permanently?")) {
      return;
    }

    try {
      const response = await API.delete(`/admin/users/${id}`);

      alert(response.data.message);

      getUsers();
    } catch (error) {
      console.log("Delete User Error", error);

      alert(error.response?.data?.message || "Delete failed");
    }
  };

  // =========================
  // ROLE NORMALIZER
  // =========================
  const normalizeRole = (role) => {
    return String(role || "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/_/g, "");
  };

  // =========================
  // FILTER USERS
  // =========================
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const fullText = `
        ${user.UserID || ""}
        ${user.FirstName || ""}
        ${user.LastName || ""}
        ${user.Email || ""}
        ${user.Phone || ""}
        ${user.Role || ""}
        ${user.hotelName || ""}
      `.toLowerCase();

      const matchesSearch = fullText.includes(search.toLowerCase());

      const userRole = normalizeRole(user.Role);

      let matchesRole = true;

      if (roleFilter !== "All") {
        if (roleFilter === "Admin") {
          matchesRole = userRole === "admin";
        }

        if (roleFilter === "HotelManager") {
          matchesRole = userRole === "hotelmanager" || userRole === "manager";
        }

        if (roleFilter === "Receptionist") {
          matchesRole =
            userRole === "receptionist" || userRole === "hotelreceptionist";
        }

        if (roleFilter === "Customer") {
          matchesRole = userRole === "customer"||userRole === "Customer";
        }

        if (roleFilter === "Staff") {
          matchesRole = userRole === "staff";
        }
      }

      return matchesSearch && matchesRole;
    });
  }, [users, search, roleFilter]);

  // =========================
  // STATISTICS
  // =========================

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.IsActive === true || user.IsActive === 1,
  ).length;

  const blockedUsers = users.filter(
    (user) => !(user.IsActive === true || user.IsActive === 1),
  ).length;

  const managers = users.filter((user) => {
    const role = normalizeRole(user.Role);

    return role === "hotelmanager" || role === "manager";
  }).length;

  const customers = users.filter((user) => {
    return normalizeRole(user.Role) === "customer";
  }).length;

  const receptionists = users.filter((user) => {
    const role = normalizeRole(user.Role);

    return role === "receptionist" || role === "hotelreceptionist";
  }).length;

  return (
    <div className="space-y-6">
      {/* =========================
          HEADER
      ========================= */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
        "
      >
        <div>
          <div className="flex items-center gap-3">
            <div
              className="
                w-11
                h-11
                rounded-xl
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
              "
            >
              <FaUsers />
            </div>

            <div>
              <h1
                className="
                  text-3xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                User Management
              </h1>

              <p
                className="
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Manage customers, managers, receptionists and staff accounts
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={getUsers}
          className="
            flex
            items-center
            justify-center
            gap-2
            px-4
            py-2.5
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-700
            rounded-xl
            text-gray-700
            dark:text-gray-200
            hover:bg-gray-50
            dark:hover:bg-gray-800
          "
        >
          <FaSync />
          Refresh
        </button>
      </div>

      {/* =========================
          STAT CARDS
      ========================= */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-5
          gap-4
        "
      >
        {/* TOTAL USERS */}
        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <p className="text-sm text-gray-500">Total Users</p>

          <h2
            className="
              text-3xl
              font-bold
              text-gray-900
              dark:text-white
              mt-2
            "
          >
            {totalUsers}
          </h2>

          <p className="text-xs text-gray-400 mt-2">Registered accounts</p>
        </div>

        {/* ACTIVE USERS */}
        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <p className="text-sm text-gray-500">Active Users</p>

          <h2
            className="
              text-3xl
              font-bold
              text-green-600
              mt-2
            "
          >
            {activeUsers}
          </h2>

          <p className="text-xs text-gray-400 mt-2">Currently active</p>
        </div>

        {/* HOTEL MANAGERS */}
        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <p className="text-sm text-gray-500">Hotel Managers</p>

          <h2
            className="
              text-3xl
              font-bold
              text-blue-600
              mt-2
            "
          >
            {managers}
          </h2>

          <p className="text-xs text-gray-400 mt-2">Hotel manager accounts</p>
        </div>

        {/* RECEPTIONISTS */}
        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">Receptionists</p>

            <FaUserTie className="text-orange-500" />
          </div>

          <h2
            className="
              text-3xl
              font-bold
              text-orange-500
              mt-2
            "
          >
            {receptionists}
          </h2>

          <p className="text-xs text-gray-400 mt-2">
            Hotel receptionist accounts
          </p>
        </div>

        {/* CUSTOMERS */}
        <div
          className="
            bg-white
            dark:bg-gray-900
            border
            border-gray-200
            dark:border-gray-800
            rounded-2xl
            p-5
            shadow-sm
          "
        >
          <p className="text-sm text-gray-500">Customers</p>

          <h2
            className="
              text-3xl
              font-bold
              text-purple-600
              mt-2
            "
          >
            {customers}
          </h2>

          <p className="text-xs text-gray-400 mt-2">Customer accounts</p>
        </div>
      </div>

      {/* =========================
          USERS TABLE
      ========================= */}
      <div
        className="
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-sm
          border
          border-gray-200
          dark:border-gray-800
          overflow-hidden
        "
      >
        {/* TOOLBAR */}
        <div
          className="
            p-5
            border-b
            border-gray-200
            dark:border-gray-800
            flex
            flex-col
            lg:flex-row
            gap-4
            justify-between
          "
        >
          {/* SEARCH */}
          <div
            className="
              relative
              w-full
              lg:max-w-md
            "
          >
            <FaSearch
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Search users, email, role, hotel..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                pl-11
                pr-4
                py-2.5
                rounded-xl
                border
                border-gray-200
                dark:border-gray-700
                bg-gray-50
                dark:bg-gray-800
                text-gray-800
                dark:text-white
                outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />
          </div>

          {/* ROLE FILTER */}
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="
              px-4
              py-2.5
              rounded-xl
              border
              border-gray-200
              dark:border-gray-700
              bg-gray-50
              dark:bg-gray-800
              text-gray-700
              dark:text-white
              outline-none
            "
          >
            <option value="All">All Roles</option>

            <option value="Admin">Admin</option>

            <option value="HotelManager">Hotel Manager</option>

            <option value="Receptionist">Receptionist</option>

            <option value="Customer">Customer</option>

            <option value="Staff">Staff</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead
              className="
                bg-gray-50
                dark:bg-gray-800/70
                text-xs
                uppercase
                text-gray-500
                dark:text-gray-300
              "
            >
              <tr>
                <th className="p-4 text-left">ID</th>

                <th className="p-4 text-left">User</th>

                <th className="p-4 text-left">Contact</th>

                <th className="p-4 text-left">Role</th>

                <th className="p-4 text-left">Hotel</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan="7"
                    className="
                      p-12
                      text-center
                      text-gray-500
                    "
                  >
                    Loading users...
                  </td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="
                      p-12
                      text-center
                      text-gray-500
                    "
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr
                    key={user.UserID}
                    className="
                      border-b
                      border-gray-100
                      dark:border-gray-800
                      hover:bg-gray-50
                      dark:hover:bg-gray-800/50
                      transition
                    "
                  >
                    {/* ID */}
                    <td
                      className="
                        p-4
                        font-semibold
                        text-gray-500
                      "
                    >
                      #{user.UserID}
                    </td>

                    {/* USER */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                            w-10
                            h-10
                            rounded-full
                            bg-blue-100
                            dark:bg-blue-900/30
                            text-blue-600
                            flex
                            items-center
                            justify-center
                            font-bold
                          "
                        >
                          {(user.FirstName || "U").charAt(0).toUpperCase()}
                        </div>

                        <div>
                          <p
                            className="
                              font-semibold
                              text-gray-900
                              dark:text-white
                            "
                          >
                            {user.FirstName} {user.LastName}
                          </p>

                          <p className="text-xs text-gray-400">User Account</p>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="p-4">
                      <p
                        className="
                          text-sm
                          text-gray-700
                          dark:text-gray-300
                        "
                      >
                        {user.Email}
                      </p>

                      <p className="text-xs text-gray-400 mt-1">
                        {user.Phone || "-"}
                      </p>
                    </td>

                    {/* ROLE */}
                    <td className="p-4">
                      <span
                        className="
                          inline-flex
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          bg-blue-100
                          text-blue-700
                        "
                      >
                        {user.Role}
                      </span>
                    </td>

                    {/* HOTEL */}
                    <td className="p-4">
                      {user.hotelName ? (
                        <span
                          className="
                            text-sm
                            text-gray-700
                            dark:text-gray-300
                          "
                        >
                          {user.hotelName}
                        </span>
                      ) : (
                        <span
                          className="
                            text-sm
                            text-gray-400
                          "
                        >
                          Normal User
                        </span>
                      )}
                    </td>

                    {/* STATUS */}
                    <td className="p-4">
                      {user.IsActive === true || user.IsActive === 1 ? (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-semibold
                            bg-green-100
                            text-green-700
                          "
                        >
                          <FaUserCheck />
                          Active
                        </span>
                      ) : (
                        <span
                          className="
                            inline-flex
                            items-center
                            gap-1
                            px-3
                            py-1
                            rounded-full
                            text-xs
                            font-semibold
                            bg-red-100
                            text-red-700
                          "
                        >
                          <FaUserSlash />
                          Blocked
                        </span>
                      )}
                    </td>

                    {/* ACTIONS */}
                    <td className="p-4">
                      <div
                        className="
                          flex
                          justify-center
                          gap-2
                        "
                      >
                        {/* ACTIVATE */}
                        <button
                          title="Activate"
                          onClick={() =>
                            action(`/admin/users/activate/${user.UserID}`)
                          }
                          className="
                            bg-green-500
                            hover:bg-green-600
                            text-white
                            p-2
                            rounded-lg
                          "
                        >
                          <FaUserCheck />
                        </button>

                        {/* DEACTIVATE */}
                        <button
                          title="Deactivate"
                          onClick={() =>
                            action(`/admin/users/deactivate/${user.UserID}`)
                          }
                          className="
                            bg-yellow-500
                            hover:bg-yellow-600
                            text-white
                            p-2
                            rounded-lg
                          "
                        >
                          <FaUserSlash />
                        </button>

                        {/* BLOCK */}
                        <button
                          title="Block"
                          onClick={() =>
                            action(`/admin/users/block/${user.UserID}`)
                          }
                          className="
                            bg-gray-700
                            hover:bg-gray-800
                            text-white
                            p-2
                            rounded-lg
                          "
                        >
                          <FaBan />
                        </button>

                        {/* DELETE */}
                        <button
                          title="Delete"
                          onClick={() => deleteUser(user.UserID)}
                          className="
                            bg-red-600
                            hover:bg-red-700
                            text-white
                            p-2
                            rounded-lg
                          "
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
