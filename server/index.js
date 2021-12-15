const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const { PORT, MONGOOSE_URL } = process.env;

const app = express();

app.use(cors());

app.use(express.json());

//Db connection
(async function () {
  try {
    mongoose.connect(MONGOOSE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Data base connected successfully");
  } catch (err) {
    console.log(err);
  }
})();

app.get("/api", (req, res) => {
  res.status(200).send("Welcome to user application");
});

const userRouter = require("./route/userRoute");
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT} successfully`);
});
