import styles from "../Sponsorship/Sponsorship.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import melisa_yanar from "../../../../public/images/melisa_yanar.webp";
import emre_can_tellal from "../../../../public/images/emre_can_tellal.webp";
import safiye_sena_yigit from "../../../../public/images/safiye_sena_yigit.webp";
import raziye_ates from "../../../../public/images/raziye_ates.webp";
import mazlum_delibas from "../../../../public/images/mazlum_delibas.webp";

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
      avatar: melisa_yanar,
      userName: "Melisa Sıla Yanar",
      jobTitle: "Departman Koordinatörü",
    },
    {
      avatar: emre_can_tellal,
      userName: "Emre Can Tellal",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: safiye_sena_yigit,
      userName: "Safiye Sena Yiğit",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: raziye_ates,
      userName: "Raziye Ateş",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: mazlum_delibas,
      userName: "Mazlum Delibaş",
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
