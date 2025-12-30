import { Link } from "react-router-dom";
import styles from "../Cards/Cards.module.css";
import { FaArrowRight } from "react-icons/fa";

function Cards({ cardData }) {
  return (
    <div className={styles.cards}>
      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.description}>{card.description}</div>
            {card.url && (
              <Link to={`${card.url}`} className={styles.cardTitleIcon}>
                {card.cardTitle} {""}
                <FaArrowRight />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
