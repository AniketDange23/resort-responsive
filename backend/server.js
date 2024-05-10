const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); // Importing cors module

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contact', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// MongoDB Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
  phone: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/contact', async (req, res) => {
  try {
    const { name, email, city, phone, message } = req.body;
    const newContact = new Contact({ name, email, city, phone, message });
    await newContact.save();
    console.log(newContact)
    res.status(200).json({ message: 'Form submission successful!' });
  } catch (error) {
    console.error('Form submission failed:', error.message);
    res.status(500).json({ error: 'Form submission failed. Please try again later.' });
  }
});

// Error handling middleware
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
