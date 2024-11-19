"use client";
import { RiErrorWarningFill } from "react-icons/ri";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginPayload } from "./types/auth";
import { loginUser, saveToken } from "./utils/auth";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { PiLinkedinLogoFill } from "react-icons/pi";

export default function Home() {
  const { register, handleSubmit } = useForm<LoginPayload>();
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginPayload> = async (data) => {
    if (!data.terms) {
      setError("You must agree to the Terms & Conditions");
      return;
    }
    try {
      const response = await loginUser(data);
      saveToken(response.token);
      router.push("/dashboard");
    } catch (err) {
      console.log(err);

      setError("Invalid email or password");
    }
  };

  return (
    <div className="bg-[#F1F1F1]">
      <div className="container mx-auto grid grid-cols-12 items-center gap-4 min-h-screen font-[family-name:var(--font-geist-mono)]">
        <div className="col-span-12 md:col-span-7 bg-[#fff] rounded-[15px] w-[90%] ">
          <h1 className="text-[40px]  text-[#222] flex justify-center items-center py-[270px] px-[240px]  font-[100]">
            Image or Video of our services
          </h1>
        </div>
        <div className="col-span-12 md:col-span-4 xl:col-span-5 bg-[#fff] rounded-[15px]">
          <h3 className="text-[32px] text-[#0F0F0F] flex justify-center items-center py-[20px] font-bold ">
            {" "}
            Drukland.de{" "}
          </h3>
          <p className="text-[24px] text-[#0F0F0F] flex justify-center items-center">
            {" "}
            Sign In to your account{" "}
          </p>
          <p className="text-[18px] text-[#292929] flex justify-center items-center py-[10px]">
            {" "}
            Don’t you have an account ?{" "}
            <span className="text-[26] text-[#0B0B0B]"> Register </span>{" "}
          </p>
          <p className="text-[14px] text-[#0F0F0F] flex justify-center items-center">
            {" "}
            <RiErrorWarningFill className="mr-[5px]" />
            Unknown email address. Try again!{" "}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-6 rounded shadow-md w-full"
          >
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4 ">
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full border-b-2 border-[#0B0B0B] px-3 py-2 focus:outline-none"
                // placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-700">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full border-b-2 border-[#0B0B0B] px-3 py-2 focus:outline-none"
                // placeholder="Enter your password"
              />
            </div>

            <div className="mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register("terms", { required: true })}
                  className="mr-2"
                />
                <span className="text-[#292929]"> I agree to all </span>
                <button className="text-[#0B0B0B] ">Terms & Conditions</button>.
              </label>
              {error && (
                <p className="text-red-500 mt-2">
                  You must agree to the Terms & Conditions
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#0F0F0F] text-white py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>

            <div className="relative pt-[10px] flex justify-center items-center text-[#222]">
              <p className="absolute bottom-[35%] h-[1px] bg-[#222] w-full">
                {" "}
              </p>
              <p className="relative z-10 bg-[#fff] px-[10px]">
                {" "}
                or sign in with{" "}
              </p>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
              <PiLinkedinLogoFill className="text-[#0076B2] text-[30px]" />
              <FcGoogle className="text-[30px]" />
              <BsFacebook className="text-[#0076B2] text-[30px]" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
