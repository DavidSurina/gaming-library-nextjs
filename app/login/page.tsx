import React from "react";
import { useForm } from "react-hook-form";

function LoginPage(): JSX.Element {
  return (
    <form>
      <label>Email</label>
      <input type="email" aria-label="email" />
      <label>Password</label>
      <input type="password" aria-label="password" />
      <button
        className="px-4 py-2 mt-3 shadow-sm text-contrastText self-center bg-lighterGreen"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default LoginPage;
