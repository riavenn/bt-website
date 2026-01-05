import styles from "../Sponsorship/Sponsorship.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import teamAvatar from "../../../../public/images/teamAvatar.jpg";
import teamAvatar2 from "../../../../public/images/teamAvatar2.jpg";

function Sponsorship() {
  const cardData = [
    {
      icon: <FaPaintBrush />,
      title: "Stratejik Ortaklıklar",
      description:
        "Sektörün dev isimleriyle uzun vadeli partnerlikler kuruyor, topluluğumuza maddi ve manevi destek sağlıyoruz.",
    },
    {
      icon: <BsMegaphone />,
      title: "Sponsorluk Dosyası & Sunum",
      description:
        "Topluluğumuzun değer önerisini ve vizyonunu markalara en etkili şekilde anlatacak profesyonel dosyalar hazırlıyoruz.",
    },
    {
      icon: <FiPenTool />,
      title: "Networking ve CRM",
      description:
        "Kurumsal iletişim ağımızı genişletiyor, mevcut sponsorlarımızla olan ilişkilerimizi her geçen gün güçlendiriyoruz.",
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
          title={"SPONSORLUK"}
          description={
            "Hayallerimizi destekleyecek güçlü iş birlikleri kuruyor, ekosistemin öncü markalarıyla topluluğumuz arasında köprüler oluşturuyoruz."
          }
          subTitle={"İş Birliği & Strateji"}
          whatwedoDescription={
            "Topluluğumuzun sürdürülebilirliğini sağlamak adına kaynak yaratıyor ve kurumsal partnerlerimizle karşılıklı değer üreten ilişkiler yönetiyoruz."
          }
          cardData={cardData}
          teamData={teamData}
        />
      </div>
    </div>
  );
}

export default Sponsorship;
