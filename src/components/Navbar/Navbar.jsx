import React from "react";
import style from "./Navbar.module.css";
import Portfolio from "./../Portfolio/Portfolio";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-cyan-900 text-white w-full fixed top-0 left-0 right-0 z-10">
        <div className="flex justify-between items-center container mx-auto py-9 px-32 font-bold">
          <h2 className="text-3xl">
            <Link to="">START FRAMEWORK</Link>
          </h2>
          <div>
            <ul className="flex justify-center gap-6">
              <li>
                <NavLink to="about">ABOUT</NavLink>
              </li>
              <li>
                <NavLink to="portfolio">PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink to="contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
