import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  message: String,
  timestamp: String,
  name: String,
  received: Boolean,
});

export default mongoose.model("messageContent", whatsappSchema);
