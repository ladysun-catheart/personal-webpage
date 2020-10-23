import React from "react";
import style from "./listExp.module.scss";

const ListExp: React.FC<{
  yearBegin: number;
  yearEnd: number;
  place: string;
  position: string;
  description: string;
}> = ({ yearBegin, yearEnd, place, position, description }) => {
  return (
    <div className={style.cont}>
      <div className={style.info}>
        <div className={style.years}>
          {yearBegin}-{yearEnd}
        </div>
        <div className={style.place}>{place}</div>
        <div className={style.position}>{position}</div>
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
};

export default ListExp;
