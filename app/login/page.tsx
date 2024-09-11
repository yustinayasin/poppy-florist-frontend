"use client";

import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
} from "react";
import Image from "next/image";
import PhotoSignUp from "./../../public/sign-up.jpg";
import { useRouter } from "next/navigation";
import axios from "axios";
import LoginContext from "../contexts/LoginContext";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const { setIsLogin } = useContext(LoginContext);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Hit login API
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_FLORIST_API_URL}user/login`,
        {
          email: formData.email,
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      setIsLogin(true); // Update context value
      router.push("/");
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="sign-up w-full h-full grid lg:grid-rows-1 lg:grid-cols-2 gap-4">
      <section className="form-wrapper flex flex-cols justify-center items-center lg:col-span-1">
        <form className="space-y-4 w-[300px]" onSubmit={handleLogin}>
          <h1 className="text-xl">Sign In</h1>
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
          <button
            type="submit"
            className="btn btn-neutral w-full btn-wide bg-black text-white hover:bg-black hover:text-white"
          >
            Sign In
          </button>
          <span className="w-full text-center mt-5 block text-sm">
            Don't have an account?
            <a href="/sign-up" className="ml-2 prompt-medium underline">
              Register
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
