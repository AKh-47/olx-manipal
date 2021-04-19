import React, { ReactElement } from "react";
import Post from "./Post";
import Topbar from "./Topbar";

interface Props {}

export default function Landing({}: Props): ReactElement {
  return (
    <div className="landing">
      <Topbar />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
