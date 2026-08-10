import { useEffect, useState } from "react";
import API from "../../api/axios";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  const [hotels, setHotels] = useState([]);

  const [loading, setLoading] = useState(true);

  const [room, setRoom] = useState({
    hotel_id: "",
    room_number: "",
    room_type: "",
    price: "",
  });

  useEffect(() => {
    getRooms();

    getHotels();
  }, []);

  // ==============================
  // GET ROOMS
  // ==============================

  const getRooms = async () => {
    try {
      const response = await API.get("/admin/rooms");

      setRooms(response.data.rooms);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ==============================
  // GET HOTELS
  // ==============================

  const getHotels = async () => {
    try {
      const response = await API.get("/admin/hotels");

      setHotels(response.data.hotels);
    } catch (error) {
      console.log(error);
    }
  };

  // ==============================
  // INPUT CHANGE
  // ==============================

  const handleChange = (e) => {
    setRoom({
      ...room,

      [e.target.name]: e.target.value,
    });
  };

  // ==============================
  // ADD ROOM
  // ==============================

  const addRoom = async (e) => {
    e.preventDefault();

    try {
      await API.post("/admin/rooms/add", room);

      alert("Room Added");

      setRoom({
        hotel_id: "",
        room_number: "",
        room_type: "",
        price: "",
      });

      getRooms();
    } catch (error) {
      console.log(error);
    }
  };

  // ==============================
  // DELETE ROOM
  // ==============================

  const deleteRoom = async (id) => {
    try {
      await API.delete(`/admin/rooms/${id}`);

      getRooms();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Room Management</h1>

      {/* ADD ROOM FORM */}

      <div
        className="
                bg-white
                shadow
                rounded-xl
                p-5
                mb-6
            "
      >
        <h2 className="text-xl font-semibold mb-4">Add New Room</h2>

        <form onSubmit={addRoom} className="grid grid-cols-4 gap-4">
          <select
            name="hotel_id"
            value={room.hotel_id}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="">Select Hotel</option>

            {hotels.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.hotelName}
              </option>
            ))}
          </select>

          <input
            name="room_number"
            placeholder="Room Number"
            value={room.room_number}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            name="room_type"
            placeholder="Room Type"
            value={room.room_type}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <input
            name="price"
            placeholder="Price"
            value={room.price}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          <button
            className="
                    bg-blue-600
                    text-white
                    rounded
                    px-4
                    py-2
                    "
          >
            Add Room
          </button>
        </form>
      </div>

      {/* ROOM TABLE */}

      <div
        className="
                bg-white
                shadow
                rounded-xl
                overflow-hidden
            "
      >
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Hotel</th>

              <th className="p-3">Room No</th>

              <th className="p-3">Type</th>

              <th className="p-3">Price</th>

              <th className="p-3">Status</th>

              <th className="p-3">Action</th>
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
              rooms.map((room) => (
                <tr key={room.id} className="border-b">
                  <td className="p-3">{room.hotelName}</td>

                  <td className="p-3">{room.room_number}</td>

                  <td className="p-3">{room.room_type}</td>

                  <td className="p-3">₹{room.price}</td>

                  <td className="p-3">{room.status}</td>

                  <td className="p-3">
                    <button
                      onClick={() => deleteRoom(room.id)}
                      className="
                                bg-red-600
                                text-white
                                px-3
                                py-1
                                rounded
                                "
                    >
                      Delete
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

export default Rooms;
