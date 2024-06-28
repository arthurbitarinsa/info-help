import React from "react";
import Home from "./components/Home";
import Medication from "./components/Medication";
import Food from "./components/Food";
import Hygiene from "./components/Hygiene";
import Accomodation from "./components/Accomodation";
import Legal from "./components/Legal";
import Language from "./components/Language";
import Psychology from "./components/Psychology";
import Education from "./components/Education";
import Scholarships from "./components/Scholarships";
import Social from "./components/Social";
import Sports from "./components/Sports";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/food" element={<Food />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/Hygiene" element={<Hygiene />} />
        <Route path="/legal&safety" element={<Legal />} />
        <Route path="/language" element={<Language />} />
        <Route path="/psychology" element={<Psychology />} />
        <Route path="/education" element={<Education />} />
        <Route path="/scolarships" element={<Scholarships />} />
        <Route path="/social" element={<Social />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
    </Router>
  );
};

export default App;
