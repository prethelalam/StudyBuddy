import express from "express";

const app = express();
const PORT = process.env.PORT || 4001;

// Middleware to parse JSON request bodies
app.use(express.json());

// Test route
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running!" });
});

// Example POST route
app.post("/api/echo", (req, res) => {
  res.json({ youSent: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
