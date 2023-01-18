const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv');
const path = require('path');
const PORT = process.env.PORT || 3001
const userRouter = require('./routes/userRouter')
const locationRouter = require('./routes/locationRouter')

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// ROUTE HANDLERS
app.use('/users', userRouter);
app.use('/locations', locationRouter);

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
