import Header from "../../Components/EventsComponents/Header/Header";
import styles from "../Events/Events.module.css";
import Navbar from "../../Components/HomeComponents/Navbar/Navbar";
import PastEvents from "../../Components/EventsComponents/PastEvents/PastEvents";
import Footer from "../../Components/HomeComponents/Footer/Footer";

function Events() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.pastEvents}>
        <PastEvents />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Events;
