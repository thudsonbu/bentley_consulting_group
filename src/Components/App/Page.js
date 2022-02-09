import React from "react";
import "../../styles/Page.css";

const Page = (props) => {
  return <section className="Page">{props.children}</section>;
}

export default Page;
