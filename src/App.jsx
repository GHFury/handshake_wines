import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AgeGate from "./components/AgeGate.jsx";
import HomePage      from "./themes/vinifera/HomePage.jsx";
import AboutPage     from "./themes/vinifera/AboutPage.jsx";
import ContactPage   from "./themes/vinifera/ContactPage.jsx";
import TeamPage      from "./themes/vinifera/TeamPage.jsx";
import ProducersPage from "./themes/vinifera/ProducersPage.jsx";

export default function App() {
  const [verified, setVerified] = useState(false);
  const [gateGone, setGateGone] = useState(false);
  const handleVerify = () => { setVerified(true); setTimeout(() => setGateGone(true), 900); };

  return (
    <BrowserRouter>
      {!gateGone && <AgeGate verified={verified} onVerify={handleVerify} />}
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/about"      element={<AboutPage />} />
        <Route path="/contact"    element={<ContactPage />} />
        <Route path="/team"       element={<TeamPage />} />
        <Route path="/producers"  element={<ProducersPage />} />
        <Route path="*"           element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
