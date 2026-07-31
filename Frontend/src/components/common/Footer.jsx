import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-amber-400 mb-4">
              🏨 HotelMS
            </h2>

            <p className="text-gray-400 leading-7">
              Book luxury hotels, manage reservations, and enjoy a seamless
              hospitality experience with our modern Hotel Management System.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-amber-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/hotels" className="hover:text-amber-400 transition">
                  Hotels
                </Link>
              </li>

              <li>
                <Link to="/aboutus" className="hover:text-amber-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contactus"
                  className="hover:text-amber-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="hover:text-amber-400 transition">
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-amber-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-amber-400 transition">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/support"
                  className="hover:text-amber-400 transition"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Trichy, Tamil Nadu, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ support@hotelms.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-amber-500 flex items-center justify-center transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Hotel Management System. All Rights
            Reserved.
          </p>

          <p className="text-sm text-gray-500 mt-3 md:mt-0">
            Designed with ❤️ using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;