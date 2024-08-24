"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export function Navbar() {
  const [navActive, setNavActive] = useState(true);

  return (
    <section className="flex flex-col justify-center items-center w-full mb-10 bg-white">
      <a
        href="/"
        className="yeseva-one-regular text-center mb-2 text-2xl sm:text-3xl sm:mb-4"
      >
        Poppy Florist
      </a>
      <nav className="flex flex-row w-full px-5 py-3 md:py-0 sticky top-0 z-50 justify-between items-center md:justify-center">
        <button
          className="bars-menu h-9 w-9 text-center flex items-center justify-center md:absolute md:invisible rounded-full bg-white hover:bg-black text-black hover:text-white"
          onClick={() => setNavActive(!navActive)}
        >
          <FontAwesomeIcon
            className={`text-xl ${
              navActive ? "sticky block" : "absolute hidden"
            }`}
            icon={faBars}
          />
          <FontAwesomeIcon
            className={`text-xl ${
              navActive ? "absolute hidden" : "sticky block"
            }`}
            icon={faXmark}
          />
        </button>
        <ul
          className={`menu absolute md:static md:visible rounded-xl p-3 flex flex-column top-16 w-56 bg-white shadow-lg md:shadow-none border border-solid border-gray-200 md:border-none md:rounded-none md:flex-row md:w-96 md:content-around md:justify-around ${
            navActive ? "invisible" : "visible"
          }`}
        >
          <li className="rounded-xl md:rounded-lg">
            <a href="/" className="block text-center text-lg py-3">
              Home
            </a>
          </li>
          <li className="rounded-xl md:rounded-lg">
            <a href="/about-us" className="block text-lg text-center py-3">
              About Us
            </a>
          </li>
          <li className="rounded-xl md:rounded-lg">
            <a href="/shop" className="block text-lg text-center py-3">
              Shop
            </a>
          </li>
          <li className="rounded-xl">
            <a href="#contact" className="block text-lg text-center py-3">
              Hiring
            </a>
          </li>
        </ul>
        <ul className="personal flex flex-row justify-between md:absolute md:right-8 md:top-6">
          <li className="w-full h-full p-2 rounded-full text-xl bg-white hover:bg-black text-black hover:text-white">
            <button className="h-full w-full p-0 m-0 text-center flex justify-center items-center">
              <FontAwesomeIcon className="text-xl" icon={faBagShopping} />
            </button>
          </li>
          <li className="w-full h-full p-2 rounded-full bg-white hover:bg-black text-black hover:text-white">
            <a
              href="#profile"
              className="h-full p-0 m-0 text-center flex justify-center items-center"
            >
              <FontAwesomeIcon className="text-xl" icon={faUser} />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
