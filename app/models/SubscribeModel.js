const mongoose = require("mongoose");
const timeStamps = require("mongoose-timestamp");

const SubscribersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

SubscribersSchema.plugin(timeStamps, {
  createdAt: "created_at",

  updatedAt: "updated_at",
});

const SubscribersModel = mongoose.model("Subscribers", SubscribersSchema);

module.exports = SubscribersModel;
