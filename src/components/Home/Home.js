import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";

const Home = (props) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <div>
        {!props.isAuthenticated && (
          <h1>
            <Link to="/login">Login</Link>
          </h1>
        )}
        {props.isAuthenticated && (
          <h1>
            <button onClick={handleLogout}>Logout</button>
          </h1>
        )}
        <br />
        <br />
        <br />
        <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      </div>
    </div>
  );
};

export default Home;
