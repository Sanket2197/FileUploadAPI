const express = require("express");

const connectDB = require("./config/db");

const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started @ PORT  ${PORT}`));
