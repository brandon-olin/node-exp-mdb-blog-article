const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
      validate (email) {
        if (!validator.isEmail(email)) {
          throw new Error("Email provided is invalid!")
        }
      }
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 8,
      validate (password) {
        if (password.toLowerCase().includes('password')) {
          throw new Error("Password cannot contain the word 'password'!")
        }
      }
    }
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;