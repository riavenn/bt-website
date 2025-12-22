import styles from "../Whatwedo/Whatwedo.module.css";
import { MdEventNote } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { MdCelebration } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

const cardData = [
  {
    icon: <MdEventNote />,
    title: "Etkinlikler",
    description:
      "Sektör liderlerini ağırladığımız, deneyim paylaşımlarının yapıldığı büyük ölçekli seminerler.",
  },
  {
    icon: <GiGraduateCap />,
    title: "Eğitimler",
    description:
      "Yazılım, tasarım ve kişisel gelişim alanlarında, uzman eğitmenler eşliğinde gerçekleşen atölyeler.",
  },
  {
    icon: <MdCelebration />,
    title: "Sosyal Etkinlikler",
    description:
      "Tanışma kahvaltıları, film geceleri ve doğa yürüyüşleri ile topluluk ruhunu güçlendiriyoruz.",
  },
  {
    icon: <IoGameController />,
    title: "Game Jam",
    description:
      "48 saat süren maratonlarda ekiplerin oyun geliştirme yeteneklerini sergilediği yarışmalar.",
  },
  {
    icon: <FaLightbulb />,
    title: "Ideathon",
    description:
      "Yenilikçi fikirlerin yarıştığı, sorunlara yaratıcı çözümler üretilen mentor destekli maratonlar.",
  },
  {
    icon: <IoRocketSharp />,
    title: "Girişimcilik",
    description:
      "Girişimcilik ekosistemine adım atmak isteyenler için yatırımcı buluşmaları ve simülasyonlar.",
  },
];

function Card() {
  return (
    <div className={styles.cardContainer}>
      {cardData.map((card, index) => (
        <>
          <div key={index} className={styles.card}>
            <div className={styles.cardIcon}>{card.icon}</div>
            <div className={styles.cardTitle}>{card.title}</div>
            <div className={styles.cardDescription}>{card.description}</div>
          </div>
        </>
      ))}
    </div>
  );
}

function Whatwedo() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.subTitle}>FAALİYET ALANLARIMIZ</div>
          <div className={styles.title}>Neler Yapıyoruz?</div>
          <div className={styles.description}>
            Topluluğumuzun dinamik yapısını oluşturan ve üyelerimizin gelişimine
            katkı <br />
            sağlayan temel etkinlik türlerimiz.
          </div>
        </div>
        <Card />
      </div>
    </div>
  );
}

export default Whatwedo;
