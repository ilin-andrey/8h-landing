import { CONFIG } from "config/app";

import { Shield } from "./icons";

import styles from "./index.module.css";

export function About(): JSX.Element {
  return (
    <div id={CONFIG.COMPONENTS_ID.ABOUT} className={styles.container}>
      <h1>About project</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat...
      </p>

      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={styles.item}>
            <Shield />
            Lorem ipsum
          </div>
        ))}
      </div>
    </div>
  );
}
