import styles from "../Card/Card.module.css";
import { Image } from "@unpic/react";

function Card({ avatar, userName, jobTitle }) {
  return (
    <div className={styles.cards}>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image
              src={avatar}
              alt="Team Member"
              className={styles.image}
              width={200}
              height={200}
              priority={false}
            />
          </div>
          <div className={styles.cardTextContainer}>
            <div className={styles.userName}>{userName}</div>
            <div className={styles.jobTitle}>{jobTitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
