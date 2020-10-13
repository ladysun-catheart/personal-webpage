import React from "react";
import SocialNetworks from "../social-networks";
import Menu from "../menu";
import styles from "./header.module.scss";
import { TITLE_PAGE } from "src/config/common";

const TitleWord: React.FC<{ word: string; isLastWord: boolean }> = ({
  word,
  isLastWord,
}) => (
  <>
    <span className={styles.firstLetter}>{word[0].toUpperCase()}</span>
    <span className={styles.restWord}>{word.substr(1)}{!isLastWord && " "}</span>
  </>
);

const Title: React.FC<{ title: string }> = ({ title }) => {
  const words = title.split(" ");
  const spanWords: React.ReactElement[] = words.map((word, index) => (
    <TitleWord word={word} isLastWord={index === words.length - 1} />
  ));
  return <h1 className={styles.title}>{spanWords.map((word) => word)}</h1>;
};

const Header: React.FC = () => {
  return (
    <header className={styles.cont}>
      <nav className={styles.nav}>
        <Menu />
      </nav>
      <hgroup className={styles.contTitle}>
        <Title title={TITLE_PAGE} />
        <h2 className={styles.subtitle}>Front-End Developer</h2>
      </hgroup>
      <div className={styles.socialNetworks}>
        <SocialNetworks />
      </div>
    </header>
  );
};

export default Header;
