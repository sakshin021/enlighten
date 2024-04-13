import React, { useEffect, useState } from "react";
import styles from "./LoginRegister.module.css";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import HashLoader from "react-spinners/HashLoader";

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

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className={styles.body}>
      {loading ? (
        <HashLoader
          color={"#104254"}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <Link className="hover:text-gray-300" to="/">
            <h1
              style={{
                color: "#104254",
                marginBottom: "5rem",
                paddingLeft: "23rem",
                fontSize: "1.5rem",
              }}
            >
              <FontAwesomeIcon icon={faHouse} />
            </h1>
          </Link>
          <div className={`${styles.container} ${addClass}`} id="container">
            <div
              className={`${styles["form-container"]} ${styles["sign-up-container"]}`}
            >
              <form>
                <h1
                  style={{
                    fontSize: "1.45rem",
                    color: "#104254",
                    marginBottom: "-10px",
                  }}
                >
                  Create Account
                </h1>
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
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      password: event.target.value,
                    }))
                  }
                />
                <p>{errMsg}</p>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  style={{
                    margin: "1.6rem 1rem",
                    padding: "0.8em 2rem",
                    backgroundColor: "#104254",
                    borderColor: "#aec8d9",
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                >
                  Register
                </button>
              </form>
            </div>

            <div
              className={`${styles["form-container"]} ${styles["sign-in-container"]}`}
            >
              <form>
                <h1 style={{ fontSize: "1.7rem", color: "#104254" }}>Login</h1>
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
                <button
                  type="submit"
                  onClick={handleSignInSubmit}
                  style={{
                    margin: "1.6rem 1rem",
                    padding: "0.8em 2rem",
                    backgroundColor: "#104254",
                    borderColor: "#aec8d9",
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                >
                  Login
                </button>
              </form>
            </div>

            <div className={styles["overlay-container"]}>
              <div className={styles.overlay}>
                <div
                  className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}
                >
                  <h1 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                    Welcome Back!
                  </h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    className={styles.ghost}
                    id="signIn"
                    onClick={() => setAddClass(styles[""])}
                    style={{
                      marginTop: "1rem",
                      backgroundColor: "#39a0ca",
                      borderColor: "#104254",
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    }}
                  >
                    Sign in
                  </button>
                </div>

                <div
                  className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}
                >
                  <h1 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                    Hello, Friend!
                  </h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    className={styles.ghost}
                    id="signUp"
                    onClick={() => setAddClass(styles["right-panel-active"])}
                    style={{
                      marginTop: "1rem",
                      backgroundColor: "#39a0ca",
                      borderColor: "#104254",
                      boxShadow:
                        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    }}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginRegister;
