"use client";

import ListProduct from "./ListProduct";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import TotalPriceContext from "../contexts/TotalPriceContext";
import LoginContext from "../contexts/LoginContext";
import { useRouter } from "next/navigation";

interface Product {
  ProductId: number;
  CartsProductsId: number;
  Name: string;
  Description: string;
  Price: number;
  Stock: number;
  FileUrl: string;
  Quantity: number;
}

interface Cart {
  Id: number;
  UserId: number;
  Products: Product[];
  TotalPrice: number;
  CreatedAt: string;
  UpdatedAt: string;
}

export default function Checkout() {
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart | null>(null);
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext);
  const { isLogin } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    }
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Assuming that `data.data` is of type `Cart`
        const { data } = await axios.get<{ data: Cart }>(
          `${process.env.NEXT_PUBLIC_FLORIST_API_URL}cart/`,
          {
            withCredentials: true,
          }
        );

        // Extract the Product array from data.data
        if (data.data && data.data.Products) {
          setListProducts(data.data.Products);
          setCart(data.data);
        } else {
          console.error("Unexpected data structure", data);
        }
        setTotalPrice(data.data.TotalPrice);
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

    fetchProducts();
  }, []);

  return (
    <section className="checkout w-[300px] md:w-[600px] lg:w-[800px] flex flex-col justify-center items-center md:flex-row md:items-start">
      <section className="overflow-y-auto md:h-[400px] w-full">
        <h1 className="text-2xl mb-4 prompt-medium">Cart</h1>
        <section>
          {listProducts?.map((product) => (
            <ListProduct
              key={product.ProductId}
              imageSource={product.FileUrl}
              productName={product.Name}
              productPrice={product.Price}
              cartsProductsId={product.CartsProductsId}
              productQuantity={product.Quantity}
            />
          ))}
        </section>
      </section>
      <section className="w-full md:ml-8">
        <h3 className="text-md">Order Summary</h3>
        <section className="order-summary flex flex-row text-sm w-full justify-between mt-3">
          <section className="flex flex-col text-left justify-start">
            <p>Subtotal</p>
            <p>Standard shipping</p>
          </section>
          <section className="flex flex-col text-right">
            <p>
              Rp {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
            <p>Rp 20.000</p>
          </section>
        </section>
        <span className="block w-full h-[2px] my-5 bg-slate-200"></span>
        <section className="flex flex-row w-full justify-between text-md">
          <p className="text-left">Total</p>
          <p className="text-right">{`Rp ${(totalPrice + 20000)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</p>
        </section>
        <span className="block w-full h-[2px] my-5 bg-slate-200"></span>
        <button className="btn btn-neutral w-full btn-wide bg-black text-white hover:bg-black hover:text-white">
          Checkout
        </button>
      </section>
    </section>
  );
}
