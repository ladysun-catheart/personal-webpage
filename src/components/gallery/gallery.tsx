import React, { useRef, useLayoutEffect } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import style from "./gallery.module.scss";

export type GalleryElement = {
  title: string;
  description: string;
};

const GallerySlide: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className={style.content}>
      <div className={style.text}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Gallery: React.FC<{
  list: GalleryElement[];
}> = ({ list }) => {
  const slideList = useRef<HTMLDivElement>(null);
  const scroll = useRef<HTMLUListElement>(null);
  const refLeft = useRef<HTMLDivElement>(null);
  const refRight = useRef<HTMLDivElement>(null);
  const item = useRef<HTMLLIElement>(null);
  let itemWidth: number;

  const scrollToNextItem = () => {
    const { scrollLeft, scrollWidth } = scroll.current as HTMLUListElement;
    if (scrollLeft < scrollWidth - itemWidth)
      scroll.current?.scrollBy({ left: itemWidth, top: 0, behavior: "smooth" });
    else scroll.current?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  const scrollToPrevItem = () => {
    const { scrollLeft, scrollWidth } = scroll.current as HTMLUListElement;
    if (scrollLeft != 0)
      scroll.current?.scrollBy({
        left: -itemWidth,
        top: 0,
        behavior: "smooth",
      });
    else
      scroll.current?.scrollTo({
        left: scrollWidth,
        top: 0,
        behavior: "smooth",
      });
  };

  useLayoutEffect(() => {
    refLeft.current?.addEventListener("click", scrollToPrevItem);
    refRight.current?.addEventListener("click", scrollToNextItem);
    itemWidth = item.current?.clientWidth as number;
  }, []);
  return (
    <div className={style.cont}>
      <div className={style.slideList} ref={slideList}>
        <ul className={style.scroll} ref={scroll}>
          {list.map((ele) => (
            <li className={style.slide} ref={item}>
              <GallerySlide {...ele} />
            </li>
          ))}
        </ul>
      </div>
      <div className={style.controls}>
        <div className={classnames(style.left, style.arrow)} ref={refLeft}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
        <div className={style.pages}></div>
        <div className={classnames(style.right, style.arrow)} ref={refRight}>
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
