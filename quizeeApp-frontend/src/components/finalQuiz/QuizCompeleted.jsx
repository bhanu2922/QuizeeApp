import React from "react";
import "./quizCompleted.css";
const QuizCompeleted = () => {
  return (
    <div className="compeleteQuizScreen">
      <div className="quiz__modal">
        <div>
          <h2 className="text-quiz"> Congrats your Quiz is Published! </h2>
          <input type="text" placeholder="your link is here" />
        </div>
        <button type="button" className="finalButton">
          {" "}
          Share{" "}
        </button>
      </div>
    </div>
  );
};

export default QuizCompeleted;
