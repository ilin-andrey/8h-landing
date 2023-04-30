import { CONFIG } from "config/app";
import { NavigationBar } from "components/navigation";
import { NarrowLogo } from "components/logo";
import { Twitter, Facebook, Instagram } from "./icons";

import styles from "./index.module.css";

const YEAR = new Date().getFullYear();

export function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <NarrowLogo />
        <div className={styles.copyrights}>
          All rights reserved. Copyright @ Landing Page Project, {`${YEAR}`}
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.title}>Our social networks</div>
        <div className={styles.icons}>
          <a href={CONFIG.LINKS.TWITTER} target="_blank" rel="noreferrer">
            <Twitter />
          </a>
          <a href={CONFIG.LINKS.INSTAGRAM} target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href={CONFIG.LINKS.FACEBOOK} target="_blank" rel="noreferrer">
            <Facebook />
          </a>
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.title}>Site navigation</div>
        <NavigationBar />
      </div>
    </footer>
  );
}
