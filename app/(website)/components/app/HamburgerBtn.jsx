"use client";
import React from "react";

const HamburgerBtn = () => {
  const toggleNav = () => {
    let body = document.querySelector("body");
    body.classList.toggle("mobile_menu_box-visible");
  };
  return (
    <div className="navbar_togglers hamburger_menu" onClick={toggleNav}>
      <span className="line" />
      <span className="line" />
      <span className="line" />
    </div>
  );
};

export default HamburgerBtn;
