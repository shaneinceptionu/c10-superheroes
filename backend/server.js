import express from "express";
import passport from "passport";
import session from "express-session";
import superheroRouter from "./routes/superhero.js";
import userRouter from "./routes/user.js";
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));

app.use("/api/superhero", superheroRouter);
app.use("/api/user", userRouter);

app.get("/test", (req, res) => {
  res.send("test endpoint working");
});
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
