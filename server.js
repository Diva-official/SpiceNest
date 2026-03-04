const express = require('express');
const mongoose = require('mongoose');
const analyticsRoutes = require('./routes/analytics');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected..'))
    .catch(err => console.error('MongoDB connection error:', err));

// Initialize analytics API routes
app.use('/api/analytics', analyticsRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
