import React from "react";
import LogoImg from "../assets/images/Company/logo.png";
import zeroInfoImg from "../assets/images/Company/logo-1.png";
import homeSvg from "../assets/SVG/home.svg";
import aboutSvg from "../assets/SVG/about.svg";
import serviceSvg from "../assets/SVG/service.svg";
import portfolioSvg from "../assets/SVG/portfolio.svg";
import contactSvg from "../assets/SVG/contact.svg";

const Navbar = (props) => {
  const Images = [
    { href: "#home", img: homeSvg },
    { href: "#about", img: aboutSvg },
    { href: "#services", img: serviceSvg },
    { href: "#portfolio", img: portfolioSvg },
    { href: "#contact", img: contactSvg },
  ];
  const { links } = props;
  return (
    <nav className="nav">
      <div className="logo">
        <img className="logo-img" src={LogoImg} alt="" />
        <img className="zero-img" src={zeroInfoImg} alt="" />
      </div>
      <ul>
        {links &&
          links.map((link, key) => {
            return (
              <li className="nav-effect" key={key}>
                <a className="nav-link" href={link.href}>
                  {link.text}
                </a>
              </li>
            );
          })}
      </ul>
      <ul className="navbar-img">
        {Images.map((item, key) => {
          return (
            <li className="nav-effect" key={key}>
              <a className="nav-link" href={item.href}>
                <img className="navImg" src={item.img}></img>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
