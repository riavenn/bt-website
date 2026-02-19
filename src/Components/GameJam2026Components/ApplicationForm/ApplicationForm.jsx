import { Link } from "react-router-dom";
import styles from "../ApplicationForm/ApplicationForm.module.css";

function ApplicationForm() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            Maceraya <span className={styles.coloredTitle}>Katıl</span>
          </div>
          <div className={styles.description}>
            Kayıt formunu doldur ve yerini ayırt. Kontenjan sınırlı!
          </div>
        </div>

        <div className={styles.linkContainer}>
          <Link
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLScRk_zW8H6banrHtKtjfgtZ2GgS9uB34ddspkuXUTIRUqlIOQ/viewform?usp=header"
            }
            target="_blank"
            className={styles.link}>
            Başvuru Formu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
