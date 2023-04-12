import express from "express";
import superheroRouter from "./routes/superhero.js";
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/superhero", superheroRouter);

app.get("/test", (req, res) => {
  res.send("test endpoint working");
});
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
