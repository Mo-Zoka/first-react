import React from "react";
import style from "./Portfolio.module.css";
import img1 from "../../assets/port1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="w-full flex flex-col gap-5 justify-center items-center pb-16 pt-40">
        <h1 className="uppercase text-4xl font-bold">portfolio component</h1>
        <div className="my-star2">
          <i className="fa-solid fa-star text-xl"></i>
        </div>
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="w-full">
              <div className="card relative">
                <img src={img1} alt="" className="rounded-xl" />
                <div className="layer absolute inset-0 flex items-center justify-center rounded-xl">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="card relative">
                <img src={img2} alt="" className="rounded-xl" />
                <div className="layer absolute inset-0 flex items-center justify-center rounded-xl">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="card relative">
                <img src={img3} alt="" className="rounded-xl" />
                <div className="layer absolute inset-0 flex items-center justify-center rounded-xl">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="card relative">
                <img src={img1} alt="" className="rounded-xl" />
                <div className="layer absolute inset-0 flex items-center justify-center rounded-xl">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="card relative">
                <img src={img2} alt="" className="rounded-xl" />
                <div className="layer absolute inset-0 flex items-center justify-center rounded-xl">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="card relative">
                <img src={img3} alt="" className="rounded-xl" />
                <div className="layer absolute inset-0 flex items-center justify-center rounded-xl">
                  <i className="fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
