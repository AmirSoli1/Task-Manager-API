const express = require('express');
const app = express();

const tasksRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}....`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
