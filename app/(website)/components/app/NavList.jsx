'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useEffect } from 'react'

const NavList = () => {
    const path = usePathname();
    const [pageYOffset, setPageYOffset] = useState(0);

    const handleScroll = () => {
      setPageYOffset(window.pageYOffset);
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <ul className="navbar_nav">
    <li className={`menu-item  menu-item-has-children dropdown  mennucolumn_ nav-item ${path === "/about-us" && "active"} `}>
      <Link href="/about-us" className="nav_link" style={{color:pageYOffset>500?"black":"white"}}>
        <span className="text-link">
          About Us
        </span>
      </Link>
    
    </li>
    <li className={`menu-item menu-item-has-children dropdown  nav-item ${path === "/services" && "active"}`}>
    <Link href="/services" className="nav_link" style={{color:pageYOffset>500?"black":"white"}}>
        <span className="text-link">
          What We Do
        </span>
      </Link>
    
    </li>
    <li className={`menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item ${path === "/our-properties" && "active"}`}>
    <Link href="/our-properties" className="nav_link" style={{color:pageYOffset>500?"black":"white"}}>
        <span className="text-link">
          Properties
        </span>
      </Link>
      
    </li>
    <li className={`menu-item  menu-item-has-children dropdown  mennucolumn_two   nav-item ${path === "/blog" && "active"}`}>
    <Link href="/blog" className="nav_link" style={{color:pageYOffset>500?"black":"white"}}>
        <span className="text-link">
          Blog
        </span>
      </Link>
   
    </li>
    <li className={`menu-item  menu-item-has-children dropdown  mennucolumn_  nav-item ${path === "/our-team" && "active"}`}>
    <Link href="/our-team" className="nav_link" style={{color:pageYOffset>500?"black":"white"}}>
        <span className="text-link">
          Our Team
        </span>
      </Link>
    </li>
    <li className={`menu-item  nav-item ${path === "/contact-us" && "active"}`}>
    <Link href="/contact-us" className="nav_link" style={{color:pageYOffset>500?"black":"white"}}>
        <span className="text-link">
          Contact
        </span>
      </Link>
    </li>
  </ul>
  )
}

export default NavList

