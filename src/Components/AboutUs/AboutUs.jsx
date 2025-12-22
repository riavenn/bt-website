import styles from "../AboutUs/AboutUs.module.css";
import { FiTarget } from "react-icons/fi";

function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.cardContent}>
        <div className={styles.leftContent}>
          <div className={styles.topTitle}>BİZ KİMİZ?</div>
          <div className={styles.title}>
            Geleceği Şekillendiren
            <span className={styles.coloredTitle}> Vizyon</span>
          </div>
          <div className={styles.description}>
            Bilgisayar Topluluğu olarak vizyonumuz, her öğrencinin potansiyelini
            en üst düzeye çıkarabileceği, yenilikçi fikirlerin desteklendiği ve
            küresel ölçekte etki yaratan liderlerin yetiştiği bir ekosistem
            oluşturmaktır.
          </div>
          <div className={styles.missionContainer}>
            <div className={styles.iconContainer}>
              <div className={styles.icon}>
                <FiTarget />
              </div>
            </div>
            <div className={styles.missionTextContainer}>
              <div className={styles.missionTitle}>Misyonumuz</div>
              <div className={styles.missionDescription}>
                Öğrencilerimize akademik, profesyonel ve sosyal gelişim
                fırsatları sunarak; disiplinler arası işbirlikleri kurmak ve
                girişimcilik ruhunu aşılamak.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.imageContainer}></div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
