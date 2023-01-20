const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: [
    {
      id: { type: String, unique: true },
      name: { type: String, unique: true },
      address: { type: String, unique: true },
      price: { type: String, unique: true },
      rating: { type: String, unique: true },
      imgURL: { type: String, unique: true },
    },
  ],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
