import styles from "./AboutUs.module.css";
import { FiTarget } from "react-icons/fi";
import ekip from "../../../../public/images/ekip.jpg";
import { Image } from "@unpic/react";

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
          <Image
            src={ekip}
            layout="constrained"
            width={500}
            height={500}
            alt="Dijital Gençlik Hackathonu"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
