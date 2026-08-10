import { useEffect, useMemo, useState } from "react";
import API from "../../api/axios";

import {
  FaHotel,
  FaCheck,
  FaTimes,
  FaBan,
  FaPowerOff,
  FaSearch,
  FaSync,
  FaClock,
} from "react-icons/fa";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      setLoading(true);

      const response = await API.get("/admin/hotels");

      setHotels(response.data.hotels || []);
    } catch (error) {
      console.log("Hotel Load Error", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const response = await API.put(`/admin/hotels/${status}/${id}`);

      alert(response.data.message);

      fetchHotels();
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Status update failed");
    }
  };

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const text = `
        ${hotel.hotelName || ""}
        ${hotel.ownerName || ""}
        ${hotel.hotelEmail || ""}
        ${hotel.hotelPhone || ""}
        ${hotel.city || ""}
      `.toLowerCase();

      const matchesSearch = text.includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || hotel.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [hotels, search, statusFilter]);

  const approved = hotels.filter((hotel) => hotel.status === "Approved").length;

  const pending = hotels.filter((hotel) => hotel.status === "Pending").length;

  const rejected = hotels.filter((hotel) => hotel.status === "Rejected").length;

  const blocked = hotels.filter((hotel) => hotel.status === "Blocked").length;

  const statusBadge = (status) => {
    if (status === "Approved") {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
          <FaCheck />
          Approved
        </span>
      );
    }

    if (status === "Rejected") {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
          <FaTimes />
          Rejected
        </span>
      );
    }

    if (status === "Blocked") {
      return (
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">
          <FaBan />
          Blocked
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
        <FaClock />
        Pending
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div
              className="
              w-11 h-11
              rounded-xl
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
            "
            >
              <FaHotel />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hotel Management
              </h1>

              <p className="text-gray-500 dark:text-gray-400">
                Manage hotel registrations, approvals and access
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={fetchHotels}
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
            transition
          "
        >
          <FaSync />
          Refresh
        </button>
      </div>

      {/* STAT CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          className="
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-800
          rounded-2xl
          p-5
          shadow-sm
        "
        >
          <p className="text-sm text-gray-500">Total Hotels</p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
            {hotels.length}
          </h2>

          <p className="text-xs text-gray-400 mt-2">Registered hotels</p>
        </div>

        <div
          className="
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-800
          rounded-2xl
          p-5
          shadow-sm
        "
        >
          <p className="text-sm text-gray-500">Approved</p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">{approved}</h2>

          <p className="text-xs text-gray-400 mt-2">Active hotels</p>
        </div>

        <div
          className="
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-800
          rounded-2xl
          p-5
          shadow-sm
        "
        >
          <p className="text-sm text-gray-500">Pending</p>

          <h2 className="text-3xl font-bold text-orange-500 mt-2">{pending}</h2>

          <p className="text-xs text-gray-400 mt-2">Awaiting approval</p>
        </div>

        <div
          className="
          bg-white dark:bg-gray-900
          border border-gray-200 dark:border-gray-800
          rounded-2xl
          p-5
          shadow-sm
        "
        >
          <p className="text-sm text-gray-500">Blocked</p>

          <h2 className="text-3xl font-bold text-red-600 mt-2">
            {blocked + rejected}
          </h2>

          <p className="text-xs text-gray-400 mt-2">Restricted hotels</p>
        </div>
      </div>

      {/* TABLE CARD */}

      <div
        className="
        bg-white dark:bg-gray-900
        rounded-2xl
        shadow-sm
        border border-gray-200 dark:border-gray-800
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
              placeholder="Search hotels, owner, email..."
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

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
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
            <option value="All">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
            <option value="Blocked">Blocked</option>
          </select>
        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead
              className="
              bg-gray-50
              dark:bg-gray-800/70
              text-gray-500
              dark:text-gray-300
              text-xs
              uppercase
            "
            >
              <tr>
                <th className="p-4 text-left">Hotel</th>

                <th className="p-4 text-left">Owner</th>

                <th className="p-4 text-left">Contact</th>

                <th className="p-4 text-left">Status</th>

                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" className="p-12 text-center text-gray-500">
                    Loading hotels...
                  </td>
                </tr>
              ) : filteredHotels.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-12 text-center text-gray-500">
                    No hotels found
                  </td>
                </tr>
              ) : (
                filteredHotels.map((hotel) => (
                  <tr
                    key={hotel.id}
                    className="
                      border-b
                      border-gray-100
                      dark:border-gray-800
                      hover:bg-gray-50
                      dark:hover:bg-gray-800/50
                      transition
                    "
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="
                          w-10 h-10
                          rounded-lg
                          bg-blue-50
                          dark:bg-blue-900/30
                          text-blue-600
                          flex
                          items-center
                          justify-center
                        "
                        >
                          <FaHotel />
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {hotel.hotelName}
                          </p>

                          <p className="text-xs text-gray-400">
                            {hotel.city || "Location unavailable"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4">
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        {hotel.ownerName || "-"}
                      </p>
                    </td>

                    <td className="p-4">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {hotel.hotelEmail}
                      </p>

                      <p className="text-xs text-gray-400 mt-1">
                        {hotel.hotelPhone || "-"}
                      </p>
                    </td>

                    <td className="p-4">{statusBadge(hotel.status)}</td>

                    <td className="p-4">
                      <div className="flex justify-center gap-2">
                        <button
                          title="Approve"
                          onClick={() => updateStatus(hotel.id, "approve")}
                          className="
                            bg-green-500
                            hover:bg-green-600
                            text-white
                            p-2
                            rounded-lg
                            transition
                          "
                        >
                          <FaCheck />
                        </button>

                        <button
                          title="Reject"
                          onClick={() => updateStatus(hotel.id, "reject")}
                          className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            p-2
                            rounded-lg
                            transition
                          "
                        >
                          <FaTimes />
                        </button>

                        <button
                          title="Block"
                          onClick={() => updateStatus(hotel.id, "block")}
                          className="
                            bg-gray-700
                            hover:bg-gray-800
                            text-white
                            p-2
                            rounded-lg
                            transition
                          "
                        >
                          <FaBan />
                        </button>

                        <button
                          title="Deactivate"
                          onClick={() => updateStatus(hotel.id, "deactivate")}
                          className="
                            bg-orange-500
                            hover:bg-orange-600
                            text-white
                            p-2
                            rounded-lg
                            transition
                          "
                        >
                          <FaPowerOff />
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

export default Hotels;
