import { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import logo from "@/images/resources/logo-1.jpg";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import NavItem from "./NavItem";

const MobileMenu = () => {
  const { toggleMenu, menuStatus, handleNotification } = useRootContext();
  const handleDonate = () => {
    toggleMenu()
    handleNotification({ type: "userDetailsPopup" }, "overide");
  };
  return (
    <div
      className={`mobile-nav__wrapper  animated fadeInLeft${
        menuStatus ? " expanded" : ""
      }`}
    >
      <div
        onClick={() => toggleMenu()}
        className="mobile-nav__overlay mobile-nav__toggler"
      ></div>
      <div className="mobile-nav__content">
        <span
          onClick={() => toggleMenu()}
          className="mobile-nav__close mobile-nav__toggler"
        >
          <i className="fa fa-times"></i>
        </span>

        <div className="logo-box">
          <Link href="/">
            <a aria-label="logo image">
              <Image src={logo.src} width="155" alt="" />
            </a>
          </Link>
        </div>
        <div className="mobile-nav__container">
          <ul className="main-menu__list">
            {navItems.map(({ id, ...item }) => (
              <NavItem key={id} item={item} />
            ))}
          </ul>
        </div>

        <button onClick={handleDonate} className="main-menu__donate-btn-new">
          <i className="fa fa-heart"></i>Donate
        </button>
        <ul className="mobile-nav__contact list-unstyled">
          <li>
            <i className="fa fa-envelope"></i>
            <a href="mailto:org.smilekeepers@gmail.com">org.smilekeepers@gmail.com</a>
          </li>
          <li>
            <i className="fa fa-phone-alt"></i>
            <a href="tel:8830510994">8830510994</a>
          </li>
        </ul>
        <div className="mobile-nav__top">
          <div className="mobile-nav__social">
            {social.map(({ icon, link }, index) => (
              <a key={index} href={link} className={`fab ${icon}`}></a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
