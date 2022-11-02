// Validate the token
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import expressAsyncHandler from 'express-async-handler'; // This is a middleware that handles async errors

// Route protection middleware
const protect = expressAsyncHandler(async (req, res, next) => {
  let token;

  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    console.log('Token  found');

    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password'); // get the decoded id from the token and get the user from the database without the password
      console.log(decoded); // { id: '5f9e1b9b9c1b9c1b9c1b9c1b', iat: 1605000000, exp: 1605000000 }
      next(); // continue to the next middleware
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorised as an admin');
  }
};

export { protect, isAdmin };
