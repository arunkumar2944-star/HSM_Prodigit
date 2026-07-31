import { BrowserRouter, Routes, Route } from "react-router-dom";
// Landing Pages
import HomeLayout from "./pages/Landing/HomeLayout";
import Home from "./pages/Landing/Home";
import ContactUs from "./pages/Landing/ContactUs";
import AboutUs from "./pages/landing/AboutUs";
import Hotel from "./pages/Landing/Hotels";

// Authentication
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;