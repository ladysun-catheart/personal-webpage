import React from "react";
import SocialNetworks from "../social-networks";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Tech</a>
          </li>
          <li>
            <a>Exp</a>
          </li>
          <li>
            <a>Works</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <hgroup>
        <h1>Lady Sun</h1>
        <h2>Front-End Developer</h2>
      </hgroup>
      <SocialNetworks />
    </header>
  );
};

export default Header;
