import { useEffect, useState } from "react";
import { resultInitialState } from "./constant";
import AnswerTimer from "../Aptitude/AnswerTimer";
import styles from "./MockApti.module.css";
import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../Firebase";
import HashLoader from "react-spinners/HashLoader";

const MockApti = ({ questions, userId }) => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [ans, setAns] = useState(null);
  const { question, options, answer } = questions[currQuestion];
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);
  const [inputAnswer, setInputAnswer] = useState("");
  const [sendResult, setSendResult] = useState(false);

  useEffect(() => {
    const getQuizMarksForUser = async () => {
      try {
        // Get a reference to the user document
        const userDocRef = doc(db, "users", userId);

        // Get a reference to the quiz attempts subcollection
        const quizAttemptsCollectionRef = collection(
          userDocRef,
          "quizAttempts"
        );

        // Query quiz attempts for the user
        const quizAttemptsQuery = query(quizAttemptsCollectionRef);

        // Get quiz attempts documents
        const quizAttemptsSnapshot = await getDocs(quizAttemptsQuery);

        // Iterate over quiz attempts documents
        quizAttemptsSnapshot.forEach((doc) => {
          console.log("Quiz Marks: ", doc.data().quizMarks);
          console.log("Timestamp: ", doc.data().timestamp);
        });
      } catch (error) {
        console.error("Error retrieving quiz marks: ", error);
      }
    };

    if (sendResult) {
      storeResult();
      getQuizMarksForUser();
      setSendResult(false);
    }
  }, [sendResult]);

  const onAnswerClick = (ans, index) => {
    setAnswerIdx(index);
    if (ans === answer) {
      setAns(true);
    } else {
      setAns(false);
    }
  };

  const onClickNext = (finalAnswer) => {
    setShowAnswerTimer(false);
    setAnswerIdx(null);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            answer: prev.answer + 1,
          }
        : {
            ...prev,
            wrongAnswer: prev.wrongAnswer + 1,
          }
    );

    console.log(result.score);

    if (currQuestion !== questions.length - 1) {
      setCurrQuestion((prev) => prev + 1);
    } else {
      setCurrQuestion(0);
      setShowResult(true);
      setSendResult(true);
    }

    setTimeout(() => {
      setShowAnswerTimer(true);
    });
  };

  const onClickTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
    setInputAnswer("");
  };

  const handleTimeUp = () => {
    setAns(false);
    onClickNext(false);
  };

  const handleInputChange = (event) => {
    setInputAnswer(event.target.value);

    if (event.target.value === answer) {
      setAns(true);
    } else {
      setAns(false);
    }
  };

  const storeResult = async () => {
    const userDocRef = doc(db, "users", userId);

    // Get a reference to the quiz attempts subcollection
    const quizAttemptsCollectionRef = collection(userDocRef, "quizAttempts");

    // Add a new document to the quiz attempts subcollection
    await addDoc(quizAttemptsCollectionRef, {
      quizMarks: result.score,
      timestamp: serverTimestamp(), // Timestamp of the quiz attempt
    });

    // await setDoc(doc(db, "users_quiz_data", userId), {
    //   quizMarks: result.score,
    //   timeStamp: serverTimestamp()
    // });
  };

  const getAnswerUI = () => {
    return (
      <ul>
        {options.map((choice, index) => (
          <li
            onClick={() => onAnswerClick(choice, index)}
            key={choice}
            className={
              answerIdx === index
                ? `${styles["selected-ans"]} ${styles.lista}`
                : styles.lista
            }
          >
            {choice}
          </li>
        ))}
      </ul>
    );
  };

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
          aria-label="Loading Spinner"
          data-testid="loader"
          className="spinner bg-sky-0"
          style={{ marginTop: "1rem", marginBottom: "2rem" }}
        />
      ) : (
        <div className={styles.QuizContainer}>
          <div className={styles["quiz-container"]}>
            {!showResult ? (
              <>
                {showAnswerTimer && (
                  <AnswerTimer duration={60} onTimeUp={handleTimeUp} />
                )}
                <div className="QuestionNo">
                  <span className={styles["active-question-no"]}>
                    {currQuestion + 1}
                  </span>
                  <span className={styles["total-question"]}>
                    /{questions.length}
                  </span>
                </div>
                <h2 className="quizh2">{question}</h2>
                {getAnswerUI()}
                <div className={styles.footer}>
                  <button
                    onClick={() => onClickNext(ans)}
                    disabled={answerIdx === null && !inputAnswer}
                  >
                    {currQuestion === questions.length - 1 ? "Finish" : "Next"}
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.result}>
                <h3>Result</h3>
                <p>
                  Total Questions : <span>{questions.length}</span>
                </p>
                <p>
                  Total Score : <span>{result.score}</span>
                </p>
                <p>
                  Correct Answers :{" "}
                  <span>{questions.length - result.wrongAnswer}</span>
                </p>
                <p>
                  Wrong Answers : <span>{result.wrongAnswer}</span>
                </p>
                {result.wrongAnswer > 2 ? (
                  <div>
                    <p className={`${styles.failed} text-lg font-bold mt-3`} style={{fontWeight: "bold"}}>
                      Sorry, you failed! Better luck next time.
                    </p>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" onClick={onClickTryAgain}>
                        Try Again
                      </button> <br/>
                      <Link to="/">
                      <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-3">
                        Home
                      </button>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <p className={`${styles.passed} text-lg font-bold mt-3`} style={{fontWeight: "bold"}}>
                      Congratulations, you passed!
                    </p>
                    <Link to="/Interview">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
                        Mock Interview
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MockApti;
