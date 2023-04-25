import mongoose from "../mongoose.js";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("user", userSchema, "users");

export const createUser = async (newUser) => {
  try {
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    const createdUser = await User.create(newUser);
    return createdUser;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Duplicate Error");
    }
  }
};

export const updateUser = async (id, newUserData) => {
  const response = await User.findByIdAndUpdate(id, newUserData, {
    new: true,
  });
  return response;
};

export const deleteUser = async (id) => {
  const response = await User.findByIdAndDelete(id);
  return response;
};

export const login = async (username, password) => {
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.password)) {
    return user;
  } else {
    return null;
  }
};
