import React from "react";
import style from './box.module.scss'

const Box: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <div className={style.cont}>
      <header>
        <h2 className={style.title}>{title}</h2>
      </header>
      <div className={style.body}>{children}</div>
    </div>
  );
};

export default Box;
