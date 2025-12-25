import styles from "../Team/Team.module.css";
import {
  FaPaintBrush,
  FaGraduationCap,
  FaArrowRight,
  FaMoneyBill,
} from "react-icons/fa";
import { MdOutlineEventNote } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <div key={index} className={styles.card}>
          <img className={styles.cardImage} src={logo}></img>
          <div className={styles.cardIcon}>{card.icon}</div>
          <div className={styles.cardTitleAndIcon}>
            <div className={styles.cardTitle}>{card.title}</div>
            <Link to={`${card.url}`} className={styles.cardTitleIcon}>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const cardData = [
  {
    icon: <FaPaintBrush />,
    title: "Sosyal Medya ve Tasarım",
    url: "sosyal-medya-ve-tasarim",
  },
  {
    icon: <FaGraduationCap />,
    title: "Proje ve Eğitim",
    url: "proje-ve-egitim",
  },
  {
    icon: <MdOutlineEventNote />,
    title: "Etkinlik ve Organizasyon",
    url: "etkinlik-ve-organizasyon",
  },
  {
    icon: <FaPeopleGroup />,
    title: "İnsan Kaynakları",
    url: "insan-kaynaklari",
  },
  {
    icon: <FaMoneyBill />,
    title: "Sponsorluk",
    url: "sponsorluk",
  },
];

function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.subTitle}>EKİBİMİZ</div>
          <div className={styles.title}>Departmanlarımız</div>
          <div className={styles.description}>
            Topluluğumuzun sürdürülebilir başarısı için çalışan dört ana yapı
            taşımız.
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Team;
