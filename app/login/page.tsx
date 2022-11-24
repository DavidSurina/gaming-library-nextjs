import React from "react";
import { useForm } from "react-hook-form";

function LoginPage(): JSX.Element {
  return (
    <form className="w-3/6 m-auto flex flex-col justify-center align-center">
      <label className="mt-3 font-bold text-dimmedGrey">Email</label>
      <input
        type="email"
        aria-label="email"
        className="border border-darkGrey rounded p-1 bg-dimmedGrey text-contrastText"
      />
      <label className="mt-3 font-bold text-dimmedGrey">Password</label>
      <input
        type="password"
        aria-label="password"
        className="border border-darkGrey rounded p-1 bg-dimmedGrey text-contrastText"
      />
      <button
        className="px-4 py-2 mt-3 shadow-sm text-contrastText self-center rounded-lg bg-lighterGreen"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default LoginPage;
