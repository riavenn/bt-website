import { Link } from "react-router-dom";
import styles from "./Announcements.module.css";
import { CiCalendar } from "react-icons/ci";
import yazilimTestUzmanligi from "../../../../public/images/yazilim-test-uzmanligi.webp";
import tanismaEtkinligi from "../../../../public/images/tanisma-etkinligi.webp";
import solanaEvent from "../../../../public/images/solanaEvent.webp";
import internetHaftasi from "../../../../public/images/internetHaftasi.webp";
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
              width={250}
              height={250}
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
    imageUrl: internetHaftasi,
    dateText: "4 Nisan 2026",
    title: "İnternet Haftası Özel Etkinliği",
    description:
      "4 Nisan'da İnternet Haftası’na özel; internetin farklı alanlarından uzman konuklar, ilham verici konuşmalar, sürpriz hediyeler ve networking fırsatları sizleri bekliyor!",
  },
  {
    imageUrl: solanaEvent,
    dateText: "25 Ekim 2025",
    title: "Solana Türkiye Antalya Buluşması",
    description:
      "Solana Allstar Türkiye iş birliğiyle düzenlenen topluluk buluşmasında blockchain, Web3 ve Solana ekosistemi üzerine konuşuyor, sektörden isimlerle bir araya geliyoruz.",
  },
  {
    imageUrl: tanismaEtkinligi,
    dateText: "29 Eylül 2024",
    title: "Güz Dönemi Tanışma Etkinliği",
    description:
      "Bilgisayar Topluluğu Sosyal Tanışma Etkinliği’nde yeni üyelerle tanışın, projeler hakkında sohbet edin ve topluluğumuzu daha yakından keşfedin.",
  },
  {
    imageUrl: yazilimTestUzmanligi,
    dateText: "24 Ekim 2023",
    title: "Yazılım Test Uzmanlığı Eğitimi",
    description:
      "Yazılımda kalitenin mimarı olun! Topluluğumuzun Yazılım Test Uzmanlığı Eğitimi ile kariyerinizde yeni bir dönem başlıyor. Geleceği birlikte test edelim!",
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
