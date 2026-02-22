import { FaGraduationCap, FaMoneyBill, FaPaintBrush } from "react-icons/fa";
import styles from "../Header/Header.module.css";
import { MdOutlineEventNote } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import Cards from "../../Cards/Cards";

const cardData = [
  {
    icon: <FaPaintBrush />,
    title: "Yönetim Kurulu",
    description:
      "Sosyal Medya ve Tasarım Departmanı, topluluğun dış dünyaya açılan penceresidir. Sadece estetik görseller hazırlamakla kalmaz, aynı zamanda AÜBT’nin kimliğini ve dijital varlığını inşa ederler.",
    url: "yonetim-kurulu",
    cardTitle: "Ekibi Görüntüle",
  },
  {
    icon: <FaPaintBrush />,
    title: "Sosyal Medya ve Tasarım",
    description:
      "Sosyal Medya ve Tasarım Departmanı, topluluğun dış dünyaya açılan penceresidir. Sadece estetik görseller hazırlamakla kalmaz, aynı zamanda AÜBT’nin kimliğini ve dijital varlığını inşa ederler.",
    url: "sosyal-medya-ve-tasarim",
    cardTitle: "Ekibi Görüntüle",
  },
  {
    icon: <FaGraduationCap />,
    title: "Proje ve Eğitim",
    description:
      "Topluluğun akademik ve teknik kalbi burada atar. Üyelerin sadece teorik bilgiyle kalmayıp, uygulama yaparak kendilerini geliştirmelerini hedeflerler.",
    url: "proje-ve-egitim",
    cardTitle: "Ekibi Görüntüle",
  },
  {
    icon: <MdOutlineEventNote />,
    title: "Etkinlik ve Organizasyon",
    description:
      "Büyük zirvelerden samimi tanışma toplantılarına kadar her türlü buluşmanın arkasındaki görünmez kahramanlardır. Planlama ve kriz yönetimi onların işidir.",
    url: "etkinlik-ve-organizasyon",
    cardTitle: "Ekibi Görüntüle",
  },
  {
    icon: <FaPeopleGroup />,
    title: "İnsan Kaynakları",
    description:
      "Bir topluluğun en değerli kaynağı üyeleridir. İK departmanı, üyeler arasındaki bağı güçlendirmek ve topluluk içi kültürü korumakla sorumludur.",
    url: "insan-kaynaklari",
    cardTitle: "Ekibi Görüntüle",
  },
  {
    icon: <FaMoneyBill />,
    title: "Sponsorluk",
    description:
      "Hayal edilen büyük etkinliklerin gerçeğe dönüşmesini sağlayan finansal ve operasyonel desteği bulurlar. Sektör ile topluluk arasındaki en kritik bağdır.",
    url: "sponsorluk",
    cardTitle: "Ekibi Görüntüle",
  },
];

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.title}>
            Topluluğumuzun{" "}
            <span className={styles.coloredTitle}>Arkasındaki Güç</span>
          </div>
          <div className={styles.description}>
            Öğrenci odaklı yapımızla, teknolojiyi kampüse taşıyan ve geleceği
            şekillendiren dinamik ekiplerimizi tanıyın. Birlikte öğreniyor,
            birlikte üretiyoruz.
          </div>
        </div>
        <div className={styles.cardContainer}>
          <Cards cardData={cardData} />
        </div>
      </div>
    </div>
  );
}

export default Header;
