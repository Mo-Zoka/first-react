import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <>
      <div className="home w-full h-dvh flex flex-col gap-7 justify-center items-center">
        <h1 className="uppercase text-5xl font-bold text-white">
          about component
        </h1>
        <div className="my-star">
          <i className="fa-solid fa-star text-white text-xl"></i>
        </div>
        <div className="flex justify-center container px-56">
          <p className="text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="text-white">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}
