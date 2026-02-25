import styles from "../Details/Details.module.css";
import { Image } from "@unpic/react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCode } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { MdAssessment } from "react-icons/md";

const Card = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardIcon}>{icon}</div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardDescription}>{description}</div>
    </div>
  );
};

const cardData = [
  {
    icon: <FaPeopleGroup />,
    title: "Hızlı Üretim & Prototipleme",
    description:
      " Yazılım, tasarım ve ses disiplinlerini birleştirerek 48 saat içinde oynanabilir bir MVP (Minimum Uygulanabilir Ürün) ortayaçıkarmak.",
  },
  {
    icon: <IoCode />,
    title: "Mentorluk Köprüsü",
    description:
      "Sektör profesyonellerinden anlık teknik destek almak ve proje yönetimini deneyimlemek.",
  },
  {
    icon: <MdTimer />,
    title: "Hibrit Komünite",
    description:
      "Akdeniz Üniversitesi kampüsü ile Discord sunucusu arasındaki sınırı kaldırarak fiziksel ve online katılımcıları tek bir ekosistemde buluşturmak.",
  },
  {
    icon: <MdAssessment />,
    title: "Sunum ve Kariyer",
    description:
      "Geliştirilen oyunları Itch.io üzerinden tüm dünyaya açmak ve jüri karşısında pitching (sunum) yaparak sektörel network kazanmak",
  },
  {
    icon: <MdAssessment />,
    title: "Kolektif Deneyim",
    description:
      "Puf alanları, ortak yemek seansları ve uykusuz geçen yaratıcı gecelerle gerçek bir takım ruhu inşa etmek.",
  },
];

function Details() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.rightSide}>
          <div className={styles.title}>
            Kodla, Tasarla, <span className={styles.coloredTitle}>Yarat.</span>
          </div>
          <div className={styles.description}>
            Akdeniz Game Jam '26, katılımcıların kısıtlı bir sürede (48 saat),
            belirlenen gizli bir tema çerçevesinde sıfırdan oyun geliştirdikleri
            hibrit bir üretim maratonudur.
          </div>
          <div className={styles.cardContainer}>
            {cardData.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
