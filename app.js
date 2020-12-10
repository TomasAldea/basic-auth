const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

mongoose
  .connect("mongodb://localhost/auth-test", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    self.connection.collections["users"].drop();
  })
  .catch((err) => console.log("err", err));

app.use("/auth", authRoutes);

app.listen(4000, () => {
  console.log("server running on port 4000");
});
