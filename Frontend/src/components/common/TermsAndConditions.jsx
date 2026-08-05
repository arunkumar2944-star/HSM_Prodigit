import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFileContract,
  FaShieldAlt,
  FaLock,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

function TermsAndConditions({ accepted, setAccepted }) {
  const [showTerms, setShowTerms] = useState(false);

  return (
    <div className="mt-8">
      {/* Card */}
      <div className="rounded-3xl overflow-hidden border border-amber-200 shadow-xl bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-6 text-white">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
              <FaFileContract className="text-3xl" />
            </div>

            <div>
              <h2 className="text-2xl font-bold">Terms & Conditions</h2>

              <p className="text-amber-100 mt-1">
                Please read and accept before registering your hotel.
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="rounded-2xl bg-amber-50 p-5 border border-amber-100">
              <FaShieldAlt className="text-amber-500 text-3xl mb-3" />

              <h3 className="font-bold text-gray-800">Secure Platform</h3>

              <p className="text-sm text-gray-600 mt-2">
                Your hotel information is encrypted and securely stored.
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-5 border border-orange-100">
              <FaLock className="text-orange-500 text-3xl mb-3" />

              <h3 className="font-bold text-gray-800">Privacy Protected</h3>

              <p className="text-sm text-gray-600 mt-2">
                Personal information will never be shared without permission.
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-5 border border-green-100">
              <FaCheckCircle className="text-green-500 text-3xl mb-3" />

              <h3 className="font-bold text-gray-800">Verified Hotels</h3>

              <p className="text-sm text-gray-600 mt-2">
                Only genuine hotels are approved after verification.
              </p>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            type="button"
            onClick={() => setShowTerms(!showTerms)}
            className="w-full h-14 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:scale-[1.02] transition"
          >
            {showTerms ? "Hide Terms & Conditions" : "Read Terms & Conditions"}
          </button>

          {/* Terms */}
          {showTerms && (
            <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-6 max-h-72 overflow-y-auto">
              <ol className="space-y-4 list-decimal list-inside text-gray-700">
                <li>
                  All hotel information provided must be accurate and genuine.
                </li>

                <li>
                  The hotel owner is responsible for maintaining updated
                  business information.
                </li>

                <li>
                  Hotel managers must not share login credentials with
                  unauthorized persons.
                </li>

                <li>
                  Fake registrations, fraudulent bookings, or misuse of the
                  platform may result in permanent account suspension.
                </li>

                <li>
                  Customer information must be handled confidentially according
                  to applicable privacy laws.
                </li>

                <li>
                  Uploaded hotel logos and images should belong to the
                  registered hotel.
                </li>

                <li>
                  The platform reserves the right to review and verify hotel
                  information before activation.
                </li>

                <li>
                  Any violation of platform policies may lead to account
                  termination without prior notice.
                </li>

                <li>
                  Hotel owners are responsible for all activities performed
                  using their accounts.
                </li>

                <li>
                  By registering, you agree to comply with all current and
                  future platform policies.
                </li>
              </ol>
            </div>
          )}

          {/* Checkbox
          <label className="mt-6 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 cursor-pointer">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-1 h-5 w-5 accent-amber-500"
            />

            <span className="text-gray-700 leading-7">
              I have carefully read and understood the
              <span className="font-bold text-amber-600">
                {" "}
                Terms & Conditions
              </span>{" "}
              and
              <span className="font-bold text-amber-600"> Privacy Policy</span>.
              I agree to follow all platform rules while using the Hotel
              Management System.
            </span>
          </label> */}

          {/* Back Button */}
          <div className="mt-6">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-xl transition"
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

export default TermsAndConditions;
