import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import MissingPage from "./components/MissingPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<MissingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
