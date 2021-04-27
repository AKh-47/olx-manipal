import { createPost, deletePost, getPosts } from "../controllers/post";
import {
  createComment,
  deleteComment,
  getComments,
} from "../controllers/comment";

export default {
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
