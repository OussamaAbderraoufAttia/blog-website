const mongoose = require('mongoose');

// Replace `blog_app` with your own database name
mongoose.connect('mongodb://localhost:27017/new-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Check if the connection is successful
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database!');
});

module.exports = db;
