"use client";

import Image from "next/image";
import userIcon from "@/assets/userIcon.svg";
import keysIcon from "@/assets/keysIcon.svg";
import { toast } from "react-toastify";
import { onLogin } from "../action";

export default function FormLogin() {
  const doLogin = async (formData: FormData) => {
    try {
      await onLogin(formData);

      toast.success(`Successfully logged in`);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message || "Internal Server Error");
      }
    }
  };

  return (
    <form
      action={doLogin}
      className="flex flex-col w-[20vw] items-center gap-[15px]"
    >
      <label className="input input-bordered flex items-center gap-2 w-full">
        <Image src={userIcon} alt="user-icon" />
        <input
          name="username"
          type="text"
          className="grow"
          placeholder="Username / Email"
        />
      </label>
      <label className="input input-bordered flex items-center gap-2 w-full">
        <Image src={keysIcon} alt="keys-icon" />
        <input
          name="password"
          type="password"
          className="grow"
          placeholder="Password"
        />
      </label>

      <div className="flex justify-between items-center w-full ">
        <label className="label cursor-pointer p-0">
          <input type="checkbox" className="checkbox" defaultChecked={false} />
          <span className="label-text mx-2 text-gray-500">Remember me</span>
        </label>
        <div>
          <p className="label-text text-gray-800 cursor-pointer">
            Forgot Password
          </p>
        </div>
      </div>

      <button
        className="mt-5 btn bg-blue-500 w-full text-white hover:bg-blue-400 disabled:bg-blue-300"
        type="submit"
      >
        Sign In
      </button>
    </form>
  );
}
