"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

interface CardProps {
  imageSource: StaticImageData | string;
  productName: string;
  productPrice: string;
}

export default function Card({
  imageSource,
  productName,
  productPrice,
}: CardProps) {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div className="card w-[200px] mb-4 shadow-lg h-[335px] lg:w-[250px] lg:h-[435px] rounded-2xl bg-white flex flex-column justify-around items-center">
      <section
        className="products-image relative"
        onMouseEnter={() => setTimeout(() => setBtnHover(true), 100)}
        onMouseLeave={() => setTimeout(() => setBtnHover(false), 50)}
      >
        <button
          className={`absolute border border-solid text-sm border-gray-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3 px-5 w-max rounded-xl bg-black opacity-70 hover:opacity-100 z-10 text-white ${
            btnHover ? "visible" : "invisible"
          }`}
        >
          Add To Chart
        </button>
        <Image
          src={imageSource}
          alt="Photo of the product"
          className="rounded-2xl h-[248px] lg:h-[338px] object-cover hover:cursor-pointer"
          width={300}
          height={200}
        />
      </section>
      <p className="product-name prompt-medium text-base">{productName}</p>
      <p className="product-price prompt-regular text-sm text-slate-600">
        {productPrice}
      </p>
    </div>
  );
}
