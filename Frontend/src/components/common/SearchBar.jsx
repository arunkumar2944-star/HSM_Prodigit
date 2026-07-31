import { FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <section className="relative mt-0 z-20 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

          {/* Destination */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Destination
            </label>

            <div className="flex items-center border rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
              <FaMapMarkerAlt className="text-amber-500 mr-3" />

              <input
                type="text"
                placeholder="Where are you going?"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Check In */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Check In
            </label>

            <div className="flex items-center border rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
              <FaCalendarAlt className="text-amber-500 mr-3" />

              <input
                type="date"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Check Out */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Check Out
            </label>

            <div className="flex items-center border rounded-xl px-4 h-14 focus-within:ring-2 focus-within:ring-amber-400">
              <FaCalendarAlt className="text-amber-500 mr-3" />

              <input
                type="date"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Guests
            </label>

            <div className="flex items-center border rounded-xl px-4 h-14">
              <FaUsers className="text-amber-500 mr-3" />

              <select className="w-full outline-none bg-transparent">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button className="w-full h-14 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl">
              <FaSearch />
              Search Hotels
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default SearchBar;