// api.js
import axios from "axios";

const baseURL = "/api"; // Assuming your API endpoints start with /api

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (username, email, password) => {
  try {
    const response = await api.post("/signup", { username, email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const submitQuiz = async (
  qNo,
  optionType,
  answerOption,
  correctAnswer,
  timer
) => {
  try {
    const response = await api.post("/createQuiz", {
      qNo,
      optionType,
      answerOption,
      correctAnswer,
      timer,
    });
    return response.data;
  } catch (error) {
    console.log("Quiz creation unsucessfull!!");
  }
};
