"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, FormEvent } from "react";
import Link from "next/link";
import LoginContext from "./contexts/LoginContext";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [navActive, setNavActive] = useState(true);
  const [isProfileClicked, setIsProfileClicked] = useState(true);
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const router = useRouter();

  const handleSignOut = (e: FormEvent) => {
    e.preventDefault();
    setIsLogin(false);
  };

  const redirectToLogin = (e: FormEvent) => {
    e.preventDefault();
    setIsProfileClicked(true);
    router.push("/login");
  };

  return (
    <section className="sticky top-0 z-50 shadow-md flex relative pt-4 md:pt-8 flex-col justify-center items-center w-full mb-10 bg-white">
      <Link
        href="/"
        className="yeseva-one-regular text-center mb-2 text-2xl sm:text-3xl sm:mb-4"
      >
        Poppy Florist
      </Link>
      <nav className="flex relative flex-row w-full px-5 py-3 md:py-0 justify-between items-center md:justify-center">
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
            <Link href="/" className="block text-center text-lg py-3">
              Home
            </Link>
          </li>
          <li className="rounded-xl md:rounded-lg">
            <Link href="/about-us" className="block text-lg text-center py-3">
              About Us
            </Link>
          </li>
          <li className="rounded-xl md:rounded-lg">
            <Link href="/shop" className="block text-lg text-center py-3">
              Shop
            </Link>
          </li>
          <li className="rounded-xl">
            <Link href="#contact" className="block text-lg text-center py-3">
              Hiring
            </Link>
          </li>
        </ul>
        <ul className="personal flex flex-row justify-between md:absolute md:right-8 md:top-6">
          <li className="w-full h-full p-2 rounded-full text-xl bg-white hover:bg-black text-black hover:text-white">
            <Link
              href="/checkout"
              className="h-full w-full p-0 m-0 text-center flex justify-center items-center"
            >
              <FontAwesomeIcon className="text-xl" icon={faBagShopping} />
            </Link>
          </li>
          <li className="w-full h-full p-2 rounded-full bg-white hover:bg-black text-black hover:text-white">
            <button
              className="h-full p-0 m-0 text-center flex justify-center items-center"
              onClick={() => setIsProfileClicked(!isProfileClicked)}
            >
              <FontAwesomeIcon className="text-xl" icon={faUser} />
            </button>
          </li>
        </ul>
        <ul
          className={`menu absolute rounded-[0.85rem] p-3 flex flex-column top-16 md:top-20 w-40 right-4 bg-white shadow-lg border border-solid border-gray-200 ${
            isProfileClicked ? "invisible" : "visible"
          }`}
        >
          {isLogin ? (
            <>
              <li className="rounded-xl md:rounded-lg">
                <Link
                  href="/profile"
                  className="block text-center text-lg py-3"
                >
                  Profile
                </Link>
              </li>
              <li className="rounded-xl md:rounded-lg">
                <button
                  className="block text-lg text-center py-3"
                  onClick={(e) => handleSignOut(e)}
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li className="rounded-xl md:rounded-lg">
              <button
                className="block text-lg text-center py-3"
                onClick={(e) => redirectToLogin(e)}
              >
                Sign In
              </button>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
}
