import React from "react";
import Box from "../../components/box";
import style from "./tech.module.scss";

import angularImg from "../../media/angular.svg";
import css3Img from "../../media/css3.svg";
import githubImg from "../../media/github.svg";
import html5Img from "../../media/html5.svg";
import mongoImg from "../../media/mongo.svg";
import nodeImg from "../../media/node.svg";
import reactImg from "../../media/react.svg";
import reduxImg from "../../media/redux.svg";
import sassImg from "../../media/sass.svg";
import visualCodeImg from "../../media/visual_code.svg";
import vueImg from "../../media/vue.svg";
import webpackImg from "../../media/webpack.svg";
import yarnImg from "../../media/yarn.svg";

const tecnoList = [
  { src: reactImg, alt: "React", title: "React" },
  { src: reduxImg, alt: "Redux", title: "Redux" },
  { src: angularImg, alt: "Angular", title: "Angular" },
  { src: vueImg, alt: "Vue", title: "Vue" },
  { src: nodeImg, alt: "Node", title: "Node" },
  { src: mongoImg, alt: "Mongo", title: "Mongo" },
  { src: yarnImg, alt: "Yarn", title: "Yarn" },
  { src: html5Img, alt: "Html", title: "Html" },
  { src: css3Img, alt: "CSS3", title: "CSS3" },
  { src: sassImg, alt: "SASS", title: "SASS" },
  { src: webpackImg, alt: "Webpack", title: "Webpack" },
  { src: visualCodeImg, alt: "Visual Code", title: "Visual Code" },
  { src: githubImg, alt: "Github", title: "Github" },
];

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
