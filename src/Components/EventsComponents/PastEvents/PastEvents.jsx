import React, { useState, useRef } from "react";
import styles from "../PastEvents/PastEvents.module.css";
import {
  FaCalendar,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import phytonEgitimi2 from "../../../../public/images/phytonEgitimi2.webp";
import phytonEgitimi from "../../../../public/images/phytonEgitimi.webp";
import ideathon2025 from "../../../../public/images/ideathon2025.webp";
import solanaEvent from "../../../../public/images/solanaEvent.webp";
import gamejam from "../../../../public/images/gamejam.webp";
import internetHaftasi2024 from "../../../../public/images/internetHaftasi2024.webp";
import akbankKampüs101 from "../../../../public/images/akbankKampüs101.webp";
import sekizMart from "../../../../public/images/sekizMart.webp";
import kaliteYönetimiCoffeeTalk from "../../../../public/images/kaliteYönetimiCoffeeTalk.webp";
import siberGüvenlikCoffeeTalk from "../../../../public/images/siberGüvenlikCoffeeTalk.webp";
import nearTürkiye from "../../../../public/images/nearTürkiye.webp";
import mikromobilite from "../../../../public/images/mikromobilite.webp";
import huaweiSummit from "../../../../public/images/huaweiSummit.webp";
import internetHaftasi2022 from "../../../../public/images/internetHaftasi2022.webp";
import girisimdeTasarimFinanstaYazilim from "../../../../public/images/girisimdeTasarimFinanstaYazilim.webp";
import publishMeGlobal from "../../../../public/images/publishMeGlobal.webp";
import sadiEvrenSeker from "../../../../public/images/sadiEvrenSeker.webp";
import { Image } from "@unpic/react";

const cardData = [
  {
    imageUrl: phytonEgitimi2,
    date: "21 Kasım 2025",
    title: "Phyton 101 Eğitimi - 2",
    description:
      "Topluluk olarak düzenlediğimiz Python 101 serisinin 2.dersinde kontrol yapıları, veri yapıları, fonksiyonlar gibi önemli yapıları öğrenerek phyton yolculuğumuzda önemli bir yol katettik.",
  },
  {
    imageUrl: phytonEgitimi,
    date: "24 Ekim 2025",
    title: "Phyton 101 Eğitimi",
    description:
      "Topluluk olarak düzenlediğimiz Python 101 eğitimi, yazılım dünyasına yeni adım atan teknoloji meraklılarını bir araya getirdi. Temel değişkenlerden döngülere kadar geniş bir müfredatın işlendiği bu etkinlikte, katılımcılarımız uygulamalı örneklerle pratik yapma imkanı buldu.",
  },
  {
    imageUrl: ideathon2025,
    date: "18-19 Nisan 2025",
    title: "Ideathon'25",
    description:
      "Büyük bir heyecan ve yaratıcılıkla geride bıraktığımız Ideathon'25, zihinlerde iz bırakan projelere ve unutulmaz bir iş birliğine sahne oldu. Sorunlara çözüm arayan vizyoner beyinlerin bir araya geldiği bu maratonda, sadece fikirler değil, geleceğin potansiyeli sergilendi.",
  },
  {
    imageUrl: solanaEvent,
    date: "25 Ekim 2024",
    title: "Solana Türkiye Buluşması",
    description:
      "Solana Türkiye Allstar ekibiyle gerçekleştirdiğimiz bu özel buluşmada, Blockchain teknolojisinin sınırlarını ve Solana ekosisteminin sunduğu sınırsız fırsatları keşfettik. Web3 dünyasına ilgi duyan teknoloji tutkunlarını bir araya getiren bu etkinlik, geleceğin dijital altyapısına derinlemesine bir bakış sundu.",
  },
  {
    imageUrl: gamejam,
    date: "24-25-26 Mayıs 2024",
    title: "Akdeniz Game Jam'25",
    description:
      "Topluluğumuzun en heyecan verici etkinliklerinden biri olan Akdeniz Game Jam'25, büyük bir coşkuyla sona erdi! Türkiye'nin dört bir yanından gelen oyun tutkunları, yaratıcılığın ve uykusuzluğun sınırlarını zorlayarak muazzam bir başarıya imza attı.",
  },
  {
    imageUrl: internetHaftasi2024,
    date: "30 Nisan 2024",
    title: "İnternet Haftası Özel Etkinliği'24",
    description:
      "Topluluğumuz tarafından düzenlenen İnternet Haftası Özel Etkinliği ile dijital dünyanın nabzını tuttuk! Teknolojinin farklı disiplinlerini bir araya getiren bu konferansta, hem vizyonumuzu genişlettik hem de kariyer yolculuğumuza yeni kapılar açtık.",
  },
  {
    imageUrl: akbankKampüs101,
    date: "10 Mayıs 2024",
    title: "Akbank Kampüs 101",
    description:
      "Topluluk olarak, bankacılık ve teknoloji dünyasının öncü isimlerinden Akbank ekibini kampüsümüzde ağırlamanın heyecanını yaşadık! Akbank Kampüs 101 etkinliği ile teorik bilgileri sektörün mutfağından gelen tecrübelerle birleştirdik.",
  },
  {
    imageUrl: sekizMart,
    date: "8 Mart 2024",
    title: "8 Mart Dünya Kadınlar Günü Özel Etkinliği",
    description:
      "Topluluk olarak, 8 Mart Dünya Kadınlar Günü'nü anlam dolu bir konferansla taçlandırdık. Kendi alanlarında iz bırakan 4 değerli kadın konuşmacımızı ağırladığımız bu özel günde, kariyer yolculuklarından sektörel tecrübelere ve inovatif yaklaşımlara uzanan bir yolculuğa çıktık.",
  },
  {
    imageUrl: kaliteYönetimiCoffeeTalk,
    date: "23 Aralık 2023",
    title: "Kalite Yönetimi Coffee Talk",
    description:
      "Topluluğumuzun düzenlediği Coffee Talk serisinde bu kez odak noktamız Kalite Yönetimi oldu. Samimi bir sohbet ortamında gerçekleştirdiğimiz etkinlikte, alanında derin bilgi ve tecrübeye sahip olan Çağdaş Köseoğlu’nu ağırladık.",
  },
  {
    imageUrl: siberGüvenlikCoffeeTalk,
    date: "20 Aralık 2023",
    title: "Siber Güvenlik ve Bilgi Güvenliği Coffee Talk",
    description:
      "Topluluğumuzun yeni etkinlik formatı olan Coffee Talk serisinin ilk oturumunu büyük bir ilgiyle gerçekleştirdik! Serimizin açılışını, siber güvenlik ve bilgi güvenliği alanındaki derin tecrübeleriyle tanınan Tevfik Firuzan Çelik ile yaptık.",
  },
  {
    imageUrl: nearTürkiye,
    date: "6 Ekim 2023",
    title: "Near Türkiye ile Blockchain ve Akıllı Sözleşmeler",
    description:
      "Geleceğin teknolojilerini yakından tanımak adına düzenlediğimiz bu etkinlikte Near Türkiye ekibini ağırladık! Near Türkiye’den Hasan Özkul, blockchain ekosisteminin kapılarını bizler için araladı.",
  },
  {
    imageUrl: mikromobilite,
    date: "2 Aralık 2022",
    title: "Geleceğin Ulaşımı: Mikromobilite",
    description:
      "Topluluğumuzda bu kez sürdürülebilir ve teknolojik ulaşım çözümlerini masaya yatırdık! Geleceğin Ulaşımı: Mikromobilite etkinliğimizde, konuyu hem iş dünyası hem de akademik perspektiften ele alan çok değerli iki ismi ağırladık.",
  },
  {
    imageUrl: huaweiSummit,
    date: "21 Ekim 2022",
    title: "Huawei Summit Akdeniz",
    description:
      "Topluluğumuz, teknoloji dünyasının küresel liderlerinden biri olan Huawei ile muhteşem bir zirveye imza attı! Huawei Summit Akdeniz kapsamında, şirketin farklı departmanlarından gelen uzman konuşmacılarla teknolojinin bugününe ve yarınına dair derinlemesine bir yolculuğa çıktık.",
  },
  {
    imageUrl: internetHaftasi2022,
    date: "1 Nisan 2022",
    title: "İnternet Haftası Özel Etkinliği'22",
    description:
      "Topluluğumuz için bir gelenek haline gelecek olan İnternet Haftası kutlamalarımızın ilkini, İnternet Haftası Özel Etkinliği '22 ile gerçekleştirmiştik. Dijital dünyanın üç önemli ismini ağırladığımız bu etkinlik, gelecekteki projelerimiz için de büyük bir ilham kaynağı oldu.",
  },
  {
    imageUrl: girisimdeTasarimFinanstaYazilim,
    date: "13 Aralık 2021",
    title: "Girişimde Tasarım Finansta Yazılım",
    description:
      "Topluluğumuzda sınırları kaldırdık ve günümüz dünyasının en dinamik üç alanını tek bir sahnede birleştirdik! Girişimde Tasarım, Finansta Yazılım etkinliğimizde, bu alanların birbirini nasıl beslediğini ve dönüştürdüğünü uzmanlarından dinledik.",
  },
  {
    imageUrl: publishMeGlobal,
    date: "5 Kasım 2021",
    title: "Oyun Geliştiricilerinin Oyunlarının Pazarlanması ve Yayınlanması",
    description:
      "Topluluğumuzla dijitalin sınırlarını aştık ve ekran başında bir araya geldik! Youtube üzerinden gerçekleştirdiğimiz canlı yayınımızda, bir oyunun sadece geliştirilme sürecini değil, dünya sahnesine çıkış yolculuğunu konuştuk.",
  },
  {
    imageUrl: sadiEvrenSeker,
    date: "2 Kasım 2021",
    title: "Veri Biliminin Güncel Durumu ve Geleceği",
    description:
      "Topluluğumuzda, veri biliminin ülkemizdeki en önemli isimlerinden biri olan Şadi Evren Şeker’i ağırlamanın gururunu yaşadık! Veri Biliminin Güncel Durumu ve Geleceği temalı konferansımızda, verinin gücünü ve dünyayı nasıl dönüştürdüğünü derinlemesine inceledik.",
  },
];

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={data.imageUrl}
          alt={data.title}
          className={styles.image}
          layout="constrained"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.eventDetailsContainer}>
        <div className={styles.dateContainer}>
          <div className={styles.dateIcon}>
            <FaCalendar />
          </div>
          <div className={styles.dateText}>{data.date}</div>
        </div>
        <div className={styles.cardTitle}>{data.title}</div>
        <div className={styles.cardDescription}>{data.description}</div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.showIcon}>
        <FaEye />
      </div>
    </div>
  );
};

function PastEvents() {
  const [currentPage, setCurrentPage] = useState(1);
  const titleRef = useRef(null);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(cardData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = cardData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (titleRef.current) {
      titleRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer} ref={titleRef}>
        <div className={styles.titleLine}></div>
        <div className={styles.title}>Geçmiş Dönem Etkinlikleri</div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.cardsContainer}>
          {currentItems.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.pageBtn}>
              <FaChevronLeft />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`${styles.pageNumber} ${
                  currentPage === i + 1 ? styles.activePage : ""
                }`}>
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.pageBtn}>
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PastEvents;
