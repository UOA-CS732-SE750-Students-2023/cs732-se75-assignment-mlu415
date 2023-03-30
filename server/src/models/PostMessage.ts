import mongoose from "mongoose";

const Schema = mongoose.Schema;
const postSchema = new Schema({
  title: String,
  inventory: Number,
  },
);

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
