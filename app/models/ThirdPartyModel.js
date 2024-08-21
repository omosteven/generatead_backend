const mongoose = require("mongoose");
const timeStamps = require("mongoose-timestamp");

const ThirdPartySchema = new mongoose.Schema({
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

  organization: {
    type: String,
    required: true,
    default: "",
  },

  industry: {
    type: String,
    required: false,
    default: "",
  },
});

ThirdPartySchema.plugin(timeStamps, {
  createdAt: "created_at",

  updatedAt: "updated_at",
});

const ThirdPartyModel = mongoose.model("ramifiedAIWaitlist", ThirdPartySchema);

module.exports = ThirdPartyModel;
