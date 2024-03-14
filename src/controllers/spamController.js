const User = require('../models/userModel');
const Spam = require('../models/spamModel');
const { Op } = require('sequelize');

exports.markAsSpam = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    let spam = await Spam.findOne({ where: { phoneNumber: phoneNumber } });

    if (spam) {
      spam.spamReports += 1;
    } else {
      spam = new Spam({ phoneNumber, spamReports: 1 });
    }

    await spam.save();
    res.status(200).json({ message: 'Number marked as spam.' });
  } catch (error) {
    res.status(500).json({ error: 'Server error.' });
  }
};

exports.searchByName = async (req, res) => {
  try {
    const { name } = req.params;
    // Find all users with a name that matches the partial given name
    const likeName = `%${name}%`;
    const users = await User.findAll({ where: { name: { [Op.like]: likeName } } });
    const results = await Promise.all(users.map(async (user) => ({
      name: user.name,
      phoneNumber: user.phoneNumber,
      spamCount: (await Spam.findOne({ attributes: ['spamReports'], where: { phoneNumber: user.phoneNumber } })) || 0,
    })));

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.searchByNumber = async (req, res) => {
  try {
    const { phoneNumber } = req.params;
    //validate phone number
    if (phoneNumber.length < 10) {
      return res.status(400).json({ error: 'Invalid phone number.' });
    }
    const users = await User.findAll({ where: { phoneNumber: { [Op.like]: `%${phoneNumber}%` } } });
    const results = await Promise.all(users.map(async (user) => ({
      name: user.name,
      phoneNumber: user.phoneNumber,
      spamCount: (await Spam.findOne({ attributes: ['spamReports'], where: { phoneNumber: user.phoneNumber } })) || 0,
    })));

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};