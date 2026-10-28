const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/v1/users", (req, res) => {
  res.json({
    success: true,
    message: "Data fetched successfully from backend!",
    data: [
      { id: "1", name: "Oluwafemi", email: "femi@example.com" },
      { id: "2", name: "Alex Johnson", email: "alex@example.com" },
      { id: "3", name: "Sarah Connor", email: "sarah@example.com" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
