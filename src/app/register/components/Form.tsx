"use client";

import { onRegister } from "../action";
import { toast } from "react-toastify";

export default function FormRegister() {
  const onSubmit = async (formData: FormData) => {
    try {
      await onRegister(formData);

      toast.success("Successfully register");
    } catch (error) {
      if (error instanceof Error) {
        const errMessages = error.message?.split(",") || [
          "Internal Server Error",
        ];
        errMessages.forEach((err: string) => toast.error(err));
      }
    }
  };

  return (
    <form
      action={onSubmit}
      className="flex flex-col w-full items-center gap-[10px]"
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input
          name="username"
          type="text"
          className="input input-bordered w-full "
          placeholder="Enter your username"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          name="email"
          type="email"
          className="input input-bordered w-full "
          placeholder="Enter your email address"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          name="password"
          type="password"
          className="input input-bordered w-full "
          placeholder="Enter your password"
        />
      </label>
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Repeat Password</span>
        </div>
        <input
          name="repeatPassword"
          type="password"
          className="input input-bordered w-full "
          placeholder="Enter your password"
        />
      </label>

      <button
        className="mt-5 btn bg-blue-500 w-full text-white hover:bg-blue-400 disabled:bg-blue-300"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
}
