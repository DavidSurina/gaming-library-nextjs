import React from "react";
import { useForm } from "react-hook-form";

function LoginForm(): JSX.Element {
  return (
    <form>
      <label>Email</label>
      <input type="email" aria-label="email" />
      <label>Password</label>
      <input type="password" aria-label="password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
