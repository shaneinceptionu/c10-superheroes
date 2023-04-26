import React from "react";

const WrapperComponent = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        border: "1px solid red",
        backgroundColor: "pink",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default WrapperComponent;
