import React from "react";
import { SketchField, Tools } from "react-sketch";
import { Button } from "react-bootstrap";

function Draw() {
  return (
    <>
      <h1> Draw Field</h1>
      <SketchField
        width="800px"
        height="700px"
        tool={Tools.Pencil}
        backgroundColor="black"
        lineColor="white"
        imageFormat="jpg"
        lineWidth={20}
      ></SketchField>
      <div className="mt-3">
        <Button onClick={() => {}} variant="primary">
          Save
        </Button>
        {"   "}
        <Button onClick={() => {}} variant="secondary">
          Reset
        </Button>
      </div>
    </>
  );
}

export default Draw;
