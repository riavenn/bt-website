import styles from "../ProjectAndTraining/ProjectAndTraining.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import ahmet_ozdemir from "../../../../public/images/ahmet_ozdemir.webp";
import ferhat_kaymaz from "../../../../public/images/ferhat_kaymaz.webp";
import hasret_yolcu from "../../../../public/images/hasret_yolcu.webp";
import ahmet_bugra_yalcin from "../../../../public/images/ahmet_bugra_yalcin.webp";
import caner_kuscu from "../../../../public/images/caner_kuscu.webp";
import onur_salkım from "../../../../public/images/onur_salkım.webp";
import no_profile_image from "../../../../public/images/no_profile_image.webp";

function ProjectAndTraining() {
  const cardData = [
    {
      icon: <FaPaintBrush />,
      title: "Eğitim Programları",
      description:
        "Workshoplar, sertifika programları ve teknik eğitimler düzenleyerek üyelerimizin gelişim yolculuklarına eşlik ediyoruz.",
    },
    {
      icon: <BsMegaphone />,
      title: "Proje Geliştirme",
      description:
        "Disiplinler arası çalışma grupları kuruyor, toplumsal fayda odaklı veya teknik projelerin hayata geçmesini sağlıyoruz.",
    },
    {
      icon: <FiPenTool />,
      title: "Ar-Ge ve Takip",
      description:
        "Güncel teknolojileri ve trendleri takip ederek topluluk bünyesinde uygulanabilecek yeni çalışma alanları keşfediyoruz.",
    },
  ];

  const teamData = [
    {
      avatar: ferhat_kaymaz,
      userName: "Ferhat Kaymaz",
      jobTitle: "Departman Koordinatörü",
    },
    {
      avatar: ahmet_ozdemir,
      userName: "Ahmet Özdemir",
      jobTitle: "Departman Üyesi",
    },
    {
      avatar: hasret_yolcu,
      userName: "Hasret Yolcu",
      jobTitle: "Departman Üyesi",
    },
    {
      avatar: ahmet_bugra_yalcin,
      userName: "Ahmet Buğra Yalçın",
      jobTitle: "Departman Üyesi",
    },
    {
      avatar: no_profile_image,
      userName: "Ceyda Sevim Ekici",
      jobTitle: "Departman Üyesi",
    },
    {
      avatar: caner_kuscu,
      userName: "Caner Kuşçu",
      jobTitle: "Departman Üyesi",
    },
    {
      avatar: onur_salkım,
      userName: "Onur Salkım",
      jobTitle: "Departman Üyesi",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <DepartmanComponent
          title={"PROJE VE EĞİTİM"}
          description={
            "Bilgiyi üretime dönüştürüyor, üyelerimizin yetkinliklerini geliştirecek projelerle geleceğin profesyonellerini hazırlıyoruz."
          }
          subTitle={"Gelişim & İnovasyon"}
          whatwedoDescription={
            "Topluluğumuzun akademik ve teknik altyapısını güçlendiriyor, teorik bilgiyi pratik projelerle destekleyerek sürdürülebilir bir öğrenme kültürü kuruyoruz."
          }
          cardData={cardData}
          teamData={teamData}
        />
      </div>
    </div>
  );
}

export default ProjectAndTraining;
