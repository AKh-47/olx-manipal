import User from "../models/User";
import Comment from "../models/Comment";
import Post from "../models/Post";
import checkAuth from "../helpers/checkAuth";

export const getPosts = async (
  _: undefined,
  { userid }: any,
  { user }: any
) => {
  //CHECKING IF LOGGED IN....
  const isNotLoggedIn = checkAuth(user);
  if (isNotLoggedIn) return isNotLoggedIn;

  let posts;
  try {
    //IF USERID PARAM IS NOT SPECIFIED
    if (!userid) {
      posts = await Post.find().populate();
      console.log({ posts });
    }

    //IF USERID PARAM IS SPECIFIED
    else {
      let user = await User.findById(userid);
      posts = await Post.find({ user: user }).populate();
      console.log("bruh");
      console.log({ posts });
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
  { title, description, price }: any,
  { user }: any
) => {
  //CHECKING IF LOGGED IN...
  const isNotLoggedIn = checkAuth(user);
  if (isNotLoggedIn) return isNotLoggedIn;

  try {
    //FETCHING USER WHO CREATED POST
    const mongoUser = await User.findById(user.id);
    let newPost = new Post({ title, description, price, user: mongoUser });
    console.log(newPost);
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

export const deletePost = async (
  _: undefined,
  { postid }: any,
  { user }: any
) => {
  //CHECK IF LOGGED IN
  const isNotLoggedIn = checkAuth(user);
  if (isNotLoggedIn) return isNotLoggedIn;
  try {
    let post = await Post.findById(postid);
    console.log({ user });

    //CHECKING IF POST BELONGS TO THE USER TRYING TO DELETE IT
    if (post.user.toString() !== user.id) {
      console.log("Do I come here");
      return {
        success: false,
        message: "You are not authorized to perform this action ",
      };
    }
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
