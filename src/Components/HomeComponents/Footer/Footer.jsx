import styles from "../Footer/Footer.module.css";
import logo from "../../../../public/images/logo.png";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdMailOutline } from "react-icons/md";
import { Image } from "@unpic/react";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.colum1}>
          <Link to={"/"} className={styles.logo}>
            <Image
              src={logo}
              layout="constrained"
              height={50}
              alt="Akdeniz Üniversitesi Bilgisayar Topluluğu Logosu"
              cdn="netlify"
              className={styles.image}
            />
          </Link>
          <div className={styles.description}>
            Öğrencilerin akademik ve sosyal gelişimine katkıda <br /> bulunmak
            amacıyla kurulmuş, yenilikçi ve öncü bir topluluk.
          </div>
          <div className={styles.socialLinks}>
            <Link
              to={"https://www.instagram.com/btakdenizuni/"}
              target="blank"
              className={styles.socialLink}>
              <FaInstagram />
            </Link>
            <Link
              to={
                "https://www.linkedin.com/in/akdu-bilgisayar-toplulu%C4%9Fu-644767222/?originalSubdomain=tr"
              }
              target="blank"
              className={styles.socialLink}>
              <FaLinkedin />
            </Link>
            <Link
              to={"https://www.youtube.com/@btakdenizuni/featured"}
              target="blank"
              className={styles.socialLink}>
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className={styles.colum2}>
          <div className={styles.title}>Hızlı Erişim</div>
          <div className={styles.links}>
            <div className={styles.link}>Ana Sayfa</div>
            <div className={styles.link}>Hakkımızda</div>
            <div className={styles.link}>Etkinlik Takvimi</div>
            <div className={styles.link}>İletişim</div>
          </div>
        </div>
        <div className={styles.colum3}>
          <div className={styles.title}>Topluluk</div>
          <div className={styles.links}>
            <div className={styles.link}>Yönetim Kurulu</div>
            <div className={styles.link}>Departmanlarımız</div>
            <div className={styles.link}>Tüzük</div>
            <div className={styles.link}>Üyelik formu</div>
          </div>
        </div>
        <div className={styles.colum4}>
          <div className={styles.title}>İletişim</div>
          <div className={styles.row}>
            <div className={styles.icon}>
              <FaLocationDot />
            </div>
            <div className={styles.text}>
              Üniversite Kampüsü, SKS Binası, İkinci Kat No: 9
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.icon}>
              <MdMailOutline />
            </div>
            <div className={styles.text}>
              bilgisayartoplulugu@akdeniz.edu.tr
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
