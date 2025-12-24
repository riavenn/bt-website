import Header from "../../Components/AboutComponents/Header/Header";
import MissionAndVision from "../../Components/AboutComponents/MissionAndVision/MissionAndVision";
import Team from "../../Components/AboutComponents/Team/Team";
import Navbar from "../../Components/HomeComponents/Navbar/Navbar";
import styles from "../About/About.module.css";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.missionAndVision}>
        <MissionAndVision />
      </div>
      <div className={styles.team}>
        <Team />
      </div>
    </div>
  );
}

export default About;
