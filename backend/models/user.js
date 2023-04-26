import mongoose from "../mongoose.js";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const User = mongoose.model("user", userSchema, "users");

export const createUser = async (newUser) => {
  try {
    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    const createdUser = await User.create({
      ...newUser,
      password: hashedPassword,
    });
    return createdUser;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Duplicate Error");
    }
  }
};

export const verifyPassword = async (username, password) => {
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const userData = user.toObject();
    delete userData.password;
    return userData;
  } else {
    return null;
  }
};
