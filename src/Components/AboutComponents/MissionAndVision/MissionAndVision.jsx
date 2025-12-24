import styles from "../MissionAndVision/MissionAndVision.module.css";
import { FaFlag, FaLightbulb } from "react-icons/fa";

function MissionAndVision() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.title}>Misyon & Vizyon</div>
          <div className={styles.description}>
            Neden buradayız ve nereye gidiyoruz?
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.missionContainer}>
            <div className={styles.cardIcon}>
              <FaFlag />
            </div>
            <div className={styles.cardTitle}>Misyonumuz</div>
            <div className={styles.cardDescription}>
              Kampüsteki öğrencilere yazılım, donanım ve girişimcilik
              alanlarında bilgi ve beceri kazandırmak. Teknolojik gelişmeleri
              yakından takip eden, paylaşımcı ve üretken bir ekosistem yaratarak
              üyelerimizin kariyer yolculuklarına ışık tutmak.
            </div>
          </div>
          <div className={styles.visionContainer}>
            <div className={styles.cardIcon}>
              <FaLightbulb />
            </div>
            <div className={styles.cardTitle}>Vizyonumuz</div>
            <div className={styles.cardDescription}>
              Ulusal ve uluslararası alanda başarılarıyla tanınan, teknolojiyi
              sadece tüketen değil üreten bireyler yetiştiren lider bir öğrenci
              topluluğu olmak. Geleceğin teknoloji liderlerini bugünden
              şekillendirmek.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
