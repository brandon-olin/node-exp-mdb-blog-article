const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Database
mongoose.connect('mongodb://localhost:27017/simple-blog-exercise', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to the database'))
.catch((err) => console.log(err))

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000')
})