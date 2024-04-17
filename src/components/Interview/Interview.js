import HashLoader from "react-spinners/HashLoader";
import React, { useEffect, useState } from "react";


const Interview = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div>
      {loading ? (
        <HashLoader
          color={"#104254"}
          loading={loading}
          size={50}
          classname="spinner"
          style={{ marginTop: "1rem", marginBottom: "2rem" }}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <iframe
            src="https://chatbot.mindpal.space/661a69cf2eca887fcccf5726"
            style={{ width: "100vw", height: "100vh" }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Interview;
