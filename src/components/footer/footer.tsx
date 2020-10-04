import React from "react";
import SocialNetworks from "../social-networks";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.cont}>
      <SocialNetworks />
    </footer>
  );
};

export default Footer;
