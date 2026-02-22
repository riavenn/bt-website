import styles from "../Management/Management.module.css";
import { FaGavel, FaHandshake } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import baris_sari from "../../../../public/images/baris_sari.webp";
import melike_ozcan from "../../../../public/images/melike_ozcan.webp";
import no_profile_image from "../../../../public/images/no_profile_image.webp";

function Management() {
  const cardData = [
    {
      icon: <FaGavel />,
      title: "Stratejik Liderlik",
      description:
        "Topluluğun uzun vadeli vizyonunu belirliyor, büyüme hedeflerini planlıyor ve tüm departmanlar arasındaki uyumu koordine ediyoruz.",
    },
    {
      icon: <FaHandshake />,
      title: "Temsil & İş Birlikleri",
      description:
        "Sektör paydaşları, sponsorlar ve diğer topluluklarla ilişkileri yöneterek topluluğumuzun ekosistemdeki varlığını güçlendiriyoruz.",
    },
    {
      icon: <BsGraphUp />,
      title: "Denetim & Gelişim",
      description:
        "Departman performanslarını analiz ediyor, topluluk kültürünü koruyor ve kurumsal sürdürülebilirlik için gerekli kararları alıyoruz.",
    },
  ];

  const teamData = [
    {
      avatar: baris_sari,
      userName: "Barış Sarı",
      jobTitle: "Topluluk Başkanı",
    },
    {
      avatar: melike_ozcan,
      userName: "Melike Özcan",
      jobTitle: "Topluluk Başkan Yardımcısı",
    },
    {
      avatar: no_profile_image,
      userName: "Fırat Yücel",
      jobTitle: "Topluluk Danışman Hocası",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <DepartmanComponent
          title={"YÖNETİM KURULU"}
          description={
            "Geleceğin rotasını çiziyor, stratejik adımlarla topluluğumuzu ileriye taşıyarak sürdürülebilir bir değer inşa ediyoruz."
          }
          subTitle={"Vizyon & Strateji"}
          whatwedoDescription={
            "Topluluğumuzun sürdürülebilir büyümesine rehberlik ediyor, stratejik iş birlikleriyle ekosistemdeki konumumuzu güçlendiriyor ve her bir üyemizin potansiyelini en üst seviyeye taşıyacak bir yönetim kültürü inşa ediyoruz."
          }
          cardData={cardData}
          teamData={teamData}
        />
      </div>
    </div>
  );
}

export default Management;
