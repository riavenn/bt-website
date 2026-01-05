import styles from "../DepartmanComponent/DepartmanComponent.module.css";
import Cards from "../../../Components/Cards/Cards";
import Card from "../Card/Card";

function DepartmanComponent({
  subTitle,
  title,
  description,
  whatwedoDescription,
  cardData,
  teamData,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.textContainer}>
          <div className={styles.subTitle}>{subTitle}</div>
          <div className={styles.title}>
            {title} <br />
            <span className={styles.coloredTitle}>DEPARTMANI</span>
          </div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.whatwedo}>
          <div className={styles.whatwedoTextContainer}>
            <div className={styles.whatwedoTitle}>Neler Yapıyoruz?</div>
            <div className={styles.whatwedoDescription}>
              {whatwedoDescription}
            </div>
            <div className={styles.divider}></div>
          </div>
          <div>
            <Cards cardData={cardData} />
          </div>
        </div>
        <div className={styles.team}>
          <div className={styles.teamTextContainer}>
            <div className={styles.teamSubTitle}>TAKIM ARKADAŞLARIMIZ</div>
            <div className={styles.teamTitle}>Ekibimizle Tanışın</div>
          </div>
          <div className={styles.cardContainer}>
            {teamData.map((data, index) => (
              <Card
                key={index}
                avatar={data.avatar}
                userName={data.userName}
                jobTitle={data.jobTitle}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmanComponent;
