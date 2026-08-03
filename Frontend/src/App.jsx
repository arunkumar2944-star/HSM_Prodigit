import { BrowserRouter, Routes, Route } from "react-router-dom";

// common 

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
import AdminLayout from "./pages/admin/layout";
import AdminDashboard from "./pages/admin/adminDashboard";


// Hotel Manager
import HMLayout from "./pages/hotel_manager/layout";
import HMDashboard from "./pages/hotel_manager/hm_dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />

          <Route path="contactus" element={<ContactUs />} />

          <Route path="aboutus" element={<AboutUs />} />

          <Route path="hotels" element={<Hotel />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>
        {/* Hotel Manager Routes */}
        <Route path="/hotel-manager" element={<HMLayout />}>
          <Route index element={<HMDashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="change-password" element={<ChangePassword />} />
        </Route>

        {/* Default Routes */}
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;