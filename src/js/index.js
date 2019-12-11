import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
    // constructor to 
    constructor(props, context) {
        super(props, context);
        this.state = {
            viewText: "home",
            viewFlg: 1
        };
    }

    // switch the state
    renderChange() {
        let newFlg = this.state.viewFlg == 1 ? 0 : 1;
        this.setState({ viewFlg: newFlg });
    }

    // you can render DOM object
    renderTextDom() {
        return (
            <p className='text-center'>
                This is {this.state.viewFlg == 1 ? this.state.viewText : "sub page"} page.
            </p>
        );
    }

    // returning text
    renderText() {
        return "Hey hey! we are MeshiMuda!";
    }

    // render whole thing
    render() {
        return (
            <div>
                <h1 className='text-center'>{this.renderText()}</h1>
                {this.renderTextDom()}
                <button className='text-center' onClick={() => this.renderChange()}>Change</button>
            </div>
        );
    }
}
const app = document.getElementById("app");
ReactDOM.render(<Layout />, app);
