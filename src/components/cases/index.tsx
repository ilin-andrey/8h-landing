import styles from "./index.module.css";

export function Cases(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Cases</h1>

      <div className={styles.carousel}>
        <div className={styles.case}></div>
        <div className={styles.main}></div>
        <div className={styles.case}></div>
      </div>
    </div>
  );
}
