import React, { useRef, useState } from "react";
import { SketchField, Tools } from "react-sketch";
import { Button } from "react-bootstrap";
// import { saveAs } from "file-saver";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const styles = {
  draw: {
    margin: "0 auto",
  },
};

function Draw() {
  const [send, setSend] = useState(false);
  const sketch = useRef();

  const handleSubmit = () => {
    const canvas = sketch.current.toDataURL();
    sentData(canvas);
    // var image = new Image();
    // image.src = canvas;
    // document.body.appendChild(image);
  };

  const handleReset = () => {
    console.log(sketch.current);
    sketch.current.clear();
    sketch.current._backgroundColor("black");
  };

  const sentData = (c) => {
    console.log(c);
    const headers = {
      // prettier-ignore
      'accept': 'application/json',
    };
    const fd = new FormData();
    fd.append("image", c);
    axios
      .post("http://127.0.0.1:8000/api/digits/", fd, headers)
      .then((res) => {
        console.log(res.data);
        setSend(true);
      })
      .catch((err) => console.log(err));
  };

  const getImageResult = (id) => {};

  return (
    <>
      {send && (
        <Alert variant="info">Successfully sent for Classification</Alert>
      )}
      <h1> Draw Field</h1>
      <SketchField
        ref={sketch}
        width="800px"
        height="800px"
        style={styles.draw}
        tool={Tools.Pencil}
        backgroundColor="black"
        lineColor="white"
        imageFormat="jpg"
        lineWidth={20} //60
      ></SketchField>
      <div className="mt-3">
        <Button onClick={handleSubmit} variant="primary">
          Send
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
