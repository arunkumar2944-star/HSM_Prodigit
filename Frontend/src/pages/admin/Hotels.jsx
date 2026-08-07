import { useEffect, useState } from "react";

import API from "../../api/axios";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  const [loading, setLoading] = useState(true);

  // ==============================
  // LOAD HOTELS
  // ==============================

  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    try {
      const response = await API.get("/admin/hotels");

      setHotels(response.data.hotels);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // APPROVE HOTEL
  // ==============================

  const approveHotel = async (id) => {
    try {
      await API.put(`/admin/hotels/approve/${id}`);

      getHotels();
    } catch (error) {
      console.log(error);
    }
  };

  // ==============================
  // REJECT HOTEL
  // ==============================

  const rejectHotel = async (id) => {
    try {
      await API.put(`/admin/hotels/reject/${id}`);

      getHotels();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1
        className="
text-3xl
font-bold
text-gray-800
mb-6
"
      >
        Hotel Management
      </h1>

      <div
        className="
bg-white
shadow
rounded-xl
overflow-hidden
"
      >
        <table
          className="
w-full
text-left
"
        >
          <thead
            className="
bg-gray-100
"
          >
            <tr>
              <th className="p-4">Hotel Name</th>

              <th className="p-4">Owner</th>

              <th className="p-4">Email</th>

              <th className="p-4">Phone</th>

              <th className="p-4">Status</th>

              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="p-5 text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              hotels.map((hotel) => (
                <tr key={hotel.HotelID} className="border-b">
                  <td className="p-4">{hotel.HotelName}</td>

                  <td className="p-4">{hotel.OwnerName}</td>

                  <td className="p-4">{hotel.Email}</td>

                  <td className="p-4">{hotel.Phone}</td>

                  <td className="p-4">
                    <span
                      className={`
px-3 py-1 rounded-full text-sm

${
  hotel.Status === "Approved"
    ? "bg-green-100 text-green-700"
    : hotel.Status === "Rejected"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700"
}

`}
                    >
                      {hotel.Status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-3">
                    <button
                      onClick={() => approveHotel(hotel.HotelID)}
                      className="
bg-green-600
text-white
px-3
py-1
rounded
"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() => rejectHotel(hotel.HotelID)}
                      className="
bg-red-600
text-white
px-3
py-1
rounded
"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hotels;
