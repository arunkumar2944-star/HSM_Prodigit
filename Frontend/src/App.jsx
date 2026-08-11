import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

// Common
import Profile from "./pages/auth/profile";
import ChangePassword from "./pages/auth/changePassword";
import EditProfile from "./pages/auth/edit-profile";

// Landing Pages
import HomeLayout from "./pages/Landing/HomeLayout";
import Home from "./pages/Landing/Home";
import ContactUs from "./pages/Landing/ContactUs";
import AboutUs from "./pages/landing/AboutUs";
import Hotel from "./pages/Landing/Hotels";

// Authentication
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// Admin
import AdminLayout from "./Layouts/AdminLayout";
import AdminDashboard from "./pages/admin/adminDashboard";
import Hotels from "./pages/admin/Hotels";
import Users from "./pages/admin/Users";
// import AdminSettings from "./pages/admin/AdminSettings";

// Hotel Manager
import HMLayout from "./pages/hotel_manager/layout";
import HMDashboard from "./pages/hotel_manager/hm_dashboard";
import CustomerLayout from "./pages/customer/Layout";
import CustomerDashboard from "./pages/customer/dashboard";

// Terms & Privacy
import TermsAndConditions from "./components/common/TermsAndConditions";
import PrivacyPolicy from "./components/common/PrivacyPolicy";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      /*
      dispatch(
        login({
          user: JSON.parse(user),
          token,
        })
      );
      */
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/* =========================
            LANDING PAGES
        ========================== */}

        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="hotels" element={<Hotel />} />

        </Route>

        {/* =========================
            AUTHENTICATION
        ========================== */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* =========================
            TERMS & PRIVACY
        ========================== */}

        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* =========================
            ADMIN
        ========================== */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />

          <Route path="profile" element={<Profile />} />

          <Route path="edit-profile" element={<EditProfile />} />

          <Route path="change-password" element={<ChangePassword />} />

          <Route path="hotels" element={<Hotels />} />

          <Route path="users" element={<Users />} />

          {/* <Route path="settings" element={<AdminSettings />} /> */}
        </Route>

        {/* =========================
            HOTEL MANAGER
        ========================== */}

        <Route path="/hotel-manager" element={<HMLayout />}>
          <Route index element={<HMDashboard />} />

          <Route path="profile" element={<Profile />} />

          <Route path="edit-profile" element={<EditProfile />} />

          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        

        {/* =========================
            404
        ========================== */}

        <Route
          path="*"
          element={
            <h1 className="text-3xl font-bold p-10">404 - Page Not Found</h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
