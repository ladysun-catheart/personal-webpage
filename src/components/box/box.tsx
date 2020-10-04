import React from "react";

const Box: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div>
      <header>
        <h2>{title}</h2>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Box;
