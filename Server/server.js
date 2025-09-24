const express = require("express");
const cors = require("cors");
const userRoutes = require("./router/MyRouter");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
