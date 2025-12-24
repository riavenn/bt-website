import { FaUsers } from "react-icons/fa";
import Cards from "../../Cards/Cards";
import styles from "./FeatureCards.module.css";
import { IoRocketSharp } from "react-icons/io5";
import { MdCelebration } from "react-icons/md";

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

function FeatureCards() {
  return (
    <div className={styles.container}>
      <Cards cardData={cardData} />
    </div>
  );
}

export default FeatureCards;
