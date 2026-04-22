import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AgeGate from "./components/AgeGate.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  const [verified, setVerified] = useState(false);
  const [gateGone, setGateGone] = useState(false);

  const handleVerify = () => {
    setVerified(true);
    setTimeout(() => setGateGone(true), 900);
  };

  return (
    <BrowserRouter>
      {!gateGone && (
        <AgeGate verified={verified} onVerify={handleVerify} />
      )}
      <Routes>
        <Route path="/"        element={<HomePage />} />
        <Route path="/about"   element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*"        element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
