import React, { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import questions from "./data";

const App = () => {
  const [question] = useState(questions);

  return (
    <div className="container">
      <h1>
        Questions And <br />
        Answers About
        <br />
        Login
      </h1>
      <section>
        {question.map((ques) => (
          <Question key={ques.id} {...ques} />
        ))}
      </section>
    </div>
  );
};

export default App;
