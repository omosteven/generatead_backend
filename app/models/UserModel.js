const mongoose = require("mongoose");
const timeStamps = require("mongoose-timestamp");

const UsersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: false,
    default: "",
  },
});

UsersSchema.plugin(timeStamps, {
  createdAt: "created_at",

  updatedAt: "updated_at",
});

const UsersModel = mongoose.model("Users2", UsersSchema);

module.exports = UsersModel;
