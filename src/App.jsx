import { Routes, Route } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/pages/Dashboard";
import MyNutrition from "./components/pages/Mynutrition";
import TrackProgress from "./components/pages/trackprogress";
import ScanFood from "./components/pages/scanfood";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Mynutrition" element={<MyNutrition />} />
      <Route path="/progress" element={<TrackProgress />} />
      <Route path="/scan-food" element={<ScanFood />} />
    </Routes>
  
  );
}

export default App;
