import Post from "../models/Post";
import Comment from "../models/Comment";

export const getComments = async (_: undefined, { postid }: any) => {
  let comments;
  try {
    if (!postid) comments = await Comment.find();
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

export const createComment = async (_: undefined, { text, postid }: any) => {
  let post;
  try {
    post = await Post.findById(postid);
  } catch (e) {
    return {
      success: false,
      message: "Post not found",
      comment: null,
    };
  }
  let newComment = new Comment({ text, post });
  try {
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
  { commentid: commentid }: any
) => {
  let comment;
  try {
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
