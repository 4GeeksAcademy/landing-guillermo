import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./NavBar";
import CardWelcome from "./CardWelcome";
import ContainerCards from "./ContainerCards.jsx";
import Footer from "./Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <NavBar />
    <CardWelcome />
    <ContainerCards />
    <Footer />
  </>
);
