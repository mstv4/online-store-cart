import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

import "./styles/App.css";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
