import React from "react";
// import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoutes from "./components/PrivateRoutes";
import Analytics from "./components/Analytics/Analytics";
import Signup from "./components/signUp/Signup";
// import CreateQuiz from "./components/createQuiz/CreateQuiz";
import DashBoard from "./components/dashboard/DashBoard";
import Login from "./components/login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
// import QAquiz from "./components/QAquiz/QAquiz";
//import QuizCompeleted from "./components/finalQuiz/QuizCompeleted";
function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        {/* <Route element ={<PrivateRoutes />} */}
        <Route path="login" element={<Login />} />
        {/* </Routes> */}
        {/* Dashboard routes  */}

        <Route path="dashboard" element={<DashBoard />}>
          {/* Analytics routes  */}
          <Route path="analytics" element={<Analytics />} />
          {/* Create Quiz  routes  */}
          {/* <Route path="createquiz" element={<QAquiz />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
