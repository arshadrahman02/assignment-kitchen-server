const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());

const chefData = require("./chef_data.json");
const recipeData = require("./recipe_data.json");

app.get("/", (req, res) => {
  res.json({ message: "Hello Server Running" });
});

app.get("/chefData", (req, res) => {
  res.send(chefData);
});

app.get("/recipeData/:id", (req, res) => {
  const id = req.params.id;
  const result = recipeData.find((data) => data.recipe_id == id);
  res.send(result);
});

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
