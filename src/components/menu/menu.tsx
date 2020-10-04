import React from "react";
import styles from "./menu.module.scss";
import menuInfoList from "../../config/menu";

const MenuItem: React.FC<{ label: string }> = ({ label }) => {
  return <a>{label}</a>;
};

const Menu: React.FC = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        {menuInfoList.map((item) => (
          <MenuItem {...item} />
        ))}
      </li>
    </ul>
  );
};

export default Menu;
