const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Devops Kubernetes Project</h1>
    <p>Frontend is running.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Frontend running on port ${PORT}`);
});
