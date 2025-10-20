import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // Clone the child element (like <h2> or <p>) and inject tooltip behavior
  return React.cloneElement(children, {
    className: `${children.props.className || ""} tooltip`.trim(),
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    children: (
      <>
        {children.props.children}
        {show && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });
};

export default Tooltip;
