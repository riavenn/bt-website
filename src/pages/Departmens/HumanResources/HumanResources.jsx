import styles from "../HumanResources/HumanResources.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import cetin_kalagan from "../../../../public/images/cetin_kalagan.webp";
import ravza_kazak from "../../../../public/images/ravza_kazak.webp";
import no_profile_image from "../../../../public/images/no_profile_image.webp";

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
      avatar: cetin_kalagan,
      userName: "Çetin Kalağan",
      jobTitle: "Departman Koordinatörü",
    },
    {
      avatar: ravza_kazak,
      userName: "Ravza Kazak",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: no_profile_image,
      userName: "Serpil Ekin Karataş",
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
