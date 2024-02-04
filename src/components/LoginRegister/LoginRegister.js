import React, { useState } from "react";
import "./LoginRegister.css";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";

const LoginRegister = (props) => {
  const navigate = useNavigate();
  const [addClass, setAddClass] = useState("");

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signInValues, setSignInValues] = useState({
    email: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.name || !values.email || !values.password) {
      setErrMsg("Fill all the fields");
      return;
    }
    setErrMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((res) => {
        const user = res.user;
        updateProfile(user, { displayName: values.name });
        setAddClass("");
      })
      .catch((err) => {
        setErrMsg(err.message);
      });
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();

    if (!signInValues.email || !signInValues.password) {
      setErrMsg("Fill all the fields");
      return;
    }
    setErrMsg("");

    signInWithEmailAndPassword(auth, signInValues.email, signInValues.password)
      .then((user) => {
        navigate("/");
      })
      .catch((error) => {
        setErrMsg(error.message);
      });
  };

  return (
    <div className={`container ${addClass}`} id="container">
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="NAME"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <input
            type="email"
            placeholder="EMAIL"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, password: event.target.value }))
            }
          />
          <p>{errMsg}</p>
          <button type="submit" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="EMAIL"
            onChange={(event) => {
              setSignInValues((prev) => ({
                ...prev,
                email: event.target.value,
              }));
            }}
          />
          <input
            type="password"
            placeholder="PASSWORD"
            onChange={(event) => {
              setSignInValues((prev) => ({
                ...prev,
                password: event.target.value,
              }));
            }}
          />
          <p>{errMsg}</p>
          <button type="submit" onClick={handleSignInSubmit}>
            Login
          </button>
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
