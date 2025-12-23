import { Link } from "react-router-dom";
import styles from "../Header/Header.module.css";
import {
  FaArrowRight,
  FaRegPlayCircle,
  FaCircle,
  FaCalendar,
} from "react-icons/fa";
import gameJamImage from "../../../public/images/gamejam.jpg";
import avatar from "../../../public/images/avatar.jpg";
import avatar2 from "../../../public/images/avatar2.jpg";
import avatar3 from "../../../public/images/avatar3.jpg";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <div className={styles.notification}>
            <i className={styles.notificationIcon}>
              <FaCircle />
            </i>
            <div className={styles.notificationText}>
              AKDENİZ ÜNİVERSİTESİ BİLGİSAYAR TOPLULUĞU
            </div>
          </div>
          <div className={styles.title}>
            Bilişim{" "}
            <span className={styles.coloredTitle}>
              Işığında <br />
            </span>{" "}
            <span className={styles.coloredTitle}>Teknoloji</span> Yolunda
          </div>
          <div className={styles.description}>
            Üniversite topluluğumuzla potansiyelinizi keşfedin. Turuncu
            enerjimiz ve lacivert disiplinimizle kampüs hayatına renk katıyoruz.
          </div>
          <div className={styles.buttons}>
            <Link
              to={"http://mediko.akdeniz.edu.tr/topluluk/"}
              target="blank"
              className={styles.joinCommunityButtonContainer}>
              <div className={styles.joinCommunityButton}>Topluluğa Katıl</div>
              <div className={styles.joinCommunityButtonIcon}>
                <FaArrowRight />
              </div>
            </Link>
            <Link
              to={"https://www.youtube.com/@btakdenizuni/featured"}
              target="blank"
              className={styles.videoButtonContainer}>
              <div className={styles.videoButtonIcon}>
                <FaRegPlayCircle />
              </div>
              <div className={styles.videoButton}>Tanıtım Videosu</div>
            </Link>
          </div>
          <div className={styles.activeMembersContainer}>
            <div className={styles.activeMemberAvatars}>
              <div className={styles.firstActiveMemberAvatar}>
                <img src={avatar} alt="active-member" width={35} height={35} />
              </div>
              <div className={styles.activeMemberAvatar}>
                <img src={avatar2} alt="active-member" width={35} height={35} />
              </div>
              <div className={styles.activeMemberAvatar}>
                <img src={avatar3} alt="active-member" width={35} height={35} />
              </div>
              <div className={styles.lastActiveMemberAvatar}>+1000</div>
            </div>
            <div className={styles.activeMembersText}>Aktif Üye</div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imageContainer}>
            <img src={gameJamImage} alt="akdeniz game jam" />
            <div className={styles.nextEventContainer}>
              <div className={styles.nextEventIcon}>
                <FaCalendar />
              </div>
              <div className={styles.nextEventText}>
                <span className={styles.coloredText}>SIRADAKİ ETKİNLİK</span>{" "}
                <br /> Akdeniz Game Jam'26
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
