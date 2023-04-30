import { FormEvent, useCallback } from "react";

import { CONFIG } from "config/app";
import { Button } from "components/shared/button";
import { Pin, Phone, Email } from "./icons";

import styles from "./index.module.css";

export function ContactUs(): JSX.Element {
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div id={CONFIG.COMPONENTS_ID.CONTACT_US} className={styles.container}>
      <h2>Contact us</h2>

      <div className={styles.row}>
        <div className={styles["form-container"]}>
          <form onSubmit={handleSubmit}>
            <div className={styles["input-container"]}>
              <div className={styles.input}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </div>

              <div className={styles.input}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Enter your message..."
                  required
                />
              </div>

              <Button
                onClick={handleSubmit}
                type="submit"
              >
                Send
              </Button>
            </div>
          </form>
        </div>

        <div className={styles["address-container"]}>
          <div className={styles["address-block"]}>
            <div>
              <Pin />
              Office address
            </div>
            <div>{CONFIG.ADDRESS}</div>
          </div>
          <div className={styles["address-block"]}>
            <div>
              <Phone />
              Contact phone number
            </div>
            <div>{CONFIG.PHONE}</div>
          </div>
          <div className={styles["address-block"]}>
            <div>
              <Email />
              Email
            </div>
            <div>{CONFIG.EMAIL}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
