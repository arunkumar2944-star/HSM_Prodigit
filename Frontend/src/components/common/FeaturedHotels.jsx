import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

function FeaturedHotels() {
  const hotels = [
    {
      id: 1,
      name: "Grand Palace",
      city: "Chennai",
      price: 4999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    },
    {
      id: 2,
      name: "Blue Moon",
      city: "Coimbatore",
      price: 3599,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
    },
    {
      id: 3,
      name: "Sea View Resort",
      city: "Goa",
      price: 6999,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    },
    {
      id: 4,
      name: "Mountain Retreat",
      city: "Ooty",
      price: 4299,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Featured Hotels
          </h2>

          <p className="mt-3 text-gray-500 text-lg">
            Discover the best hotels at the best prices.
          </p>
        </div>

        {/* Hotel Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-800">
                    {hotel.name}
                  </h3>

                  <span className="bg-amber-500 text-white px-2 py-1 rounded-lg text-sm font-semibold flex items-center gap-1">
                    <FaStar className="text-xs" />
                    {hotel.rating}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-3 text-gray-500">
                  <FaMapMarkerAlt className="text-amber-500" />
                  <span>{hotel.city}</span>
                </div>

                <div className="flex justify-between items-center mt-6">

                  <div>
                    <p className="text-2xl font-bold text-amber-500">
                      ₹{hotel.price}
                    </p>
                    <span className="text-gray-400 text-sm">
                      per night
                    </span>
                  </div>

                  <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg font-semibold transition">
                    Book Now
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default FeaturedHotels;