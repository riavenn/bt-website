import { useState, useEffect } from "react";
import styles from "./EventCountdown.module.css";

const EventCountdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        gün: Math.floor(difference / (1000 * 60 * 60 * 24)),
        saat: Math.floor((difference / (1000 * 60 * 60)) % 24),
        dakika: Math.floor((difference / 1000 / 60) % 60),
        saniye: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) {
    return <div className={styles.eventStartedText}>ETKİNLİK BAŞLADI!</div>;
  }

  return (
    <div className={styles.container}>
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className={styles.countdown}>
          <div className={styles.numberOfDate}>
            {value.toString().padStart(2, "0")}
          </div>
          <div className="text-xs uppercase text-gray-500">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default EventCountdown;
