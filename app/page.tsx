"use client";

import Landing from "./../public/landing-page.jpg";
import ProductsImage1 from "./../public/products-images-1.jpg";
import ProductsImage2 from "./../public/products-images-2.jpg";
import LocationImage from "./../public/location-image.jpg";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <>
      <Image
        src={Landing}
        alt="Picture of bunch of flowers"
        className="h-[300px] md:h-[578px] object-cover opacity-85"
      />
      <section className="product w-full mt-10 flex flex-col items-center">
        <h2 className="text-lg prompt-medium">Products</h2>
        <span
          className="block w-32 h-1.5"
          style={{ backgroundColor: "#C4D9D5" }}
        ></span>
        <section className="product-images flex flex-row mt-10 w-full relative">
          <Image
            src={ProductsImage2}
            alt="Picture of products image"
            className="w-full max-w-[50%] h-[300px] sm:h-[400px] object-cover"
          />
          <Image
            src={ProductsImage1}
            alt="Picture of products image"
            className="w-full max-w-[50%] h-[300px] sm:h-[400px] object-cover"
          />
          <button
            className={`absolute btn btn-ourproducts opacity-80 text-white prompt-medium top-1/2 left-1/2 ${
              btnHover ? "btn-hover" : ""
            }`}
            style={{
              backgroundColor: "#C4D9D5",
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
          >
            Our Products
          </button>
        </section>
      </section>
      <section className="location mt-10 w-full flex flex-col items-center">
        <h2 className="text-lg prompt-medium">Location</h2>
        <span
          className="block w-32 h-1.5"
          style={{ backgroundColor: "#C4D9D5" }}
        ></span>
        <section className="locations-image w-full flex flex-row mt-10 h-full relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.8714673922877!2d110.41468567457125!3d-7.696940292320455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5f32a3c75213%3A0x3f06113a334564ff!2sKaninara%20Florist!5e0!3m2!1sen!2sus!4v1724054865345!5m2!1sen!2sus"
            className="w-full h-[300px] border-0 sm:h-[400px] sm:max-w-[50%]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Image
            src={LocationImage}
            alt="Picture of the situation in the location"
            className="hidden absolute h-[400px] sm:static sm:block sm:w-full sm:max-w-[50%] sm:object-cover"
          />
        </section>
      </section>
    </>
  );
}
