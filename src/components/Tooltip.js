import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {visible && (
        <span
          className="tooltiptext"
          style={{
            position: "absolute",
            bottom: "125%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "black",
            color: "#fff",
            padding: "5px 8px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
