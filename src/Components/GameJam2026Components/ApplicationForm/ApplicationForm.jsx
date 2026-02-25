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
            <span className={styles.coloredTitle}>Quest: Accepted</span>{" "}
            sloganıyla çıktığımız bu yolda; kodların, tasarımların ve hayal
            gücünün sınırlarını zorlayacağız. Kampüsün kalbinde, Girişimcilik ve
            Kariyer Merkezi'nde bizimle sabahla!
          </div>
        </div>

        <div className={styles.linkContainer}>
          <Link
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSd8uirC2tmx8pWoRASRIisXVyJQfqqBxQuBhnqZAaRMOA93qQ/viewform"
            }
            target="_blank"
            className={styles.link}>
            QUEST ACCEPTED
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ApplicationForm;
