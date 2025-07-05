import React, { useState } from "react";
import "./Mobilenav.css";
import { Link } from "react-scroll";
import { IoHome } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcReading,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = () =>{
    setOpen(false);
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <CiMenuKebab
              size={30}
              className="mobile-nav-icons"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="mobile-nav-icons"
              onClick={handleOpen}
            />
          )}

          <span className="mobile-nav-tittle">My Portfolio App</span>
        </div>
        {open && (
          <div className="mobile-nav-menu">
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={handleClick}
              >
                <FcHome />
                Home
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={handleClick}
              >
                <FcAbout />
                About
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="Work-experience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={handleClick}
              >
                <FcBusinessman />
                Work experience
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="tech-stack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={handleClick}
              >
                <FcBiotech />
                Tech Stack
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="Education"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={handleClick}
              >
                <FcReading />
                Education
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={handleClick}
              >
                <FcVideoProjector />
                Projects
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="Testimonoal"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={handleClick}
              >
                <FcVoicePresentation />
                Testimonoal
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="Contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                onClick={handleClick}
              >
                <FcBusinessContact />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
        )}
        
      </div>
    </>
  );
};

export default MobileNav;
