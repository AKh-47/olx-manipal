import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    // minlength: 8,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  //I DONT THINK WE NEED THESE FIELDS AS COMMENTS AND POSTS WILL HAVE A USER FIELD ON THE ANYWAYSK
  // comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  // posts: [{ type: Schema.Types.ObjectId }],
});

export default mongoose.model<any>("Post", postSchema);
