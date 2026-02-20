import styles from "../Header/Header.module.css";
import { FaCircle, FaInfoCircle } from "react-icons/fa";
import { LuCalendarPlus } from "react-icons/lu";
import { Link } from "react-router-dom";
import internetHaftasi from "../../../../public/images/internetHaftasi.webp";
import EventCountdown from "../../EventCountdown/EventCountdown";
import { Image } from "@unpic/react";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <div className={styles.subTitleContainer}>
            <div className={styles.subTitleIcon}>
              <FaCircle />
            </div>
            <div className={styles.subTitleText}>ÖNE ÇIKAN ETKİNLİK</div>
          </div>
          <div className={styles.title}>
            İnternet Haftası{" "}
            <span className={styles.coloredTitle}>Özel Etkinliği</span>
          </div>
          <div className={styles.description}>
            Teknolojinin sınırlarını zorlayan bu özel oturumda, sektör
            liderleriyle tanışın ve geleceği bugünden keşfedin.
          </div>
          <div className={styles.buttonsContainer}>
            <Link className={styles.reservationButton}>
              <div className={styles.reservationButtonIcon}>
                <LuCalendarPlus />
              </div>
              <div className={styles.reservationButtonText}>Hemen Kayıt Ol</div>
            </Link>
            <Link className={styles.detailsButton}>
              <div className={styles.detailsButtonIcon}>
                <FaInfoCircle />
              </div>
              <div className={styles.detailsButtonText}>Detaylar</div>
            </Link>
          </div>
          <div className={styles.eventDetailsContainer}>
            <div className={styles.dateContainer}>
              <div className={styles.dateText}>TARİH</div>
              <div className={styles.date}>4 Nisan 2026</div>
            </div>
            <div className={styles.locationContainer}>
              <div className={styles.locationText}>YER</div>
              <div className={styles.location}>Atatürk Konferans Salonu</div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imageContainer}>
            <Image
              src={internetHaftasi}
              alt="Akdeniz Üniversitesi İnternet Haftası Etkinliği'26"
              className={styles.image}
              width={450}
              height={450}
              layout="constrained"
            />
          </div>
          <div className={styles.eventCountdown}>
            <EventCountdown targetDate="2026-03-04T14:00:00" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
