const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <h1>ATLAS App One</h1>
    <h4>Request Header Info:</h4>
    <p>${JSON.stringify(req.headers)}</p>
  `);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
