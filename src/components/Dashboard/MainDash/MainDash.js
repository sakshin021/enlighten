import Cards from "../Cards/Cards";
import BasicTable from "../Table/Table";
import React, { useEffect, useState } from "react";
import "./MainDash.css";
import HashLoader from "react-spinners/HashLoader";

const MainDash = (props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="MainDash">
      {loading ? (
        <HashLoader
          color={"#C484F3"}
          loading={loading}
          size={50}
          className={"spinner"}
        />
      ) : (
        <div>
          <h1
            style={{
              textAlign: "center",
              paddingBottom: "25px",
              fontSize: "2rem",
              color: "#2d545e",
            }}
          >
            Dashboard
          </h1>
          <Cards />
          <BasicTable userId={props.userId} />
        </div>
      )}
    </div>
  );
};

export default MainDash;
