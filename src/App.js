import { useEffect, useState } from "react";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { auth } from "./Firebase";
import Quiz from "./components/Aptitude/Quiz";
import Dashboard from "./components/Dashboard/Dashboard";
import Interview from "./components/Interview/Interview";
import MockApti from './components/MockApti/MockApti';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      let newQuestionsArr = [];
      for (let i = 1; i <= 15; i++) {
        const response = await fetch("https://aptitude-api.vercel.app/Random");
        const questionsResponse = await response.json();
        newQuestionsArr = [...newQuestionsArr, questionsResponse];
      }
      setQuestions(newQuestionsArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        setIsAuthenticated(true);
        setUserId(user.uid);
      } else {
        setUsername("");
        setIsAuthenticated(false);
        setUserId("");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home name={username} isAuthenticated={isAuthenticated} />}
          />
          <Route path="/login" element={<LoginRegister signUp={false} />} />
          <Route
            path="/quiz"
            element={
              questions.length && <Quiz questions={questions} userId={userId} />
            }
          />
          <Route path="/dashboard" element={<Dashboard userId={userId} />} />
          <Route path="/interview" element={<Interview />} />
          <Route path='/aptiInterview'  element={
              questions.length && <MockApti questions={questions} userId={userId} />
            } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
