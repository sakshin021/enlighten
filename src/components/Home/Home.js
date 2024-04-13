import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import Quiz from "../Aptitude/Quiz";
// import styles from "./Home.module.css";
import DashboardPage from "./DashboardPage";
import { NotLoggedHomePage } from "./NotLoggedHome";

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
    <NotLoggedHomePage isAuthenticated={props.isAuthenticated} />
  )
}

export default Home;
