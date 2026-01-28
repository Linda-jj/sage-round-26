const express = require("express");
const Name = require("./model/nameRegister");
require("./db/db");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Backend is running" });
});

app.get("/names", async (req, res) => {
  const name = await Name.find();
  res.set("Cache-Control", "no-store");

  res.status(200).json( name);
});

app.get("/names/:id", async (req, res) => {
  const name = await Name.findById(req.params.id);
  if (!name)
    return res.status(404).json({
      success: "false",
      message: "You Not registered  found",
    });
  return res.status(200).json(name);
});

app.post("/names", async (req, res) => {
  try {
    const name = new Name(req.body);
    await name.save();
    res.status(201).json(name);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: "false",
      message: "error",
    });
  }
});

app.delete("/names/:id", async (req, res) => {
  await Name.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: "false",
    message: "You application is Delated",
  });
});

app.put("/names/:id", async (req, res) => {
  const name = await Name.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(name);
});

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
