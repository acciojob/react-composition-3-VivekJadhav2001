import React from "react";
import Tooltip from "./Tooltip";

function Composition() {
  return (
    <div>
      <Tooltip text="Tooltip for heading">
        <h2>Hover over this heading</h2>
      </Tooltip>

      <Tooltip text="Tooltip for paragraph">
        <p>Hover over this paragraph</p>
      </Tooltip>
    </div>
  );
}

export default Composition;
