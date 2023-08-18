import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import MediaQuery from "react-responsive";

import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <div className="main-container">
          <NavBar />
          <div className="route-bar">
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <MediaQuery minWidth={415}>
          {(matches) => matches && <ToastContainer autoClose={2000} transition={Zoom} theme="dark" />}
        </MediaQuery>
      </BrowserRouter>
    </div>
  );
}

export default App;
