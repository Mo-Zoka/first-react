import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className="footer1 flex justify-around items-baseline text-white text-center ps-24 py-20">
        <div>
          <h3 className="text-2xl font-bold pb-3">LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold pb-3">AROUND THE WEB</h3>
          <div>
            <span class="fa-stack">
              <i class="fa-regular fa-circle fa-stack-2x"></i>
              <i class="fa-brands fa-facebook fa-stack-1x"></i>
            </span>
            <span class="fa-stack">
              <i class="fa-regular fa-circle fa-stack-2x"></i>
              <i class="fa-brands fa-twitter fa-stack-1x"></i>
            </span>
            <span class="fa-stack">
              <i class="fa-regular fa-circle fa-stack-2x"></i>
              <i class="fa-brands fa-linkedin-in fa-stack-1x"></i>
            </span>
            <span class="fa-stack">
              <i class="fa-regular fa-circle fa-stack-2x"></i>
              <i class="fa-solid fa-globe fa-stack-1x"></i>
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold pb-3">ABOUT FREELANCER</h3>
          <p>
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className="footer2 text-center text-white py-7">
        <p>Copyright © Your Website 2024</p>
      </div>
    </>
  );
}
