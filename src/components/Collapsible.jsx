import React, { useState } from "react";

const Collapsible = ({ children }) => {
  const [showContent, setShowContent] = useState(false);
  const toggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="collapsible">
      <button onClick={toggle}>Show prompt</button>
      {showContent && <div className="content">{children}</div>}
    </div>
  );
};

export default Collapsible;
