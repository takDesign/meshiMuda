import React from "react";
import Header from "./Header"; // Header.js contains menu and target links
import Footer from "./Footer";

export default class Layout extends React.Component {
  // constructor to switch pages
  constructor(props, context) {
    super(props, context);
    this.state = {
      pageName: "home",
      pageNum: 1
    };
  }

  // render header, content and footer
  render() {
    let components = [<Header />, <Footer />];
    console.log(this.state.pageName);
    console.log(this.state.pageNum);
    return (
      <div>
        {components}
      </div>
    );
  }
}