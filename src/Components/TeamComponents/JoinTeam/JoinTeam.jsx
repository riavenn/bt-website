import { Link } from "react-router-dom";
import styles from "../JoinTeam/JoinTeam.module.css";
import { FaRocket } from "react-icons/fa";

function JoinTeam() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.title}>
          Sen de ekibimize katılmak ister misin?
        </div>
        <div className={styles.description}>
          Teknoloji dünyasında yerini al, projelerde aktif rol oyna ve bizimle
          birlikte geleceği inşa et.
        </div>
        <Link to={"/basvuru-formu"}>
          <div className={styles.applicationFormContainer}>
            <div className={styles.text}>Başvuru Formu</div>
            <div className={styles.icon}>
              <FaRocket />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default JoinTeam;
