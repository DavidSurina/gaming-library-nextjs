import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/clientApp";

function RegisterPage(): JSX.Element {
  const auth = getAuth(app);
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange" });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        {...register("email", { required: true })}
        type="email"
        aria-label="email"
      />
      {errors?.email?.type === "required" && <span>Email is required</span>}
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
