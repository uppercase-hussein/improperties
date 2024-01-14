'use client'
import Link from 'next/link'
import React from 'react'

const MobileMenu = () => {
  const closeMenu = () => {
    let body = document.querySelector("body");
    body.classList.remove('mobile_menu_box-visible');
}
  return (
    <div className="mobile_menu_box">
  <div className="menu-backdrop" onClick={closeMenu} />
  <nav className="menu-box scrollbarcolor">
  <div className="close-btn" onClick={closeMenu}>
      <i className="fi-rr-cross" />
    </div>
    <div className="menu-outer">
      <div className="navigation_menu">
        <ul className="navbar_nav getmobilemenu">
            <li><Link onClick={closeMenu} href="/">Home</Link></li>
            <li><Link onClick={closeMenu} href="/about-us">About us</Link></li>
            <li><Link onClick={closeMenu} href="/services">What we do</Link></li>
            <li><Link onClick={closeMenu} href="/our-properties">Properties</Link></li>
            <li><Link onClick={closeMenu} href="/blog">Blog</Link></li>
            <li><Link onClick={closeMenu} href="/our-team">Our team</Link></li>
            <li><Link onClick={closeMenu} href="/contact-us">Contact us</Link></li>
        </ul>
      </div>
    </div>
    <div className="mobile-header-info-wrap">
      <div className="single-mobile-header-info">
        <a href="tel:+2349088888313" className="cnt">
          <i className="fi-rs-headphones" />+2349088888313 </a>
      </div>
      <div className="single-mobile-header-info cont_over">
        <a href="mailto:improperties@gmail.com" className="cnt">
          <i className="fi-rs-envelope" />improperties@gmail.com </a>
      </div>
      {/* <div className="single-mobile-header-info">
        <a href="#" className="theme_btn tp_one">Contact</a>
      </div> */}
      <div className="single-mobile-header-info">
        <Link onClick={closeMenu} href="/become-an-esp" className="theme_btn">Become an ESP</Link>
      </div>
    </div>
  </nav>
</div>

  )
}

export default MobileMenu