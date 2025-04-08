// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express.js Server!');
});

// About route
app.get('/about', (req, res) => {
  res.json({ message: 'This is the About page', status: 'success' });
});

// POST route example
app.post('/contact', (req, res) => {
  const { name, message } = req.body;
  res.json({ received: { name, message } });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
