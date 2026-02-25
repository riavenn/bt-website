import styles from "../EventAndOrganization/EventAndOrganization.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import no_profile_image from "../../../../public/images/no_profile_image.webp";
import naz_hunerce from "../../../../public/images/naz_hunerce.webp";
import ensar_yapar from "../../../../public/images/ensar_yapar.webp";
import erkam_altay from "../../../../public/images/erkam_altay.webp";
import ilknur_ozcomart from "../../../../public/images/ilknur_ozcomart.webp";
import ceren_nerkiz from "../../../../public/images/ceren_nerkiz.webp";
import rabia_yuksel from "../../../../public/images/rabia_yuksel.webp";
import melissa_gencoglu from "../../../../public/images/melissa_gencoglu.webp";

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
      avatar: naz_hunerce,
      userName: "Naz Hünerçe",
      jobTitle: "Departman Koordinatörü",
    },
    {
      avatar: ensar_yapar,
      userName: "Ensar Yapar",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: erkam_altay,
      userName: "Erkam Altay",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: ilknur_ozcomart,
      userName: "İlknur Özcomart",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: rabia_yuksel,
      userName: "Rabia Yüksel",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: melissa_gencoglu,
      userName: "Melisa Gençoğlu",
      jobTitle: "Departman üyesi",
    },
    {
      avatar: ceren_nerkiz,
      userName: "Ceren Nerkiz",
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
