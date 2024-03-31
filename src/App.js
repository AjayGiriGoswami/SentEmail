import React from "react";
//Bootstrap Link
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header.js/Header";
import Home from "./Components/Home.js/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
