import { useEffect, useState } from "react";
import { resultInitialState } from "./constants";
import AnswerTimer from "./AnswerTimer";
import styles from "./Quiz.module.css";
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

const Quiz = ({ questions, userId }) => {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const { question, choices, correctAnswer, type } = questions[currQuestion];
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

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = (finalAnswer) => {
    setShowAnswerTimer(false);
    setAnswerIdx(null);
    setResult((prev) =>
      finalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswer: prev.correctAnswer + 1,
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
    setAnswer(false);
    onClickNext(false);
  };

  const handleInputChange = (event) => {
    setInputAnswer(event.target.value);

    if (event.target.value === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
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
    if (type === "FIB") {
      return <input value={inputAnswer} onChange={handleInputChange} />;
    }

    return (
      <u1>
        {choices.map((choice, index) => (
          <li
            onClick={() => onAnswerClick(choice, index)}
            key={choice}
            className={answerIdx === index ? `${styles["selected-ans"]}` : null}
          >
            {choice}
          </li>
        ))}
      </u1>
    );
  };

  return (
    <div className={styles.QuizContainer}>
      <div className={styles["quiz-container"]}>
        {!showResult ? (
          <>
            {/* {showAnswerTimer && (
              <AnswerTimer duration={5} onTimeUp={handleTimeUp} />
            )} */}
            <div className="QuestionNo">
            <span className={styles["active-question-no"]}>
              {currQuestion + 1}
            </span>
            <span className={styles["total-question"]}>
              /{questions.length}
            </span>
            </div>
            <h2>{question}</h2>
            {getAnswerUI()}
            <div className={styles.footer}>
              <button
                onClick={() => onClickNext(answer)}
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
              Correct Answers : <span>{result.correctAnswer}</span>
            </p>
            <p>
              Wrong Answers : <span>{result.wrongAnswer}</span>
            </p>
            <button onClick={onClickTryAgain}>Try again</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
