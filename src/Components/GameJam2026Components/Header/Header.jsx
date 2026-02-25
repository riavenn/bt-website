import styles from "../Header/Header.module.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import EventCountdown from "../../EventCountdown/EventCountdown";

function GameJam26() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.dateContainer}>
          <div className={styles.dateText}>2-3-4 Mayıs 2026</div>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            AKDENİZ <span className={styles.coloredTitle}>GAME JAM</span>
          </div>
          <div className={styles.description}>
            48 Saat. Tek Tema. Sınırsız Yaratıcılık. Hayalindeki oyunu geliştir,
            sınırları zorla!
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link
            to={
              "https://docs.google.com/forms/d/e/1FAIpQLSd8uirC2tmx8pWoRASRIisXVyJQfqqBxQuBhnqZAaRMOA93qQ/viewform"
            }
            target="_blank"
            className={styles.applyButtonContainer}>
            <div className={styles.applyButtonText}>Hemen Başvur</div>
            <div className={styles.applyButtonIcon}>
              <FaArrowRight />
            </div>
          </Link>
          <Link className={styles.detailsContainer}>
            <div className={styles.detailsText}>Detayları Gör</div>
          </Link>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.staticsContainer}>
          <div className={styles.static}>
            48 <span className={styles.coloredText}> SAAT </span>
          </div>
          <div className={styles.static}>
            ₺20K+ <span className={styles.coloredText}> ÖDÜL HAVUZU </span>
          </div>
          <div className={styles.static}>
            200+ <span className={styles.coloredText}> KATILIMCI </span>
          </div>
          <div className={styles.static}>
            ???? <span className={styles.coloredText}> TEMA </span>
          </div>
        </div>
        <div className={styles.eventCountdown}>
          <EventCountdown targetDate="2026-05-03T14:00:00" />
        </div>
      </div>
    </div>
  );
}

export default GameJam26;
