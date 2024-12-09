import express from 'express';
import createHttpError from 'http-errors';
import { User } from '../entity/User';
import { AppDataSource } from '../config/data-source';

const router = express.Router();

router.post('/user', async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // Validate input
    if (!username || !email || !password) {
      return next(createHttpError(400, 'Missing required fields'));
    }

    const userRepository = AppDataSource.getRepository(User);

    // Check if user already exists
    const existingUser = await userRepository.findOne({
      where: { email },
    });

    if (existingUser) {
      return next(createHttpError(409, 'User already exists'));
    }

    // Create new user
    const user = userRepository.create({
      username,
      email,
      password,
    });

    // Save user to database
    const savedUser = await userRepository.save(user);

    res.status(201).json({
      message: 'User created successfully',
      user: savedUser,
    });
  } catch (error) {
    next(createHttpError(500, 'Error creating user'));
  }
});

export default router;
