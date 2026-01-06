import styles from "../TeamLayout/TeamLayout.module.css";
import logo from "../../../../public/images/logo.png";
import { Image } from "@unpic/react";
import { Link, Outlet } from "react-router-dom";

function TeamLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.logoWrapper}>
          <Link to={"/"} className={styles.logo}>
            <Image
              src={logo}
              layout="constrained"
              alt="Akdeniz Üniversitesi Bilgisayar Topluluğu Logo"
              className={styles.image}
              width={100}
            />
          </Link>
        </div>
        <div className={styles.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TeamLayout;
