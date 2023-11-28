import React, { useEffect } from "react";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import About from "../src/components/About";
import Portfolio from "../src/components/Portfolio";
import Services from "../src/components/Services";
import Footer from "../src/components/Footer";
const App = (props) => {
  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#contact", text: "Contact" },
  ];
  useEffect(() => {
    let navElement = document.getElementsByClassName("nav")[0];
    let navLinks = document.getElementsByClassName("nav-link");
    window.onscroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        navElement.style.backgroundColor = "#gray";
        navElement.style.color = "#000";
        navElement.style.padding = "10px 50px";
        for (let i = 0; i < navLinks.length; i++) {
          navLinks[i].style.color = "white";
        }
      } else {
        navElement.style.backgroundColor = "transparent";
        navElement.style.color = "#fff";
        navElement.style.padding = "20px 50px";
        for (let i = 0; i < navLinks.length; i++) {
          navLinks[i].style.color = "#fff";
        }
      }
    };
  }, []);
  return (
    <>
      <Navbar links={navLinks} />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
};

export default App;
