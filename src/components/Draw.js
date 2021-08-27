import React, { useRef } from "react";
import { SketchField, Tools } from "react-sketch";
import { Button } from "react-bootstrap";
import { saveAs } from "file-saver";

const styles = {
  draw: {
    margin: "0 auto",
  },
};

function Draw() {
  const sketch = useRef();

  const handleSubmit = () => {
    const canvas = sketch.current.toDataURL();
    var image = new Image();
    image.src = canvas;
    document.body.appendChild(image);
    // saveAs(canvas, image.jpg);
  };

  const handleReset = () => {
    console.log(sketch.current);
    sketch.current.clear();
    sketch.current._backgroundColor = "black";
  };

  const sentData = (c) => {
    console.log(c);
  };

  const getImageResult = (id) => {};

  return (
    <>
      <h1> Draw Field</h1>
      <SketchField
        ref={sketch}
        width="800px"
        height="500px" //800px
        style={styles.draw}
        tool={Tools.Pencil}
        backgroundColor="black"
        lineColor="white"
        imageFormat="jpg"
        lineWidth={20} //60
      ></SketchField>
      <div className="mt-3">
        <Button onClick={handleSubmit} variant="primary">
          Save
        </Button>
        {"   "}
        <Button onClick={handleReset} variant="secondary">
          Reset
        </Button>
      </div>
    </>
  );
}

export default Draw;
