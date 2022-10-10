import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/product.routes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config(); // this is a function that will read the .env file and add the variables to process.env

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running');
});

// Product Routes
app.use('/api/products', productRoutes);

// Error Handler
app.use(notFound);
// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
  );
});
