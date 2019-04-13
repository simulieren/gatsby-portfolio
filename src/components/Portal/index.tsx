import React from "react";
import ReactDOM from "react-dom";
import { AnimationStateContainer } from "../../context/animationContext";

class Portal extends React.Component {
  el =
    typeof window !== "undefined" ? document.createElement("div") : undefined;

  static contextType = AnimationStateContainer.Context;

  componentDidMount() {
    if (this.el !== undefined) {
      document.body.insertAdjacentElement("beforeend", this.el);
      this.el.classList.add("portal");
      this.el.style.position = "relative";
    }
  }

  componentWillUnmount() {
    if (this.el !== undefined) {
      document.body.removeChild(this.el);
    }
  }

  render() {
    if (this.el === undefined) return null;
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Portal;
