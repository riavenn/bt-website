import styles from "../GameJam2026/GameJam2026.module.css";
import Header from "../../Components/GameJam2026Components/Header/Header";
import Details from "../../Components/GameJam2026Components/Details/Details";
import Navbar from "../../Components/HomeComponents/Navbar/Navbar";
import Awards from "../../Components/GameJam2026Components/Awards/Awards";
import EventSchedule from "../../Components/GameJam2026Components/EventSchedule/EventSchedule";
import ApplicationForm from "../../Components/GameJam2026Components/ApplicationForm/ApplicationForm";

function GameJam26() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.details}>
          <Details />
        </div>
        <div className={styles.awards}>
          <Awards />
        </div>
        <div className={styles.eventSchedule}>
          <EventSchedule />
        </div>
        <div className={styles.applicationForm}>
          <ApplicationForm />
        </div>
      </div>
    </div>
  );
}

export default GameJam26;
