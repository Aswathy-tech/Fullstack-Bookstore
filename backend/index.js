import express from "express";
import mongoose from "mongoose";
import booksRoute from './router/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());

app.use(cors({
  origin: ["https://fullstack-bookstore-frontend.vercel.app"],
  methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
  credentials: true
}));


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });
  
  app.use('/api', booksRoute);
  
  mongoose
    .connect('mongodb+srv://root:root4@bookstore-mern.av1mpo8.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
      console.log('App connected to database');
      app.listen(3000, () => {
        console.log(`App is listening to port: 3000`);
      });
    })
  
    .catch((error) => {
      console.log(error);
    });
export default app;
