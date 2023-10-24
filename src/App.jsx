import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";
import { Footer } from "./components/Footer";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Terms from "./pages/Terms";
import Career from "./pages/Career";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/career" element={<Career />} />
        <Route path="*" element={"Page not found"} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
