const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const userController = {};

// REGISTER USER
userController.register = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    // const savedUser = await User.create(req.body)
    // console.log(savedUser)
    res.status(201).json(savedUser);
  } catch (err) {
    return next({
      status: 400,
      log: 'Error in userController.register',
      message: { err: 'Error in userController.register' },
    });
  }
};

// LOGGING IN
userController.login = async (req, res, next) => {
  try {
    console.log('HERE: ',req.body)
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    return next({
      status: 400,
      log: 'Error in userController.login',
      message: { err: 'Error in userController.login' },
    });
  }
};

module.exports = userController;
