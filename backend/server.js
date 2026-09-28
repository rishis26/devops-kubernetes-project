const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "DevOps Learning Project API v2",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
}

module.exports = app;
