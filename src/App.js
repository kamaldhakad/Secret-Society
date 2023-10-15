import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { GetNftData } from "./services/Services.js";

const App = () => {
  const [nftData, setNftData] = useState([]);
  useEffect(() => {
    myData();
  }, []);

  const myData = async () => {
    const gettingDataInApp = await GetNftData(
      "get",
      "https://nft.oddfellowsnft.com/api/nft/list"
    );
    setNftData(gettingDataInApp.data);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes component={<Layout />} />}>
            <Route path="/" element={<Home nftData={nftData} />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
