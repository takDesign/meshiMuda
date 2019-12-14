import React from "react";
import Header from "./Header"; // Header.js contains menu and target links
import Footer from "./Footer";
import Body from "./Body";

export default class Layout extends React.Component {

  // render header, content and footer
  render() {
    let components = [<Header />, <Body />, <Footer />];
    // console.log(this.state.pageName);
    // console.log(this.state.pageNum);
    return components;
  }
}