import styles from "../EventSchedule/EventSchedule.module.css";

const Item = ({ number, itemTitle, itemDescription, articles, date }) => {
  return (
    <div className={styles.item}>
      <div className={styles.number}>{number}</div>
      <div className={styles.textContainer}>
        <div className={styles.itemTitle}>{itemTitle}</div>
        <div className={styles.itemDescription}>{itemDescription}</div>
        {articles && (
          <div className={styles.articles}>
            {articles.map((item, index) => (
              <div className={styles.articleRow} key={index}>
                <span className={styles.time}>{item.time}</span>
                <span className={styles.articleText}>{item.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

const itemData = [
  {
    number: "1",
    title: "Açılış ve Tema Duyurusu",
    description:
      "Etkinlik başlangıcı, tanışma toplantısı ve büyün an: Temanın açıklanması. Takım kurmayanlar için networking seansı.",
    articles: [
      {
        time: "14:00 – 15:30",
        text: "Kapı Açılış, Kayıt Kontrol ve Özel Tasarım Yaka Kartı Teslimi",
      },
      {
        time: "15:30 – 16:30",
        text: "Açılış Seremonisi, Sponsor Sunumları ve Büyük Temanın Açıklanması",
      },
      {
        time: "17:30",
        text: "GERİ SAYIM BAŞLAR! (Kodlama, tasarım ve planlama süreci)",
      },
      { time: "20:00", text: "Akşam Yemeği" },
    ],
    date: "2 Mayıs",
  },
  {
    number: "2",
    title: "Geliştirme Süreci & Mentörlük",
    description:
      "Kodlama, tasarım ve seslendirme maratonu. Alanında uzman mentörler etkinlik alanında sorularınızı yanıtlayacak.",
    articles: [
      {
        time: "09:00",
        text: "Kahvaltı ve Sabah Kahvesi.",
      },
      {
        time: "11:00 – 13:00",
        text: "1. Mentor Seansı (Teknik Destek): Mentorların masaları gezerek oyun motoru (Unity/Unreal), kodlama ve asset sorunlarına müdahale etmesi",
      },
      {
        time: "16:00 – 18:00",
        text: "2. Mentor Seansı (Final Hazırlık): Oyun mekanikleri, görev dağılımı kontrolü ve pazar günkü final sunumu için pitching tüyoları",
      },
      {
        time: "00:00",
        text: "Gece Atıştırmalığı (Midnight Pizza/Donut)",
      },
    ],
    date: "3 Mayıs",
  },
  {
    number: "3",
    title: "Teslim ve Sunumlar",
    description:
      "Oyunların itch.io sayfasına yüklenmesi ve jüri sunumnları. Kazananların açıklanması ve kapanış partisi.",
    articles: [
      {
        time: "12:00 – 13:30",
        text: "Son Hata Ayıklamaları (Bug Fixing) ve Sunum Hazırlığı",
      },
      {
        time: "14:00",
        text: "SÜRE DOLDU! Oyunların Itch.io sayfasına yüklenmesi.",
      },
      {
        time: "14:30 – 16:30",
        text: "Jüri Değerlendirmesi ve Takım Sunumları.",
      },
      {
        time: "17:00 – 18:00",
        text: "Ödül Töreni, Plaket Takdimi ve Kapanış.",
      },
    ],
    date: "4 Mayıs",
  },
];

function EventSchedule() {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.title}>
          Etkinlik <span className={styles.coloredTitle}>Programı</span>
        </div>
        <div className={styles.description}>
          48 saatlik maratonun yol haritası.
        </div>
        <div className={styles.itemsContainer}>
          <div className={styles.divider}></div>
          {itemData.map((item, index) => (
            <Item
              key={index}
              number={item.number}
              itemTitle={item.title}
              itemDescription={item.description}
              articles={item.articles}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventSchedule;
