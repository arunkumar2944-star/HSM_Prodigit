import {
  FaHotel,
  FaShieldAlt,
  FaTags,
  FaHeadset,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaHotel size={36} />,
      title: "Luxury Hotels",
      description:
        "Stay in premium hotels with world-class amenities, elegant rooms, and exceptional hospitality.",
    },
    {
      icon: <FaShieldAlt size={36} />,
      title: "Secure Booking",
      description:
        "Book with confidence using our secure reservation and encrypted payment system.",
    },
    {
      icon: <FaTags size={36} />,
      title: "Best Price Guarantee",
      description:
        "Enjoy exclusive hotel deals, seasonal discounts, and the best value for your stay.",
    },
    {
      icon: <FaHeadset size={36} />,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available anytime to assist you before and during your trip.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-amber-500 font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-800">
            Experience Comfort Like Never Before
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            We make hotel booking simple, secure, and affordable with premium
            accommodations and outstanding customer service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-100 shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-gray-800">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-500 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Features;