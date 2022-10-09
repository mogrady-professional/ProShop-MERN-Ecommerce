import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

dotenv.config(); // this is a function that will read the .env file and add the variables to process.env

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server listening in ${process.env.NODE_ENV} on PORT ${PORT}`);
});
