import React from "react";
import SocialNetworks from "../social-networks";
import Menu from "../menu";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.cont}>
      <nav className={styles.nav}>
        <Menu />
      </nav>
      <hgroup className={styles.conTitle}>
        <h1 className={styles.title}>Lady Sun</h1>
        <h2 className={styles.subtitle}>Front-End Developer</h2>
      </hgroup>
      <div className={styles.socialNetworks}>
        <SocialNetworks />
      </div>
    </header>
  );
};

export default Header;
