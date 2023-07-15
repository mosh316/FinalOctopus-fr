const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const { ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://moshelevi316:Mm316442383Mm@octoAssign.myf4oqw.mongodb.net/assignment";


async function run() {
  try {
    const mongooseOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    };

    await mongoose.connect(uri, mongooseOptions);
    await mongoose.connection.db.admin().ping();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const fruitsRoutes = require('./api/routes/fruits-route');
app.use('/api/routes/fruits-route', fruitsRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
