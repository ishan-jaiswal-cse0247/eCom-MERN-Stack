import express from 'express';
import Product from '../models/productModel.js';
import prodata from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createProducts = await Product.insertMany(prodata.product);
  await User.deleteMany({});
  const createUsers = await User.insertMany(prodata.users);
  res.send({ createUsers, createProducts });
});
export default seedRouter;
