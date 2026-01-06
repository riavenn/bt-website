import { Link } from "react-router-dom";
import styles from "./Announcements.module.css";
import { CiCalendar } from "react-icons/ci";
import yazilimTestUzmanligi from "../../../../public/images/yazilim-test-uzmanligi.jpg";
import tanismaEtkinligi from "../../../../public/images/tanisma-etkinligi.jpg";
import solanaEvent from "../../../../public/images/solanaEvent.jpg";
import { Image } from "@unpic/react";

function AnnouncementsCards() {
  return (
    <div className={styles.cardsContainer}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardTop}>
            <Image
              src={card.imageUrl}
              className={styles.image}
              layout="constrained"
              width={300}
              height={300}
              alt={card.title}
            />
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.date}>
              <div className={styles.dateIcon}>
                <CiCalendar />
              </div>
              <div className={styles.dateText}>{card.dateText}</div>
            </div>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardDescription}>{card.description}</div>
            <div className={styles.cardDetailsContainer}>
              <Link
                to={"https://instagram.com/btakdenizuni"}
                target="_blank"
                className={styles.cardDetails}>
                Detaylar
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const cardData = [
  {
    imageUrl: yazilimTestUzmanligi,
    dateText: "24 Ekim 2023",
    title: "Yazılım Test Uzmanlığı Eğitimi",
    description:
      "Yazılımda kalitenin mimarı olun! Topluluğumuzun Yazılım Test Uzmanlığı Eğitimi ile kariyerinizde yeni bir dönem başlıyor. Geleceği birlikte test edelim!",
  },
  {
    imageUrl: tanismaEtkinligi,
    dateText: "29 Eylül 2024",
    title: "Güz Dönemi Tanışma Etkinliği",
    description:
      "Yeni üyelerimizle tanışmak ve dönemin yorgunluğunu atmak için kampüs ormanında buluşuyoruz.",
  },
  {
    imageUrl: solanaEvent,
    dateText: "25 Ekim 2025",
    title: "Solana Türkiye Antalya Buluşması",
    description:
      "Solana Türkiye topluluğuyla buluş! Bu özel buluşmada hem Solana hakkında bilgi al hem de eğlenceli vakit geçir.",
  },
];

function Announcements() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.title}>Önemli Duyurular</div>
        <div className={styles.description}>
          Topluluğumuzdan son haberler ve etkinlikler.
        </div>
        <AnnouncementsCards />
      </div>
    </div>
  );
}

export default Announcements;
