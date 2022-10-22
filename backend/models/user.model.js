import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt the password before saving
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10); // generate a salt
  this.password = await bcrypt.hash(this.password, salt); // hash the password
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
