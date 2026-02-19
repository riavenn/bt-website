import styles from "../Details/Details.module.css";
import { Image } from "@unpic/react";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCode } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { MdAssessment } from "react-icons/md";
import gameJamImage from "../../../assets/gameJam.webp";

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
    title: "Takım Yapısı",
    description:
      "En az 2, en fazla 5 kişilik takımlar alinde katılabilirsin. Bireysel başvurular da kabul edilir.",
  },
  {
    icon: <IoCode />,
    title: "Hazır Assetler",
    description:
      "Kendi kodunu ve tasarımlarını kullanmalısın. Ücretsiz hazır assetler kaynak belirtilerek kullanılabilir.",
  },
  {
    icon: <MdTimer />,
    title: "Süre Sınırı",
    description:
      "Oyun geliştirme süreci tema açıklandıktan sonra tam 48 saattir. Geç teslimler kabul edilmez.",
  },
  {
    icon: <MdAssessment />,
    title: "Değerlendirme",
    description:
      "Oyunlar; oynanış, görsel tasarım, ses kullanımı ve temaya uygunluk kriterlerine göre jüri tarafından puanlanır.",
  },
];

function Details() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <div className={styles.imageContainer}>
            <Image
              src={gameJamImage}
              layout="constrained"
              width={500}
              height={500}
              alt="Akdeniz Game Jam"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.title}>
            Kodla, Tasarla, <span className={styles.coloredTitle}>Yarat.</span>
          </div>
          <div className={styles.description}>
            Akdeniz Game Jam, oyun geliştirme tutkunlarını bir araya getiren 48
            saatlik bir etkinliktir. İster deneyimli bir geliştirici ol, ister
            sektöre yeni adım atıyor ol; bu etkinlikte yeteneklerini sergileme,
            yeni insanlarla tanışma ve unutulmaz bir deneyim yaşama şansı
            bulacaksın.
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
