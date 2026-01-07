import styles from "../ProjectAndTraining/ProjectAndTraining.module.css";
import { FaPaintBrush } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import DepartmanComponent from "../DepartmanComponent/DepartmanComponent";
import teamAvatar from "../../../../public/images/teamAvatar.webp";
import teamAvatar2 from "../../../../public/images/teamAvatar2.webp";

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
