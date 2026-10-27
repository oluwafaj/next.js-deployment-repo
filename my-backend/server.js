const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;

// Enable CORS for all origins in production (or specify your frontend URL)
app.use(
  cors({
    origin: "*", // Or specify: ["http://localhost:3000", "https://frontendnextjs-webapp-c2bgf9dgg8f6f7ft.westus3-01.azurewebsites.net"]
    credentials: true,
  })
);

app.use(express.json());

// 1. Users Endpoint (for fetching dashboard data)
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
