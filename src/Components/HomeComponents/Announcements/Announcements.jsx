import { Link } from "react-router-dom";
import styles from "./Announcements.module.css";
import { CiCalendar } from "react-icons/ci";
import yazilimTestUzmanligi from "../../../../public/images/yazilim-test-uzmanligi.webp";
import tanismaEtkinligi from "../../../../public/images/tanisma-etkinligi.webp";
import solanaEvent from "../../../../public/images/solanaEvent.webp";
import internetHaftasi from "../../../../public/images/internetHaftasi.webp";
import gameJam from "../../../assets/gameJam.webp";
import { Image } from "@unpic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function AnnouncementsCards() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation={true}
        // pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        className={styles.mySwiper}>
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const cardData = [
  {
    imageUrl: gameJam,
    dateText: "2-3-4 Mayıs 2026",
    title: "Akdeniz Game Jam 2026",
    description:
      "Akdeniz Game Jam başlıyor! 2-3-4 Mayıs 2026 tarihlerinde Akdeniz Üniversitesi'nde buluşalım. Takımını kur, 48 saatte oyununu geliştir ve bu heyecana ortak ol.",
  },
  {
    imageUrl: internetHaftasi,
    dateText: "14 Nisan 2026",
    title: "İnternet Haftası Özel Etkinliği",
    description:
      "14 Nisan'da İnternet Haftası’na özel; internetin farklı alanlarından uzman konuklar, ilham verici konuşmalar, sürpriz hediyeler ve networking fırsatları sizleri bekliyor!",
  },
  {
    imageUrl: solanaEvent,
    dateText: "25 Ekim 2025",
    title: "Solana Türkiye Buluşması",
    description:
      "Solana Allstar Türkiye ile blockchain, Web3 ve Solana ekosistemini konuşuyoruz. Sektörden isimlerle buluşacağımız bu özel etkinliğe sen de davetlisin!",
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
