const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://Lindaliy:GrV1yGlpcMIYrv2H@cluster0.pf1rxok.mongodb.net",
  )
  .then(() => {
    console.log("mongooes connected");
  })
  .catch((err) => console.log(err));
