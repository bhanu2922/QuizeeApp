import express from "express";
import dotenv from "dotenv";
import router from "./routes/loginAndSignupRoutes.js";
dotenv.config();
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());

//api endpoints
app.get("/", (req, res) => {
  res.json("Hello from server side!!");
});


// login and SignUp routes -----------

router.post("/", signUpController);

router.post("/login", loginController);

app.listen(PORT, (req, res) => {
  console.log(`Server is listning to the port ${PORT}`);
});
