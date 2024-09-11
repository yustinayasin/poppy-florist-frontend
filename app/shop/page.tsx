"use client";

import Card from "./card";
import Product1 from "./../../public/product-1.jpg";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface Category {
  id: number;
  name: string;
}

interface Product {
  Id: number;
  Name: string;
  Description: string;
  Price: number;
  Stock: number;
  FileName: string;
  FileUrl: string;
  CategoryId: number;
  Category: Category;
  CreatedAt: string;
  UpdatedAt: string;
}

export default function Shop() {
  const [listProducts, setListProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_FLORIST_API_URL}product/`,
          {
            withCredentials: true,
          }
        );
        setListProducts(data.data);
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
    <section className="products flex flex-col justify-center items-center sm:grid sm:grid-cols-2 sm:gap-14 md:grid-cols-3">
      {listProducts?.map((product) => (
        <Card
          key={product.Id}
          imageSource={product.FileUrl}
          productName={product.Name}
          productPrice={`Rp ${product.Price}`}
        />
      ))}
    </section>
  );
}
