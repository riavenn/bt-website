import styles from "../Header/Header.module.css";
import bilgisayarToplulugu from "../../../../public/images/bilgisayarToplulugu.jpg";
import { Image } from "@unpic/react";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftSide}>
          <div className={styles.subTitleContainer}>
            <div className={styles.line}></div>
            <div className={styles.subTitle}>HAKKIMIZDA</div>
          </div>
          <div className={styles.title}>
            Teknolojinin{" "}
            <span className={styles.titleColoredText}>Kalbindeyiz</span>
          </div>
          <div className={styles.description1}>
            Bilgisayar Topluluğu olarak misyonumuz, kampüsün en dinamik
            teknoloji ekosistemini oluşturmaktır.
          </div>
          <div className={styles.description2}>
            Öğrencileri sadece birer katılımcı olarak değil, geleceğin teknoloji
            liderleri olarak görüyoruz. Yazılım, donanım, yapay zeka ve siber
            güvenlik gibi alanlarda düzenlediğimiz kapsamlı eğitimler, atölye
            çalışmaları ve hackathonlarla üyelerimizin teknik becerilerini
            geliştiriyoruz.
          </div>
          <div className={styles.description3}>
            Amacımız, teorik bilgiyi pratiğe dönüştürmek, sektör liderleriyle
            köprü kurmak ve yenilikçi projelerin hayata geçmesine öncülük
            etmektir. Biz, teknolojiyi tüketen değil, üreten bir topluluğuz.
          </div>
          <div className={styles.divider}></div>
          <div className={styles.numbersAndUs}>
            <div className={styles.activeMembers}>
              <div className={styles.text}>1000+</div>
              <div className={styles.coloredText}>AKTİF ÜYE</div>
            </div>
            <div className={styles.events}>
              <div className={styles.text}>20+</div>
              <div className={styles.coloredText}>ETKİNLİK</div>
            </div>
            <div className={styles.projects}>
              <div className={styles.text}>5+</div>
              <div className={styles.coloredText}>PROJE</div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imageContainer}>
            <Image
              src={bilgisayarToplulugu}
              layout="constrained"
              width={2000}
              height={1500}
              alt="Akdeniz Üniversitesi Bilgisayar Topluluğu"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
