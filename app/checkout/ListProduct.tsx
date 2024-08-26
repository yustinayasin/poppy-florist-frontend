"use client";

import ProductExample from "./../../public/product-example.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ListProduct() {
  return (
    <section className="list-product flex flex-col justify-center items-center mb-5">
      <section className="flex flex-row w-full h-full justify-start">
        <Image
          src={ProductExample}
          alt="Product Image"
          className="w-[100px] h-[130px] lg:w-[140px] lg:h-[170px] object-cover"
        />
        <section className="flex ml-5 flex-col text-left justify-between items-start">
          <section className="product-name-price">
            <p className="list-product-name text-base">Gerbera</p>
            <p className="list-product-price text-slate-600 text-sm">
              Rp 16,000
            </p>
          </section>
          <section className="flex mt-3 flex-row justify-center items-center">
            <section className="btn-wrapper grid grid-cols-3 items-center border-solid border-slate-900 border rounded-lg h-[30px] w-[80px]">
              <button className="list-product-minu flex justify-center items-center w-full h-full rounded-tl-lg rounded-bl-lg">
                <FontAwesomeIcon icon={faMinus} className="text-sm" />
              </button>
              <span className="list-product-amount block text-sm text-center">
                1
              </span>
              <button className="list-product-plus flex justify-center items-center w-full h-full rounded-tr-lg rounded-br-lg">
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
