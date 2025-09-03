import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar"; // 👈 new
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { MenuProvider } from "./MenuContext";

function App() {
  return (
    <Router>
      <MenuProvider>
        <ScrollToTop /> {/* 👈 ensures top scroll on navigation */}
        {/* Desktop Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        {/* Mobile Navbar */}
        <div className="block md:hidden">
          <MobileNavbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MenuProvider>
    </Router>
  );
}

export default App;
