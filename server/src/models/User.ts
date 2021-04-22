import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  //WILL PRODUCER USERS AND CONSUMER USERS HAVE DIFFERENT SCHEMAS?
  //ALSO WILL THE TWO TYPES OF PRODUCER USERS HAVE DIFFERENT SCHEMAS (SERVICE PROVIDER AND SELLER)
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    // minlength: 8,
  },
  rating: {
    required: true,
    type: Number,
    rated: Boolean,
  },
  isBanned: {
    type: Boolean,
  },

  //I DONT THINK WE NEED THESE FIELDS AS COMMENTS AND POSTS WILL HAVE A USER FIELD ON THE ANYWAYSK
  // comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  // posts: [{ type: Schema.Types.ObjectId }],
});

export default mongoose.model<any>("User", userSchema);
