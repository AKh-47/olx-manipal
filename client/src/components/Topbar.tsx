import React, { ReactElement } from "react";

interface Props {}

export default function Topbar({}: Props): ReactElement {
  return (
    <div className="topbar">
      <div className="search">
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      <div className="switch">
        <span>Products</span>
        <span>Services</span>
      </div>
    </div>
  );
}
