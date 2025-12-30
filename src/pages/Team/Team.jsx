import styles from "../Team/Team.module.css";
import Navbar from "../../Components/HomeComponents/Navbar/Navbar";
import Header from "../../Components/TeamComponents/Header/Header";
import JoinTeam from "../../Components/TeamComponents/JoinTeam/JoinTeam";
import Footer from "../../Components/HomeComponents/Footer/Footer";

function Team() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.joinTeam}>
        <JoinTeam />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Team;
