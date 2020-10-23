import React from "react";
import Box from "../../components/box";
import style from "./tech.module.scss";
import {tecnoList} from '../../config/tech'

const Tech = () => {
  return (
    <Box title="Technologies">
      <ul className={style.list}>
        {tecnoList.map((ele) => (
          <li className={style.element}>
            <img {...ele} className={style.pic} />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Tech;
