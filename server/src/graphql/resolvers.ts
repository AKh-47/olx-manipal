import { createPost, deletePost, getPosts } from "../controllers/post";
import User from "../models/User";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/comment";

export default {
  Post: {
    user: async (parent: any) => {
      const foundUser = await User.findById(parent.user);
      return foundUser;
    },
  },

  Comment: {
    user: async (parent: any) => {
      const foundUser = await User.findById(parent.user);
      return foundUser;
    },
  },
  Query: {
    greeting: () => ({ success: true, message: "Hello World" }),
    getComments,
    getPosts,
  },
  Mutation: {
    createPost,
    deletePost,
    createComment,
    deleteComment,
  },
};
