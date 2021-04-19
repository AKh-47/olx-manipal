import React, { ReactElement } from "react";

interface Props {}

export default function Post({}: Props): ReactElement {
  return (
    <div className="post">
      <h1>A Nice Cycle</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
        laborum veritatis totam numquam quam, quas nemo excepturi Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Praesentium laborum
        veritatis totam numquam quam, quas nemo excepturi
      </p>
      <h3>25$</h3>
    </div>
  );
}
