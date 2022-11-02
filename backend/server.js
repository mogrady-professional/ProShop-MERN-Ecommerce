import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import path from 'path';
import productRoutes from './routes/product.routes.js';
import userRoutes from './routes/user.routes.js';
import orderRoutes from './routes/order.routes.js';
import uploadRoutes from './routes/upload.routes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config(); // this is a function that will read the .env file and add the variables to process.env

connectDB();

const app = express();
app.use(express.json()); // this will allow us to accept json data in the body

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Welcome to ProShop API');
});

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/uploads', uploadRoutes);

app.use('/uploads', express.static(path.join(path.resolve(), '/uploads')));

// Deploying to heroku
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../', 'frontend', 'build')));
//   app.get('*', (_req, res) =>
//     res.sendFile(path.join(__dirname, '../', 'frontend', 'build', 'index.html'))
//   );
// } else {
//   app.get('/', (_req, res) => {
//     res.send('Welcome to ProShop API');
//   });
// }

// Error Handler
app.use(notFound);
// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server listening in ${process.env.NODE_ENV} on PORT ${PORT}`.yellow.bold
  );
});
