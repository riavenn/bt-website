import AboutUs from "../../Components/HomeComponents/AboutUs/AboutUs";
import Announcements from "../../Components/HomeComponents/Announcements/Announcements";
import FeatureCards from "../../Components/HomeComponents/FeatureCards/FeatureCards";
import Footer from "../../Components/HomeComponents/Footer/Footer";
import Header from "../../Components/HomeComponents/Header/Header";
import Navbar from "../../Components/HomeComponents/Navbar/Navbar";
import Partnerships from "../../Components/HomeComponents/Partnerships/Partnerships";
import Whatwedo from "../../Components/HomeComponents/Whatwedo/Whatwedo";
import styles from "../Home/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.navbar}>
          <Navbar />
        </div>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.featureCards}>
          <FeatureCards />
        </div>
        <div className={styles.about}>
          <AboutUs />
        </div>
        <div className={styles.announcements}>
          <Announcements />
        </div>
        <div className={styles.whatwedo}>
          <Whatwedo />
        </div>
        <div className={styles.partnerships}>
          <Partnerships />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
