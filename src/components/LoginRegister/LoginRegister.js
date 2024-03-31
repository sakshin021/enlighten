import React, { useState } from "react";
import styles from "./LoginRegister.module.css";
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
    <div className={`${styles.container} ${addClass}`} id="container">
      <div
        className={`${styles["form-container"]} ${styles["sign-up-container"]}`}
      >
        <form>
          <h1>Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <input
            type="password"
            placeholder="Password"
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

      <div
        className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
      >
        <form>
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setSignInValues((prev) => ({
                ...prev,
                email: event.target.value,
              }));
            }}
          />
          <input
            type="password"
            placeholder="Password"
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

      <div className={styles["overlay-container"]}>
        <div className={styles.overlay}>
          <div
            className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}
          >
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              className={styles.ghost}
              id="signIn"
              onClick={() => setAddClass(styles[""])}
            >
              Sign in
            </button>
          </div>

          <div
            className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
          >
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              className={styles.ghost}
              id="signUp"
              onClick={() => setAddClass(styles["right-panel-active"])}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
