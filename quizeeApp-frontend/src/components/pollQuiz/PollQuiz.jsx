import React, { useState } from "react";
import "./QAquiz.css";

const Option1Text = () => {
  return (
    <div className="option1text">
      <div>
        <span>
          <input type="text" placeholder="Text" className="option1__text" />
        </span>
      </div>
      <div>
        <span>
          <input type="text" placeholder="Text" className="option1__text" />
        </span>
      </div>
      <div>
        <span>
          <input type="text" placeholder="Text" className="option1__text" />
        </span>
      </div>
      <div>
        <span>
          <input type="text" placeholder="Text" className="option1__text" />
        </span>
      </div>
    </div>
  );
};

const QAquiz = () => {
  const [option1clicked, setOption1Clicked] = useState(false);
  const [option2clicked, setOption2Clicked] = useState(false);
  const [option3clicked, setOption3Clicked] = useState(false);

  const handleClick1 = () => {
    setOption1Clicked(true);
  };
  const handleClick2 = () => {
    setOption2Clicked(true);
  };
  const handleClick3 = () => {
    setOption3Clicked(true);
  };
  return (
    <div className="main__box">
      <div className="create__quiz">
        <div className="upper__body">
          <div>
            <button type="button" className="btn-ques">
              {" "}
              1
            </button>
            <button type="button" className="btn-ques">
              {" "}
              2{" "}
            </button>
            <button type="button" className="btn-ques">
              {" "}
              3
            </button>
          </div>
          <p>Max 5 Questions </p>
        </div>
        <input
          type="text"
          placeholder="Poll Question "
          className="ques__poll"
        />
        <div className="mid__container">
          <div>
            <p> Option Type </p>
          </div>
          <div>
            <input
              type="radio"
              id="text"
              name="option"
              value="text"
              onClick={handleClick1}
            />
            <label for="text" className="option1__mid">
              Text
            </label>

            <input
              type="radio"
              id="imageURL"
              name="option"
              value="imageURL"
              onClick={handleClick2}
            />
            <label for="imageURL" className="option2__mid">
              Image URL
            </label>

            <input
              type="radio"
              id="textImageUrl"
              name="option"
              value="textImageUrl"
              onClick={handleClick3}
            />
            <label for="textImageUrl" className="option3__mid">
              Text & Image URL
            </label>
          </div>
        </div>

        {/* <Option1Text /> */}
        {/* <Option2ImageURL /> */}
        {/* <Option3ImageAndURL /> */}
        {option1clicked ? <Option1Text /> : null}
        {option2clicked ? <Option2ImageURL /> : null}
        {option3clicked ? <Option3ImageAndURL /> : null}

        <div className="box__3">
          <button type="submit" className="btn-ca">
            {" "}
            Cancel{" "}
          </button>
          <button type="submit" className="btn-co">
            {" "}
            Create Quiz{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QAquiz;

const Option2ImageURL = () => {
  return (
    <div className="option1text">
      <div>
        <span>
          <input
            type="text"
            placeholder="Image URL"
            className="option1__text"
          />
        </span>
      </div>
      <div>
        <span>
          <input
            type="text"
            placeholder="Image URL"
            className="option1__text"
          />
        </span>
      </div>
      <div>
        <span>
          <input
            type="text"
            placeholder="Image URL"
            className="option1__text"
          />
        </span>
      </div>
      <div>
        <span>
          <input
            type="text"
            placeholder="Image URL"
            className="option1__text"
          />
        </span>
      </div>
    </div>
  );
};
const Option3ImageAndURL = () => {
  return (
    <div className="option1textImage">
      <div>
        <span>
          <input type="text" placeholder="Text" className="option1__text" />
          <input
            type="text"
            placeholder="Image URL"
            className="option1__text"
          />
        </span>
      </div>
      <div>
        <span>
          <input type="text" placeholder="Text" className="option1__text" />
          <input
            type="text"
            placeholder="Image URL"
            className="option1__text"
          />
        </span>
      </div>
      <div>
        <span>
          <input type="text" placeholder="Text" className="option1__text" />
          <input
            type="text"
            placeholder="Image URL"
            className="option1__text"
          />
        </span>
      </div>
      <div>
        <span>
          <input type="text" placeholder="Text" className="option1__text" />
          <input
            type="text"
            placeholder="Image URL"
            className="option1__text"
          />
        </span>
      </div>
    </div>
  );
};
