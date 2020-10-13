import React from "react";
import styles from "./social-networks.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export type SocialNetworkConfig = {
  key: string;
  label: string;
  icon: React.ReactElement;
};

const socialNetworksInfo: SocialNetworkConfig[] = [
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    key: "twitter",
    label: "Twitter",
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: <FontAwesomeIcon icon={faFacebook} />,
  },
];

const SocialNetworksItem: React.FC<{ label: string, icon: React.ReactElement }> = ({ label, icon }) => {
  return <a className={styles.icon} title={label}>{icon}</a>;
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
