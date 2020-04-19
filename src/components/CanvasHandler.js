import React from "react";
import { fabric } from "fabric";
import FabricCanvas from "./FabricCanvas";

const FC = (props) => {
  return (
    <FabricCanvas
      rect={
        new fabric.Rect({
          top: 100,
          left: 100,
          width: 60,
          height: 70,
          fill: "red",
        })
      }
    />
  );
};

export default FC;
