import { Component } from "react";
import "./App.css"

class AppClass extends Component {
  render() {
    return (
        <div>
            <img key={this.props.id} src={this.props.imgUrl} alt="" />
            <div>Hello</div>
        </div>
    )
  }
}

export default AppClass