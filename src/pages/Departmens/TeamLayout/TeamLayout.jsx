import styles from "../TeamLayout/TeamLayout.module.css";
import logo from "../../../../public/images/logo.png";
import { Image } from "@unpic/react";
import { Link, Outlet } from "react-router-dom";

function TeamLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Link to={"/"} className={styles.logo}>
          <Image
            src={logo}
            layout="constrained"
            cdn="netlify"
            alt="Akdeniz Üniversitesi Bilgisayar Topluluğu Logo"
            className={styles.image}
            width={150}
          />
        </Link>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TeamLayout;
