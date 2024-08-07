const mongoose = require("mongoose");
const timeStamps = require("mongoose-timestamp");

const DemosSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

DemosSchema.plugin(timeStamps, {
  createdAt: "created_at",

  updatedAt: "updated_at",
});

const DemosModel = mongoose.model("Demo", DemosSchema);

module.exports = DemosModel;
