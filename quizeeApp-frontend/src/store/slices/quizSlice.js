import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
  name: "createQuiz",
  initialValues: {
    name: '',
    qNo : 0 ,
    optionType : [] , 
    timer: 0,
    quiz: [
      {
        question: '',
        options: [
          {
            value: '',
            label: '',
          },
        ],
        correct: [''],
      },
    ],
  },
  reducers: {
    submitQuiz: (state, action) => {
      const { qNo, optionType, answerOption, correctAnswer, timer } =
        action.payload;
      state.qNo = qNo;
      state.optionType = optionType;
      state.answerOption = answerOption;
      state.correctAnswer = correctAnswer;
      state.timer = timer;
    },
  },
});

export const { submitQuiz } = quizSlice.actions;
export default quizSlice.reducers;
