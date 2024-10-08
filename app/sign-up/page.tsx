"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import PhotoSignUp from "./../../public/sign-up.jpg";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUp() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Add logic to handle form submission, like sending data to a server
    console.log("Form submitted:", formData);
    setError(""); // Clear error after successful submission
  };

  return (
    <section className="sign-up w-full h-full grid lg:grid-rows-1 lg:grid-cols-2 gap-4">
      <section className="form-wrapper flex flex-cols justify-center items-center lg:col-span-1">
        <form className="space-y-4 w-[300px]" onSubmit={handleSubmit}>
          <h1 className="text-xl">Sign Up</h1>
          <section>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                name="name"
                className="grow"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
          </section>
          <section>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                name="email"
                className="grow"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </section>
          <section>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
          </section>
          <section>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </label>
          </section>
          <button
            type="submit"
            className="btn btn-neutral w-full btn-wide bg-black text-white hover:bg-black hover:text-white"
          >
            Sign Up
          </button>
          <span className="w-full text-center mt-5 block text-sm">
            Already have an account?
            <a href="/login" className="ml-2 prompt-medium underline">
              Login
            </a>
          </span>
        </form>
      </section>
      <Image
        src={PhotoSignUp}
        alt="Landing photo for sign up and login"
        className="absolute invisible lg:static lg:visible w-full h-[600px] object-cover"
      />
    </section>
  );
}
