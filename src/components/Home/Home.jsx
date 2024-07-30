import React from "react";
import style from "./Home.module.css";
import logo from "../../assets/avatar.svg"

export default function Home() {
  return (
    <>
      <div className="home w-full h-dvh flex flex-col gap-7 justify-center items-center">
        <img src={logo} alt="" className="w-64" />
        <h1 className="uppercase text-4xl font-bold text-white">start Framework</h1>
        <div className="my-star"><i className="fa-solid fa-star text-white text-xl"></i></div>
        <p className="text-white">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
