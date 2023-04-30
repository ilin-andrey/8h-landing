import { Button } from "components/shared/button";
import { CONFIG } from "config/app";

import { Pair } from "./icons";

import styles from "./index.module.css";

export function Donate(): JSX.Element {
  return (
    <div id={CONFIG.COMPONENTS_ID.DONATE} className={styles.container}>
      <div>
        <Pair />
      </div>
      <div>
        <h2>Let&apos;s donate together!</h2>

        <div className={styles["form-container"]}>
          <div className={styles.form}>
            <div>
              <label htmlFor="sum">Enter the amount of assistance</label>
              <div className={styles.input}>
                <input
                  id="sum"
                  type="number"
                  pattern="[0-9]"
                  placeholder="Sum"
                />
                <Button onClick={() => undefined}>Help</Button>
              </div>
            </div>

            <div className={styles.input}>
              <div className={styles.over5000}>
                For payments over $ 5,000, use our details
              </div>
              <Button onClick={() => undefined}>Details</Button>
            </div>
          </div>

          <div className={styles.form}>
            <div className={styles.input}>
              <div className={styles.checkout}>Checkout with</div>
              <Button onClick={() => undefined}>PayPal</Button>
            </div>

            <div className={styles.input}>
              <div className={styles.checkout}>Checkout with</div>
              <Button onClick={() => undefined}>Binance</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
