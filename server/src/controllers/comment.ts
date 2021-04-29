import Post from "../models/Post";
import User from "../models/User";

import Comment from "../models/Comment";
import checkAuth from "../helpers/checkAuth";

export const getComments = async (
  _: undefined,
  { postid }: any,
  { user }: any
) => {
  let comments;
  try {
    //CHECKING IF LOGGED IN....
    const isNotLoggedIn = checkAuth(user);
    if (isNotLoggedIn) return isNotLoggedIn;

    //IF POSTID PARAM IS SPECIFIED
    if (!postid) comments = await Comment.find();
    //IF POSTID PARAM ISN'T SPECIFIED
    else {
      let post = await Post.findById(postid);
      comments = await Comment.find({ post });
    }
    console.log(comments);

    return {
      success: true,
      message: "Got comments successfully",
      comments: comments,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Couldn't fetch posts",
      comments: null,
    };
  }
};

export const createComment = async (
  _: undefined,
  { text, postid, userid }: any,
  { user }: any
) => {
  try {
    let mongoPost, mongoUser;
    //FETCHING POST AND USER RELATED TO THE COMMENT
    mongoPost = await Post.findById(postid);
    mongoUser = await User.findById(userid);
    let newComment = new Comment({ text, post: mongoPost, user: mongoUser });
    await newComment.save();
    return {
      success: true,
      message: "New comment added successfully",
      comment: newComment,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Internal server error",
      post: null,
    };
  }
};

export const deleteComment = async (
  _: undefined,
  { commentid: commentid }: any,
  { user }: any
) => {
  let comment;
  try {
    //CHECK IF LOGGED IN
    const isNotLoggedIn = checkAuth(user);
    if (isNotLoggedIn) return isNotLoggedIn;

    let comment = await Post.findById(commentid);

    //CHECKING IF POST BELONGS TO THE USER TRYING TO DELETE IT
    if (comment.user.toString() !== user.id) {
      console.log("Do I come here");
      return {
        success: false,
        message: "You are not authorized to perform this action ",
      };
    }
    comment = await Comment.findByIdAndDelete(commentid);
    return {
      success: true,
      message: "Deleted Comment",
      comment: comment,
    };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Couldn't delete comment",
      comment: null,
    };
  }
};
