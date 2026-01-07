import styles from "../SocialMediaAndDesign/SocialMediaAndDesign.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import teamAvatar from "../../../../public/images/teamAvatar.webp";
import teamAvatar2 from "../../../../public/images/teamAvatar2.webp";


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
      avatar: teamAvatar,
      userName: "Mauro Icardi",
      jobTitle: "Departman Koordinatörü",
    },
    {
      avatar: teamAvatar2,
      userName: "Victor Osimhen",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: teamAvatar,
      userName: "Lucas Torreria",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: teamAvatar2,
      userName: "Leroy Sané",
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
