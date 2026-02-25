import styles from "../Awards/Awards.module.css";
import { FaCheck } from "react-icons/fa";

function Awards() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.title}>
          Büyük <span className={styles.coloredTitle}>Ödüller</span>
        </div>
        <div className={styles.description}>
          Dereceye giren ekipleri bekleyen sürpriz ödüller tören günü
          sahiplerini bulacak.
        </div>
        <div className={styles.awardCards}>
          <div className={styles.secondPlaceCard}>
            <div className={styles.cardTitle}>İkincilik</div>
            {/* <div className={styles.prizeMoney}>????</div> */}
            <div className={styles.otherAwards}>
              {/* <ul className={styles.awardsList}>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Oyuncu Ekipman Seti</div>
                </li>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Mentör Desteği</div>
                </li>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Sponsor Hediyeleri</div>
                </li>
              </ul> */}
              <div className={styles.awardList}>?</div>
            </div>
          </div>
          <div className={styles.firstPlaceCard}>
            <div className={styles.cardTitle}>Birincilik</div>
            {/* <div className={styles.prizeMoney}>????</div> */}
            <div className={styles.otherAwards}>
              {/* <ul className={styles.awardsList}>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Profesyonel Monitörler</div>
                </li>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Yatırımcı Görüşmesi</div>
                </li>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Steam Yayın Desteği</div>
                </li>
              </ul> */}
              <div className={styles.awardList}>?</div>
            </div>
          </div>
          <div className={styles.thirdPlaceCard}>
            <div className={styles.cardTitle}>Üçüncülük</div>
            {/* <div className={styles.prizeMoney}>????</div> */}
            <div className={styles.otherAwards}>
              {/* <ul className={styles.awardsList}>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Premium Lisanslar</div>
                </li>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Sürpiz Kutular</div>
                </li>
                <li className={styles.award}>
                  <i className={styles.awardIcon}>
                    <FaCheck />
                  </i>
                  <div className={styles.awardText}>Sertifika</div>
                </li>
              </ul> */}
              <div className={styles.awardList}>?</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
