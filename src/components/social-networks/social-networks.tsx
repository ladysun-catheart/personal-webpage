import React from "react";
import styles from "./social-networks.module.scss";
import socialNetworksInfo from "../../config/social-networks";

const SocialNetworksItem: React.FC<{ label: string }> = ({ label }) => {
  return <a>{label}</a>;
};

const SocialNetworks: React.FC = ({ children }) => {
  return (
    <ul className={styles.list}>
      {socialNetworksInfo.map((item) => (
        <li className={styles.item}>
          <SocialNetworksItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default SocialNetworks;
