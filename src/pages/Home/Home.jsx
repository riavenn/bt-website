import AboutUs from "../../Components/AboutUs/AboutUs";
import Announcements from "../../Components/Announcements/Announcements";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Whatwedo from "../../Components/Whatwedo/Whatwedo";
import styles from "../Home/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.cards}>
        <Cards />
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
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
