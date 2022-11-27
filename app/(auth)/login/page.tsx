import React from "react";
import { useForm } from "react-hook-form";

function LoginPage(): JSX.Element {
  const { register, handleSubmit } = useForm();

  const handleLogin = () => console.log("logged in");

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <label>Email</label>
      <input
        {...register("email", { required: true })}
        type="email"
        aria-label="email"
      />
      <label>Password</label>
      <input
        {...register("password", { required: true, min: 8, max: 32 })}
        type="password"
        aria-label="password"
      />
      <button className="front-page_btn" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginPage;
