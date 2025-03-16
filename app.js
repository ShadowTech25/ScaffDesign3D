import React from "react";

function App() {
  return (
    <div>
      <h1>Welcome to ScaffDesign</h1>
      <p>Your scaffolding design tool is under construction.</p>
    </div>
  );
}

export default App;
const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all GET requests by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the backend server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});