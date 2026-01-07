import styles from "../EventAndOrganization/EventAndOrganization.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import teamAvatar from "../../../../public/images/teamAvatar.webp";
import teamAvatar2 from "../../../../public/images/teamAvatar2.webp";

function EventAndOrganization() {
  const cardData = [
    {
      icon: <FaPaintBrush />,
      title: "Planlama & Koordinasyon",
      description:
        "Etkinlik takvimini oluşturuyor, mekan seçiminden teknik altyapıya kadar tüm süreci uçtan uca yönetiyoruz.",
    },
    {
      icon: <BsMegaphone />,
      title: "Operasyon Yönetimi",
      description:
        "Etkinlik günü akışını kontrol ediyor, lojistik süreçleri yönetiyor ve her detayın kusursuz işlemesini sağlıyoruz.",
    },
    {
      icon: <FiPenTool />,
      title: "Deneyim Tasarımı",
      description:
        "Katılımcıların etkinlikten en yüksek verimi alması için interaktif kurgular ve yaratıcı konseptler geliştiriyoruz.",
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
          title={"ETKİNLİK VE ORGANİZASYON"}
          description={
            "Fikirleri gerçeğe dönüştürüyor, topluluğumuzu ilham verici deneyimlerle bir araya getirerek unutulmaz anlar tasarlıyoruz."
          }
          subTitle={"Deneyim & Bağlantı"}
          whatwedoDescription={
            "Departman olarak vizyonumuzu fiziksel ve dijital platformlara taşıyor, topluluk üyelerimiz için networking ve gelişim alanları yaratıyoruz."
          }
          cardData={cardData}
          teamData={teamData}
        />
      </div>
    </div>
  );
}

export default EventAndOrganization;
