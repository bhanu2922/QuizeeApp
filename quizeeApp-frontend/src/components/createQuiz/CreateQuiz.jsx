import React from "react";
import "./createQuiz.css";
const CreateQuiz = () => {
  return (
    <div className="main__box">
      <div className="create__quiz ">
        <div>
          <input type="text" placeholder="Quiz name " />
        </div>
        <div className="box__2">
          <p>
            {" "}
            Quiz Type{" "}
            <span>
              {" "}
              <button type="button" className="btn btn-qa">
                Q&A{" "}
              </button>
            </span>
            <span>
              <button type="button" className="btn btn-poll">
                Poll Type{" "}
              </button>
            </span>
          </p>
        </div>

        <div className="box__3">
          <button type="submit" className="btn-ca">
            {" "}
            Cancel{" "}
          </button>
          <button type="submit" className="btn-co">
            {" "}
            Continue{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
