import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <>
      <header>
        <NavBar />
        <HeroSection />
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100vh;
          background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.1)
            ),
            url("bckgd_about.jpg");
          background-size: cover;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

export default Header;
