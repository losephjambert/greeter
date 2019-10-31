const express = require('express');

const server = express(); // creating an instance of an express server

server.get('/', (req, res) => {
  res.status(200).json({ hello: 'Web 23' });
});

const PORT = process.env.PORT || 4000
// the PORT will be set by heroku whne we deploy the application
console.log('Port ', PORT)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
