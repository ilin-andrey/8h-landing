import { NavigationBar } from "components/navigation";
import { NarrowLogo, BigLogo } from "components/logo";

import {
  Heart,
  Path,
  User,
  Shield,
  House,
  People,
} from "./icons";

import styles from "./index.module.css";

const ITEMS = [
  { icon: Heart, text: "Lorem ipsum" },
  { icon: Path, text: "Lorem ipsum" },
  { icon: User, text: "Lorem ipsum" },
  { icon: Shield, text: "Lorem ipsum" },
  { icon: House, text: "Lorem ipsum" },
  { icon: People, text: "Lorem ipsum" },
];

export function Header(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <NarrowLogo />
        <NavigationBar />
      </div>

      <div className={styles.grid}>
        <div className={styles["item-title"]}>
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>

        <div className={styles.item}>
          <div className={styles["sub-grid"]}>
            {ITEMS.map(({ icon: Icon, text }, idx) => (
              <div key={idx} className={styles["sub-grid-item"]}>
                <Icon />
                {text}
              </div>
            ))}
          </div>
        </div>

        <div className={styles["item-logo"]}>
          <BigLogo />
        </div>
      </div>
    </div>
  );
}
