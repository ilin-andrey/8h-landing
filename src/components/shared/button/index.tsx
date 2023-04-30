import { ButtonHTMLAttributes } from "react";

import styles from "./index.module.css";

export function Button({
  onClick,
  type = "button",
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
