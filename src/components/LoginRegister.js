import React, { useState } from "react";
import "./LoginRegister.css";

const LoginRegister = () => {
  const [addClass, setAddClass] = useState("");

  return (
    <div className={`container ${addClass}`} id="container">
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input type="text" placeholder="NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit">Register</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form>
          <h1>Login</h1>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              id="signIn"
              onClick={() => setAddClass("")}
            >
              Go To Login
            </button>
          </div>

          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              id="signUp"
              onClick={() => setAddClass("right-panel-active")}
            >
              Go To Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
