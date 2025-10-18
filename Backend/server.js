const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const authRoutes = require("./routes/auth");
const restaurant = require("./routes/restaurant");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurant);

app.get("/", (req, res) => {
  res.json({ message: "Swiggy Clone API is running" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});