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
            Kodların, tasarımların ve hayal gücünün sınırlarını zorlayacağımız
            bir serüvene hazır mısın? Kampüsün kalbinde, Girişimcilik ve Kariyer
            Merkezi'nde heyecan dolu bir sabah bizi bekliyor.
          </div>
        </div>

        <div className={styles.linkContainer}>
          <Link
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSd8uirC2tmx8pWoRASRIisXVyJQfqqBxQuBhnqZAaRMOA93qQ/viewform"
            }
            target="_blank"
            className={styles.link}>
            HEMEN BAŞVUR
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
