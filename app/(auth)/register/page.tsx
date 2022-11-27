import React from "react";
import { useForm } from "react-hook-form";

function RegisterPage(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const handleRegister = () => console.log("registered");

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <label>Email</label>
      <input
        {...register("email", { required: true })}
        type="email"
        aria-label="email"
      />
      {errors?.email?.type === "required" && <span>Email is required</span>}
      <label>Username</label>
      <input
        {...register("username", {
          required: true,
          pattern: new RegExp(/^[\w ]+$/),
        })} // regex for userName - allow letters and numbers and "_"
        aria-label="username"
      />
      {errors?.username?.type === "pattern" && (
        <span>Only letters, numbers, "_" allowed</span>
      )}
      {errors?.username?.type === "required" && <span>Email is required</span>}
      <label>Password</label>
      <input
        {...register("password", { required: true, min: 8, max: 32 })}
        type="password"
        aria-label="password"
        min={8}
        max={32}
      />
      <label>Repeat password</label>
      <input
        {...register("password", { required: true })}
        type="password"
        aria-label="repeat-password"
      />
      <button className="front-page_btn" type="submit" disabled={!isValid}>
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
