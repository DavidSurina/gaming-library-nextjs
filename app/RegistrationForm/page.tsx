import React from "react";

function RegistrationForm(): JSX.Element {
  return (
    <form>
      <label>Email</label>
      <input type="email" aria-label="email" />
      <label>Username</label>
      <input aria-label="username" />
      <label>Password</label>
      <input type="password" aria-label="password" />
      <button type="submit">Confirm</button>
    </form>
  );
}

export default RegistrationForm;
