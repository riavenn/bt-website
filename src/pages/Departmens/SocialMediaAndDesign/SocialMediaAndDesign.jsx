import styles from "../SocialMediaAndDesign/SocialMediaAndDesign.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import no_profile_image from "../../../../public/images/no_profile_image.webp";
import eda_celik from "../../../../public/images/eda_celik.webp";
import ozge_eren from "../../../../public/images/ozge_eren.webp";
import ayse_gul_erol from "../../../../public/images/ayse_gul_erol.webp";

function SocialMediaAndDesign() {
  const cardData = [
    {
      icon: <FaPaintBrush />,
      title: "Marka & Kimlik",
      description:
        "Topluluğun kurumsal kimliğini oluşturuyor, logo, renk paleti ve tipografi standartlarını güncel tutuyoruz.",
    },
    {
      icon: <BsMegaphone />,
      title: "Sosyal Medya",
      description:
        "Instagram, X ve LinkedIn hesaplarımızı yönetiyor, etkileşimi artıracak stratejiler geliştiriyoruz.",
    },
    {
      icon: <FiPenTool />,
      title: "Görsel Tasarım",
      description:
        "Etkinlik afişleri, sosyal medya postları ve dijital içeriklerin tüm tasarım süreçlerini yürütüyoruz.",
    },
  ];

  const teamData = [
    {
      avatar: eda_celik,
      userName: "Eda Çelik",
      jobTitle: "Departman Koordinatörü",
    },
    {
      avatar: ozge_eren,
      userName: "Özge Eren",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: ayse_gul_erol,
      userName: "Ayşe Gül Erol",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: no_profile_image,
      userName: "Elif Kaya",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: no_profile_image,
      userName: "Sinan Yakışan",
      jobTitle: "Departman üyesi",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <DepartmanComponent
          title={"SOSYAL MEDYA VE TASARIM"}
          description={
            "Topluluğumuzun dijital yüzü olarak markamızı tasarlıyor, hikayemizi anlatıyor ve geleceği şekillendiriyoruz."
          }
          subTitle={"Yaratıcılık & Teknoloji"}
          whatwedoDescription={
            "Departman olarak topluluğumuzun görsel iletişim dilini oluşturuyor ve dijital varlığımızı güçlendiriyoruz."
          }
          cardData={cardData}
          teamData={teamData}
        />
      </div>
    </div>
  );
}

export default SocialMediaAndDesign;
