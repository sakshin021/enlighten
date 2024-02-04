import { useEffect, useState } from "react";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { auth } from "./Firebase";

function App() {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        setIsAuthenticated(true);
      } else {
        setUsername("");
        setIsAuthenticated(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={username} isAuthenticated={isAuthenticated} />} />
          <Route path="/login" element={<LoginRegister signUp={false}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
