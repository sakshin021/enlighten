import { Link } from "react-router-dom";

export default function DashboardPage(props) {
    console.log(props)
  return (
    <>
      <br />
      <br />
      <br />
      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
      {props.isAuthenticated && (
        <h1>
          <Link to="/quiz">Quiz</Link>
          <Link to="/quizother">Quizother</Link>
        </h1>
      )}
    </>
  );
}
