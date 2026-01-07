import styles from "../HumanResources/HumanResources.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import teamAvatar from "../../../../public/images/teamAvatar.webp";
import teamAvatar2 from "../../../../public/images/teamAvatar2.webp";

function HumanResources() {
  const cardData = [
    {
      icon: <FaPaintBrush />,
      title: "Duyuru & Bilgilendirme",
      description:
        "Topluluk gruplarında güncel gelişmeleri, önemli kararları ve haberleri üyelerimize en doğru ve hızlı şekilde iletiyoruz.",
    },
    {
      icon: <BsMegaphone />,
      title: "Etkinlik Tanıtımı",
      description:
        "Tüm departmanların faaliyetlerini ve etkinliklerini topluluk içinde duyuruyor, katılımı teşvik ederek heyecanı canlı tutuyoruz.",
    },
    {
      icon: <FiPenTool />,
      title: "Üye İlişkileri & İletişim",
      description:
        "Üyelerimizle birebir iletişim kuruyor, taleplerini dinliyor ve topluluk içi bağları güçlendirecek köprüler kuruyoruz.",
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
          title={"İNSAN KAYNAKLARI"}
          description={
            "Topluluğumuzun kalbi olarak üyelerimizle bağ kuruyor, iletişimi yönetiyor ve güçlü bir aile kültürü inşa ediyoruz."
          }
          subTitle={"Gelişim & İnovasyon"}
          whatwedoDescription={
            "Departman olarak topluluk içi etkileşimi en üst seviyede tutuyor, haberleşme ağımızı yönetiyor ve her bir üyemizin sürecin bir parçası olmasını sağlıyoruz."
          }
          cardData={cardData}
          teamData={teamData}
        />
      </div>
    </div>
  );
}

export default HumanResources;
