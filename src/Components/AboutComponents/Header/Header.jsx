import styles from "../Header/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <div className={styles.subTitleContainer}>
            <div className={styles.line}></div>
            <div className={styles.subTitle}>HAKKIMIZDA</div>
          </div>
        </div>
        <div className={styles.rightSide}></div>
      </div>
    </div>
  );
}

export default Header;
