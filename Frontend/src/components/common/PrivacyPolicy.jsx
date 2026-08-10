import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaLock,
  FaDatabase,
  FaUserShield,
  FaEnvelope,
  FaArrowLeft,
} from "react-icons/fa";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-amber-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-10">
          <h1 className="text-4xl font-bold">
            Privacy Policy
          </h1>

          <p className="mt-3 text-amber-100">
            Your privacy is important to us. This policy explains how we
            collect, use and protect your information.
          </p>
        </div>

        {/* Content */}
        <div className="p-10 space-y-10">

          <section className="flex gap-5">
            <FaDatabase className="text-amber-500 text-3xl mt-1" />

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Information We Collect
              </h2>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Hotel Name and Category</li>
                <li>Owner Information</li>
                <li>Manager Information</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Hotel Address</li>
                <li>Uploaded Hotel Logo</li>
              </ul>
            </div>
          </section>

          <section className="flex gap-5">
            <FaShieldAlt className="text-amber-500 text-3xl mt-1" />

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                How We Use Your Information
              </h2>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Register your hotel account.</li>
                <li>Authenticate users securely.</li>
                <li>Manage hotel bookings.</li>
                <li>Provide customer support.</li>
                <li>Improve our hotel management services.</li>
              </ul>
            </div>
          </section>

          <section className="flex gap-5">
            <FaLock className="text-amber-500 text-3xl mt-1" />

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Data Security
              </h2>

              <p className="text-gray-600 leading-8">
                We use secure authentication, encrypted passwords (bcrypt),
                JSON Web Tokens (JWT), and industry-standard security practices
                to protect your personal information from unauthorized access.
              </p>
            </div>
          </section>

          <section className="flex gap-5">
            <FaUserShield className="text-amber-500 text-3xl mt-1" />

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                User Rights
              </h2>

              <ul className="list-disc ml-6 text-gray-600 space-y-2">
                <li>Access your personal information.</li>
                <li>Update incorrect information.</li>
                <li>Request account deletion.</li>
                <li>Change your password anytime.</li>
              </ul>
            </div>
          </section>

          <section className="flex gap-5">
            <FaEnvelope className="text-amber-500 text-3xl mt-1" />

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Contact Us
              </h2>

              <p className="text-gray-600 leading-8">
                If you have any questions regarding this Privacy Policy,
                please contact the Hotel Management System Administrator.
              </p>
            </div>
          </section>

          <div className="border-t pt-8 flex justify-between items-center">

            <p className="text-sm text-gray-500">
              Last Updated: August 2026
            </p>

            <Link
              to="/signup"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl transition"
            >
              <FaArrowLeft />
              Back to Signup
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;