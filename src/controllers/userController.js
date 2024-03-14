const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    //form validation
    if (!req.body.name || !req.body.phoneNumber || !req.body.password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    //check if user already exists
    const fuser = await User.findOne({ where: { phoneNumber: req.body.phoneNumber } });
    if (fuser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    //create new user
    const user = new User({
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email ? req.body.email : '',
      password: hashedPassword,
    });
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { phoneNumber: req.body.phoneNumber } });
    if (!user) {
      return res.status(400).json({ message: 'Cannot find user' });
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ _id: user.id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
      res.header('auth-token', token).json(token);
    } else {
      res.status(400).json({ message: 'Invalid password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.viewProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.phoneNumber) user.phoneNumber = req.body.phoneNumber;
    if (req.body.password) user.password = await bcrypt.hash(req.body.password, 10);
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}