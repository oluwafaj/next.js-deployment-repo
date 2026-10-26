const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3002;

// Enable CORS so http://localhost:3000 can talk to this server
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

// 1. Users Endpoint (for fetching dashboard data)
app.get("/api/v1/users", (req, res) => {
  res.json({
    success: true,
    message: "Data fetched successfully from backend on port 3002!",
    data: [
      { id: "1", name: "Oluwafemi", email: "femi@example.com" },
      { id: "2", name: "Alex Johnson", email: "alex@example.com" },
      { id: "3", name: "Sarah Connor", email: "sarah@example.com" },
    ],
  });
});

// 2. Auth Login Endpoint
app.post("/api/v1/auth/login", (req, res) => {
  const { email, password } = req.body;

  // Simple demo credentials check
  if (email === "user@example.com" && password === "password123") {
    return res.json({
      success: true,
      token: "mock-jwt-token-xyz-123",
      user: {
        id: "1",
        email: "user@example.com",
        name: "Oluwafemi",
      },
    });
  }

  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server is running on http://localhost:${PORT}`);
});
