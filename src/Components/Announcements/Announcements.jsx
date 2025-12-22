import { Link } from "react-router-dom";
import styles from "../Announcements/Announcements.module.css";
import { CiCalendar } from "react-icons/ci";

function AnnouncementsCards() {
  return (
    <div className={styles.cardsContainer}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardTop}>
            <div className={styles.category}>{card.category}</div>
            <img src={card.imageUrl} className={styles.image}></img>
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
            <Link to={"/"} className={styles.cardDetails}>
              Detaylar
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

const cardData = [
  {
    category: "BAŞVURU",
    imageUrl:
      "https://media.fastdl.app/get?__sig=ZH2373a_X4nCp1cR-lSyVQ&__expires=1766349887&uri=https%3A%2F%2Fscontent-lga3-2.cdninstagram.com%2Fv%2Ft51.29350-15%2F327550959_210981451301745_3656256309911718365_n.webp%3Fstp%3Ddst-jpg_e35_tt6%26_nc_ht%3Dscontent-lga3-2.cdninstagram.com%26_nc_cat%3D109%26_nc_oc%3DQ6cZ2QHLwf7e1wlXSn25_HNvuST-sfjErqcgDIfntRi7SzmesUax-7fxwdJkgYJsox6g9zlPzZrEmUn8M4i5fFAUVDNN%26_nc_ohc%3DOrhO35vCovAQ7kNvwH4tVJB%26_nc_gid%3DmjnU8ruYidnfdkzJpHpUKQ%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfnXtlEslxIqTosWEhylnu_pQ46e6V4b3JkHV2Sn3eKPfg%26oe%3D694E44E5%26_nc_sid%3Dd885a2&filename=327550959_210981451301745_3656256309911718365_n.webp",
    dateText: "24 Ekim 2023",
    title: "Yazılım Test Uzmanlığı Eğitimi",
    description:
      "Python ile veri bilimine giriş yapacağımız workshop için kayıtlar başladı. Kontenjan sınırlı!",
  },
  {
    category: "ETKİNLİK",
    imageUrl:
      "https://media.fastdl.app/get?__sig=paEeJMJinbv_8wzD97zTMg&__expires=1766349976&uri=https%3A%2F%2Fscontent-lga3-3.cdninstagram.com%2Fv%2Ft51.29350-15%2F461506918_806934471516712_7966909275084198798_n.jpg%3Fstp%3Ddst-jpg_e35_tt6%26_nc_ht%3Dscontent-lga3-3.cdninstagram.com%26_nc_cat%3D104%26_nc_oc%3DQ6cZ2QH4_r2auZdnjljdbRKBIVyY4r88pxdAg8L_djMn3c0joJayR1GOzmiTlFUR1dTnUu-WWMFZ7OM_30f9OGlWh2zU%26_nc_ohc%3DaxVosoyDTjoQ7kNvwFPcfRW%26_nc_gid%3DW2S40QAZvbigL19RrKoDPg%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_Afns7osZRYxyVzqoHOx0e3v1a9RWpnb0yC89KjmjA-RD0A%26oe%3D694E2C31%26_nc_sid%3Dd885a2&filename=461506918_806934471516712_7966909275084198798_n.jpg",
    dateText: "29 Eylül 2024",
    title: "Güz Dönemi Tanışma Etkinliği",
    description:
      "Yeni üyelerimizle tanışmak ve dönemin yorgunluğunu atmak için kampüs ormanında buluşuyoruz.",
  },
  {
    category: "ETKİNLİK",
    imageUrl:
      "https://media.fastdl.app/get?__sig=dgpgMpsKKS4_5rEh8UEx-Q&__expires=1766350080&uri=https%3A%2F%2Fscontent-lga3-1.cdninstagram.com%2Fv%2Ft51.29350-15%2F463884611_8366680536786695_4402651805232526937_n.webp%3Fstp%3Ddst-jpg_e35_s1080x1080_tt6%26_nc_ht%3Dscontent-lga3-1.cdninstagram.com%26_nc_cat%3D111%26_nc_oc%3DQ6cZ2QHNc0JuKRotivGaXegRe2vPK4OYGGSuqAyTKgNbMonk1eVsrGcB_45WotiIyQtpxQSS2QtGoMIQFKw6KmBbBuBw%26_nc_ohc%3Dpo--7v0femIQ7kNvwHpeYwa%26_nc_gid%3DWv35S_o0o5CstRACuixciQ%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_Afn0-Fm2lZ1T8c_7Zc7LZ7A8WXpWHyM67U_qTL0fL5_woQ%26oe%3D694E31E1%26_nc_sid%3Dd885a2&filename=463884611_8366680536786695_4402651805232526937_n.webp",
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
