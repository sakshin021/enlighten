import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import Quiz from "../Aptitude/Quiz";
// import styles from "./Home.module.css";
import AptiImg from "./img/Apti.png";
import mockInterviewImg from './img/mockinterview.png';
import image from './img/images.jpeg';
import infoImg from './img/infoImg.jpeg';


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

        {props.isAuthenticated && (
          <h1>
            <Link to="/quiz">Quiz</Link>
          </h1>
        )}
      </div>
    </div>
  );
};

export default Home;
