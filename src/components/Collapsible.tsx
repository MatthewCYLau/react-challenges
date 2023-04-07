import React, { useState } from "react";

type ComponentWithChildProps = React.PropsWithChildren<{}>;

const Collapsible: React.FunctionComponent<ComponentWithChildProps> = ({
  children,
}) => {
  const [showContent, setShowContent] = useState(false);
  const toggle = () => {
    setShowContent(!showContent);
  };

  return (
    <div className="collapsible">
      <button className="action" onClick={toggle}>
        {showContent ? "Hide prompt" : "Show prompt"}
      </button>
      {showContent && <div className="content">{children}</div>}
    </div>
  );
};

export default Collapsible;
