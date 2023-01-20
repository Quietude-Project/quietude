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
    console.log(err);
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
    // console.log('HERE: ',req.body)
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ msg: 'User does not exist' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie('user_id', user._id);
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

// SAVING FAVORITES
userController.saveFavorites = async (req, res, next) => {
  try {
    console.log('in favorite patch req: ', req.body);
    const { user_id, id, name, address, price, rating, imgURL } = req.body;

    // { $push: { favorites: req.body } }

    const patchUser = await User.findByIdAndUpdate(
      user_id,
      {
        $push: {
          favorites: {
            id: id,
            name: name,
            address: address,
            price: price,
            rating: rating,
            imgURL: imgURL,
          },
        },
      },
      { new: true }
    );

    const favoriteArr = [...patchUser.favorites];
    const cache = {};
    favoriteArr.map((el) => {
      const name = el.name;

      if (!Object.hasOwn(cache, name)) cache[name] = el;
    });

    // console.log('ASDasdASD unique favorites list: ', Object.values(cache));
    // console.log('length of favorites is :', Object.values(cache).length);

    const removeDupsArr = Object.values(cache);

    const removeDupsUser = await User.findByIdAndUpdate(
      user_id,
      { favorites: removeDupsArr },
      { new: true }
    );
    // console.log('THIS IS THE FINAL ONE', removeDupsUser)
    return res.status(200).json(removeDupsUser);
  } catch (err) {
    return next({
      status: 400,
      log: 'Error in userController.saveFavorites',
      message: { err: 'Error in userController.saveFavorites' },
    });
  }
};

userController.removeFavorite = async (req, res, next) => {
  try {
    console.log('in favorite patch req: ', req.body);
    const { user_id, name } = req.body;

    const user = await User.findById(user_id);

    const favArray = [...user.favorites];
    const updated = favArray.filter((el) => el.name !== name);

    const deleteFav = await User.findByIdAndUpdate(
      user_id,
      { favorites: updated },
      { new: true }
    );

    // console.log('favs after delete: ', deleteFav)
    return res.status(200).json(deleteFav);
  } catch (err) {
    return next({
      status: 400,
      log: 'Error in userController.removeFavorites',
      message: { err: 'Error in userController.removeFavorites' },
    });
  }
};

userController.getFavorites = async (req, res, next) => {
  try {
    const { id } = req.params
    const userFav = await User.findById(id)
    return res.status(200).json(userFav)
  } catch (err) {
    return next({
      status: 400,
      log: 'Error in userController.getFavorites',
      message: { err: 'Error in userController.getFavorites' },
    });
  }
};



module.exports = userController;
