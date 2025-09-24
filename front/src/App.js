import Navbar from "./components/Navbar";
import { UserProvider } from "./contexts/UserContext";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Quotation from "./pages/Quotation";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <UserProvider>
      <ScrollToTop />
      <AnimatePresence mode="wait">
    App
        // <Routes location={location} key={location.pathname}>
        //   <Route path="/" element={<Navbar />}>
        //     <Route index element={<Home />} />
        //     <Route path="/contact" element={<Contact />} />
        //     <Route path="/about-us" element={<About />} />
        //     <Route path="/services" element={<Services />} />
        //     <Route path="/quotation" element={<Quotation />} />
        //   </Route>
        // </Routes>
      </AnimatePresence>
    </UserProvider>
  );
}

export default App;
