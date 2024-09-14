"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";
import axios from "axios";
import React, { FormEvent, useState, useContext } from "react";
import TotalPriceContext from "../contexts/TotalPriceContext";

interface ListProductProps {
  imageSource: StaticImageData | string;
  productName: string;
  productPrice: number;
  cartsProductsId: number;
  productQuantity: number;
}

export default function ListProduct({
  imageSource,
  productName,
  productPrice,
  productQuantity,
  cartsProductsId,
}: ListProductProps) {
  type Operation = "plus" | "minus";
  const [quantity, setQuantity] = useState<number>(productQuantity);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);

  const handleOperation = async (e: FormEvent, operation: Operation) => {
    e.preventDefault();
    const newQuantity = operation === "plus" ? quantity + 1 : quantity - 1;

    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_FLORIST_API_URL}cartsproducts/${cartsProductsId}`,
        {
          quantity: newQuantity,
        },
        {
          withCredentials: true,
        }
      );
      setQuantity(newQuantity);
      if (operation === "plus") {
        setTotalPrice(totalPrice + productPrice);
      } else {
        setTotalPrice(totalPrice - productPrice);
      }
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
    <section className="list-product flex flex-col justify-center items-center mb-5">
      <section className="flex flex-row w-full h-full justify-start">
        <Image
          src={imageSource}
          alt="Product Image"
          className="w-[100px] h-[130px] lg:w-[140px] lg:h-[170px] object-cover"
          width={100}
          height={130}
        />
        <section className="flex ml-5 flex-col text-left justify-between items-start">
          <section className="product-name-price">
            <p className="list-product-name text-base">{productName}</p>
            <p className="list-product-price text-slate-600 text-sm">
              {"Rp " +
                productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
          </section>
          <section className="flex mt-3 flex-row justify-center items-center">
            <section className="btn-wrapper grid grid-cols-3 items-center border-solid border-slate-900 border rounded-lg h-[30px] w-[80px]">
              <button
                onClick={(e) => handleOperation(e, "minus")}
                className="list-product-minu flex justify-center items-center w-full h-full rounded-tl-lg rounded-bl-lg"
              >
                <FontAwesomeIcon icon={faMinus} className="text-sm" />
              </button>
              <span className="list-product-amount block text-sm text-center">
                {quantity}
              </span>
              <button
                onClick={(e) => handleOperation(e, "plus")}
                className="list-product-plus flex justify-center items-center w-full h-full rounded-tr-lg rounded-br-lg"
              >
                <FontAwesomeIcon icon={faPlus} className="text-sm" />
              </button>
            </section>
            <button className="list-product-remove h-8 w-8 ml-2 text-center flex items-center justify-center rounded-full bg-white text-black hover:bg-black hover:text-white">
              <FontAwesomeIcon icon={faTrash} className="text-sm" />
            </button>
          </section>
        </section>
      </section>
      <span className="block w-full h-[2px] mt-5 bg-slate-200"></span>
    </section>
  );
}
