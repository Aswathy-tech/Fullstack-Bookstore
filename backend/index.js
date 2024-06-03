import express from "express";
import mongoose from "mongoose";
import booksRoute from './router/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());

 app.use(cors(
  origin: ["https://fullstack-bookstore-frontend.vercel.app"],
  methods: ["POST", "GET"],
  credentials: true
  
 ));


app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });
  
  app.use('/books', booksRoute);
  
  mongoose
    .connect(mongoDBURL)
    .then(() => {
      console.log('App connected to database');
      app.listen(3000, () => {
        console.log(`App is listening to port: 3000`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
