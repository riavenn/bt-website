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

const logos = [
  {
    logoUrl: tornet,
  },
  {
    logoUrl: gez,
  },
  {
    logoUrl: antalyapark,
  },
  {
    logoUrl: redbull,
  },
  {
    logoUrl: solana,
  },
  {
    logoUrl: gamfed,
  },
  {
    logoUrl: gsb,
  },
  {
    logoUrl: reeder,
  },
  {
    logoUrl: teraPortfoy,
  },
  {
    logoUrl: telePerformance,
  },
  {
    logoUrl: telpost,
  },
  {
    logoUrl: akbank,
  },
  {
    logoUrl: antgiad,
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
            <div className={styles.logoWrapper}>
              <Image
                key={index}
                src={logo.logoUrl}
                layout="constrained"
                width={125}
                height={100}
                alt=""
                className={styles.image}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Partnerships;
