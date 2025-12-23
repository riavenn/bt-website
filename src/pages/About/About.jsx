import Header from "../../Components/AboutComponents/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
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
    </div>
  );
}

export default About;
