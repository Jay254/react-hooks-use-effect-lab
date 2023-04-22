import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect( ()=> {
        const intervalId = setTimeout( () => setTimeRemaining(timeRemaining-1), 1000);

        return function cleanup() {
          clearTimeout(intervalId);
        }

  })

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }
  function handleReset() {
    setTimeRemaining(10);
    onAnswered(false);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining===0 ? handleReset() : timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
