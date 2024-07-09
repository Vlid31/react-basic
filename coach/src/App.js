import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import "./styles/App.css";

function App() {
return(
  <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App;