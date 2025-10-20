import React, { useState } from "react";

const Tooltip = ({ text, Tag, children }) => {
  const [show, setShow] = useState(false);

  return (
    <Tag
      className="tooltip"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <div className="tooltiptext">{text}</div>}
    </Tag>
  );
};

export default Tooltip;