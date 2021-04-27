import User from "../models/User";
import Comment from "../models/Comment";
import Post from "../models/Post";

export const getPosts = async (_: undefined, { userid }: any) => {
  let posts;
  try {
    if (!userid) posts = await Post.find();
    else {
      let user = await User.findById(userid);
      posts = await Post.find({ user: user });
    }

    return {
      success: true,
      message: "Got posts successfully",
      posts: posts,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Couldn't fetch posts",
      post: null,
    };
  }
};

export const createPost = async (
  _: undefined,
  { title, description, price }: any
) => {
  let newPost = new Post({ title, description, price });
  try {
    await newPost.save();
    return {
      success: true,
      message: "New post created successfully",
      post: newPost,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Couldn't create post",
      post: null,
    };
  }
};

export const deletePost = async (_: undefined, { postid }: any) => {
  try {
    let post = await Post.findById(postid);
    await Post.findByIdAndDelete(postid);
    await Comment.deleteMany({ post: post });

    return {
      success: true,
      message: "Successfully deleted posts",
      post: post,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Couldn't delete post",
      post: null,
    };
  }
};
