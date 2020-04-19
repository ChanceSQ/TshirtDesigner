import React from "react";
import { fabric } from "fabric";

export default class FabricCanvas extends React.Component {
  componentDidMount() {
    const canvas = new fabric.Canvas("main-canvas", {
      height: 500,
      width: 500,
    });

    canvas.add(this.props.rect);
    canvas.add(this.props.rect2);
  }

  render() {
    return <canvas id="main-canvas"></canvas>;
  }
}
