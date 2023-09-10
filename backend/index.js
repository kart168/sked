const express = require('express');  // Import the Express library
const app = express();  // Create an Express app
const port = 3000;  // Define the port number

// Define what happens when someone visits the root URL ('/')
app.get('/', (req, res) => {
  res.send('Hello, World!');  // Send "Hello, World!" as the response
});

// Start the server on port 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
