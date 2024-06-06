import { Route, Routes } from "react-router-dom";
import './App.css'

import { 
  Auth,
  Daily,
  Finder,
  Home,
  Membership,
  Themes, 
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/finder" element={<Finder />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/themes" element={<Themes />} />
    </Routes>
  )
}

export default App
