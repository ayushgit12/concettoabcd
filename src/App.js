import React, { useEffect } from "react";
import Registration from "./Registration";
import "./App.css";
import ThreeJSBackground from "./ThreeJSBackground";
import ContentBelow from "./ContentBelow";
import Background from "./Background";
import { Routes, Route, useLocation } from "react-router-dom";
import { init, animate } from "./heroSection";
import Tshirt from "./Tshirt";

function RouteChangeHandler() {
  const location = useLocation();

  useEffect(() => {
    const canvasContainer = document.getElementById('canvas_container');
    if (canvasContainer) {
      if (location.pathname === '/tshirt') {
        canvasContainer.style.display = 'none';
      } else {
        canvasContainer.style.display = ''; // Reset to default display
      }
    }
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  // useEffect(() => {
  //   init();
  //   animate();
  //   const block = document.querySelector("#canvas_container");
  //   const parallaxWrapper = document.querySelector(".sponsor");

  //   if (block && parallaxWrapper) {
  //     const scrollTriggerPoint = block.offsetTop + block.offsetHeight;
  //     const handleScroll = () => {
  //       if (window.scrollY >= scrollTriggerPoint) {
  //         parallaxWrapper.style.overflow = "auto";
  //       } else {
  //         parallaxWrapper.style.overflow = "hidden";
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, []);

  // useEffect(() => {
  //   const block = document.querySelector("#canvas_container");
  //   const parallaxWrapper = document.querySelector(".sponsor");

  //   if (block && parallaxWrapper) {
  //     const scrollTriggerPoint = block.offsetTop + block.offsetHeight;
  //     const handleScroll = () => {
  //       if (window.scrollY >= scrollTriggerPoint) {
  //         parallaxWrapper.style.overflow = "auto";
  //       } else {
  //         parallaxWrapper.style.overflow = "hidden";
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, []);

  return (
    <div>
      <RouteChangeHandler />
      <Routes>
        <Route exact path="/tshirt" element={<Tshirt />} />
        <Route
          exact
          path="/"
          element={
            <div className="App">
              <div id="targetSection">
                <Background />
                <div className="parallax-content">
                  <ContentBelow />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
