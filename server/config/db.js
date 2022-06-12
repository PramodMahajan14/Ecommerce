const mongoose = require("mongoose");

const DB = process.env.MONGO_URI;
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection sucessfully");
  })
  .catch((err) => console.log("connection faild"));
