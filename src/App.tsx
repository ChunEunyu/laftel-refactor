import { Route, Routes } from "react-router-dom";
import './App.css'

/*
import {
  Daily,
  Finder,
  Home,
  Themes,
} from "@/pages";
*/

import { Daily, Home, Finder, Themes } from "./pages";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/finder" element={<Finder />} />
      <Route path="/membership" element={<Themes />} />
    </Routes>
  )
}

export default App
