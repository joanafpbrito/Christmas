import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());
// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/users", async (req, res) => {
  const fileContent = await fs.readFile("./users.json");

  const contributorsData = JSON.parse(fileContent);

  res.status(200).json({ contributorsData });
});

app.post("/contribution", async (req, res) => {
  console.log(req.body);

  const fileContent = await fs.readFile("./users.json");
  const contributions = JSON.parse(fileContent);

  const newItem = req.body;
  contributions.push(newItem);

  await fs.writeFile("./users.json", JSON.stringify(contributions, null, 2));
  res.status(200).json({ message: "New Item added to the bag! Puppys send Love." });
});






//rotas de users

// 404
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  res.status(404).json({ message: "404 - Not Found" });
});

app.listen(2024);