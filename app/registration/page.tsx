import React from "react";

function RegistrationPage(): JSX.Element {
  return (
    <form>
      <label>Email</label>
      <input type="email" aria-label="email" />
      <label>Username</label>
      <input aria-label="username" />
      <label>Password</label>
      <input type="password" aria-label="password" />
      <button
        className="px-4 py-2 mt-3 shadow-sm text-contrastText self-center bg-lighterGreen"
        type="submit"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationPage;
