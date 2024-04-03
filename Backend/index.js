const express = require('express');
const app=express();
const cropPriceRoutes = require('./routes/cropPriceRoutes');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());

const mongoURI = "mongodb+srv://vibhuchauhan37:AFeuKnd5Xu2FX45w@cluster0.jpb6sag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// console.log(mongoURI);

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

// Use cropPriceRoutes for /proposeCropPrice route
app.use('/v1', cropPriceRoutes);

// Define the port number your server will listen on
const port = 3737;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});