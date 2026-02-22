import styles from "../Partnerships/Partnerships.module.css";
import Marquee from "react-fast-marquee";
import tornet from "../../../../public/images/tornet.webp";
import gez from "../../../../public/images/gez.svg";
import antalyapark from "../../../../public/images/antalyapark.webp";
import redbull from "../../../../public/images/redbull.svg";
import solana from "../../../../public/images/solana.svg";
import gamfed from "../../../../public/images/gamfed.webp";
import gsb from "../../../../public/images/gsb.webp";
import reeder from "../../../../public/images/reeder.webp";
import teraPortfoy from "../../../../public/images/teraPortfoy.webp";
import telePerformance from "../../../../public/images/telePerformance.svg";
import telpost from "../../../../public/images/telpost.webp";
import akbank from "../../../../public/images/akbank.svg";
import antgiad from "../../../../public/images/antgiad.svg";
import { Image } from "@unpic/react";
import { Link } from "react-router-dom";

const logos = [
  {
    logoUrl: tornet,
    url: "https://www.tornetteknoloji.com/",
  },
  {
    logoUrl: gez,
    url: "https://gezmobility.com/",
  },
  {
    logoUrl: antalyapark,
    url: "https://www.antalyapark.com.tr/",
  },
  {
    logoUrl: redbull,
    url: "https://www.redbull.com/tr-tr",
  },
  {
    logoUrl: solana,
    url: "https://solana.com/tr",
  },
  {
    logoUrl: gamfed,
    url: "https://oyunlastirma.co/",
  },
  {
    logoUrl: gsb,
    url: "https://gsb.gov.tr/",
  },
  {
    logoUrl: reeder,
    url: "https://reeder.com.tr/",
  },
  {
    logoUrl: teraPortfoy,
    url: "https://www.teraportfoy.com/",
  },
  {
    logoUrl: telePerformance,
    url: "https://www.tp.com/en-us/",
  },
  {
    logoUrl: telpost,
    url: "https://www.telpost.com.tr/",
  },
  {
    logoUrl: akbank,
    url: "https://www.akbank.com/",
  },
  {
    logoUrl: antgiad,
    url: "https://www.antgiad.org.tr/",
  },
];

function Partnerships() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>İş Birliği Yaptığımız Şirketler</div>
        <div className={styles.description}>
          Etkinliklerimizde bize destek olan işbirlikçilerimiz.
        </div>
      </div>
      <div className={styles.mainContent}>
        <Marquee
          gradient={true}
          gradientColor=""
          gradientWidth="150px"
          speed={50}
          pauseOnHover={true}>
          {logos.map((logo, index) => (
            <Link to={logo.url} target="_blank" className={styles.logoWrapper}>
              <Image
                key={index}
                src={logo.logoUrl}
                layout="constrained"
                width={100}
                height={100}
                alt={logo.logoUrl}
                className={styles.image}
              />
            </Link>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Partnerships;
