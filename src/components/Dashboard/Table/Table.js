import "./Table.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

import {
  collection,
  doc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../../../Firebase";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function BasicTable(props) {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    getQuizMarksForUser();
  }, []);

  const getQuizMarksForUser = async () => {
    try {
      const userDocRef = doc(db, "users", props.userId);
      const quizAttemptsCollectionRef = collection(userDocRef, "quizAttempts");
      const quizAttemptsQuery = query(quizAttemptsCollectionRef);
      const quizAttemptsSnapshot = await getDocs(quizAttemptsQuery);

      const data = [];
      quizAttemptsSnapshot.forEach((doc) => {
        console.log("Quiz Marks: ", doc.data().quizMarks);
        console.log("Timestamp: ", doc.data().timestamp);
        data.push({ quizMarks: doc.data().quizMarks, timestamp: doc.data().timestamp });
      });

      setQuizData(data); // Update state with quiz data
    } catch (error) {
      console.error("Error retrieving quiz marks: ", error);
    }
  };

  return (
    <div className="Table">
      <h3 style={{ textAlign: 'center', padding: '15px 0', color: '#12343b', fontSize: '1.2rem' }}>Recent Quiz Scores</h3>

      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Quiz Score</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Result</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {quizData.map((quiz, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {quiz.quizMarks}
                </TableCell>
                <TableCell align="left">{quiz.timestamp.toDate().toDateString()}</TableCell>
                <TableCell align="left">{quiz.timestamp.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</TableCell>
                <TableCell align="left">{quiz.quizMarks > 10 ? "Pass" : "Fail"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
