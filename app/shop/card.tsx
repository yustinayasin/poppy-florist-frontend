"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import axios from "axios";
import React, { FormEvent, useState, useContext } from "react";
import LoginContext from "../contexts/LoginContext";
import { useRouter } from "next/navigation";

interface CardProps {
  imageSource: StaticImageData | string;
  productName: string;
  productPrice: string;
  productId: number;
}

export default function Card({
  imageSource,
  productName,
  productPrice,
  productId,
}: CardProps) {
  const [btnHover, setBtnHover] = useState(false);
  const { isLogin } = useContext(LoginContext);
  const router = useRouter();

  const handleAddProductToCart = async (e: FormEvent) => {
    e.preventDefault();

    if (!isLogin) {
      router.push("/login");
    }

    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_FLORIST_API_URL}cartsproducts/add`,
        {
          productId: productId,
          quantity: 1,
        },
        {
          withCredentials: true,
        }
      );
    } catch (error: any) {
      if (error.response) {
        console.error("Error:", error.response.status, error.response.data);
      } else if (error.request) {
        console.error("Error: No response received");
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="card w-[200px] mb-4 shadow-lg h-[335px] lg:w-[250px] lg:h-[435px] rounded-2xl bg-white flex flex-column justify-around items-center">
      <section
        className="products-image relative"
        onMouseEnter={() => setTimeout(() => setBtnHover(true), 100)}
        onMouseLeave={() => setTimeout(() => setBtnHover(false), 50)}
      >
        <button
          onClick={(e) => handleAddProductToCart(e)}
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
          width={338}
          height={248}
          priority={true}
        />
      </section>
      <p className="product-name prompt-medium text-base">{productName}</p>
      <p className="product-price prompt-regular text-sm text-slate-600">
        {productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
      </p>
    </div>
  );
}
