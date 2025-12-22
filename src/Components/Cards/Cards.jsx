import styles from "../Cards/Cards.module.css";
import { FaUsers } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { MdCelebration } from "react-icons/md";

function Cards() {
  const cardData = [
    {
      icon: <FaUsers />,
      title: "Güçlü Bağlantılar",
      description: "Mezunlar ve sektör profesyonelleriyle tanışma fırsatları.",
    },
    {
      icon: <IoRocketSharp />,
      title: "Kariyer Desteği",
      description:
        "Staj imkanları, CV hazırlama atölyeleri ve mülakat simülasyonları.",
    },
    {
      icon: <MdCelebration />,
      title: "Sosyal Aktiviteler",
      description: "Kampüs içi ve dışı geziler, partiler ve spor turnuvaları.",
    },
  ];

  return (
    <div className={styles.cards}>
      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.description}>{card.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
