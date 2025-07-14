const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const postRoutes = require('./controllers/postController');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

// Routes
app.use('/', postRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://mansoorabdullah580:mansoor0123@nodj6test.wtp7fip.mongodb.net/?retryWrites=true&w=majority&appName=nodj6tes', {
 
}).then(() => {
  console.log('MongoDB connected');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});
