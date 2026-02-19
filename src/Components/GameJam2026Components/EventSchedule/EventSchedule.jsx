import styles from "../EventSchedule/EventSchedule.module.css";

const Item = ({ number, itemTitle, itemDescription, date }) => {
  return (
    <div className={styles.item}>
      <div className={styles.number}>{number}</div>
      <div className={styles.textContainer}>
        <div className={styles.itemTitle}>{itemTitle}</div>
        <div className={styles.description}>{itemDescription}</div>
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
    date: "2 Mayıs, 14:00",
  },
  {
    number: "2",
    title: "Geliştirme Süreci & Mentörlük",
    description:
      "Kodlama, tasarım ve seslendirme maratonu. Alanında uzman mentörler etkinlik alanında sorularınızı yanıtlayacak.",
    date: "3 Mayıs, Tüm Gün",
  },
  {
    number: "3",
    title: "Teslim ve Sunumlar",
    description:
      "Oyunların itch.io sayfasına yüklenmesi ve jüri sunumnları. Kazananların açıklanması ve kapanış partisi.",
    date: "4 Mayıs, 17:00",
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
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventSchedule;
