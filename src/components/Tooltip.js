import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {React.Children.map(children, (child) => {
        const Tag = child.type;
        return (
          <Tag className="tooltip">
            {child.props.children}
            {show && <div className="tooltiptext">{text}</div>}
          </Tag>
        );
      })}
    </div>
  );
};

export default Tooltip;
