import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import taskRouter from './Routes/taskRouter.js';
import userRouter from './Routes/userRouter.js';
import authRouter from './Routes/authRouter.js';
import mongoose from 'mongoose';
import 'express-async-errors';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
import { authenticateUser } from './middleware/authMiddleware.js';
import cookieParser from 'cookie-parser';



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); //it's a middleware to log the request
}
app.use(cookieParser()); //Extracts the cookie data from the HTTP request and converts it into a usable format that can be accessed by the server-side code
app.use(express.json()); //middleware order parsing the JSON data from the request body

// app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/tasks',authenticateUser, taskRouter);
app.use ('/api/v1/users',authenticateUser , userRouter);
app.use('/api/v1/auth',authRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});
//500 error
app.use(errorHandlerMiddleware);


const port = process.env.PORT || 5200 ;

// app.listen(port, () => {
//   console.log(`server running on PORT ${port}....`);
// });

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}