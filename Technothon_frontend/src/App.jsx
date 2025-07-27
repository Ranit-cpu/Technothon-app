import Head from "./components/Head";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import TeamRegistration from "./pages/TeamReg";
import UserDashboard from "./pages/UserDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AdminDashboard from "./pages/AdminDashboard";
import PaymentPage from "./pages/PaymentPage";
import AboutUs from "./pages/About";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen">
         
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team-registration" element={<TeamRegistration />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<RegisterPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
