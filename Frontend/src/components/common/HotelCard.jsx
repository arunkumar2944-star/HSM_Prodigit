import { useSelector } from "react-redux";
import HotelCard from "../../components/customer/HotelCard";

function Hotels() {

  const hotels = useSelector((state) => state.hotel.hotels);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
        />
      ))}

    </div>
  );
}

export default Hotels;