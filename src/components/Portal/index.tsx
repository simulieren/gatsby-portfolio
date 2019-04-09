import React from "react";
import ReactDOM from "react-dom";
import { AnimationStateContainer } from "../../context/animationContext";

class Portal extends React.Component {
  el = document.createElement("div");

  static contextType = AnimationStateContainer.Context;

  componentDidMount() {
    if (document !== null) {
      document.body.insertAdjacentElement("beforeend", this.el);
      this.el.classList.add("portal");
      this.el.style.position = "relative";
    }
  }

  componentWillUnmount() {
    if (document !== null) {
      document.body.removeChild(this.el);
    }
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
