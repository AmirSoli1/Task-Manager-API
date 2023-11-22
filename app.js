const express = require('express');
const app = express();
const port = 3000;

const tasksRouter = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middlewares/not-found');

app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', tasksRouter);
app.use(notFound);

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
