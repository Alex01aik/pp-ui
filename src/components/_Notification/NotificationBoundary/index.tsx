import React, { useEffect, useState } from "react";
import { useNotification } from "../useNotification";
import styles from "./styles.module.css";
import Close from "@/icons/Close";

const NotificationBoundary: React.FC = () => {
  const notificationManager = useNotification();
  const [timerKeys, setTimerKeys] = useState<
    { key: string; timerKey: Number }[]
  >([]);
  const [hideAnimationKeys, setHideAnimationKeys] = useState<
    { key: string; timerKey: Number }[]
  >([]);
  const [showAnimationKeys, setShowAnimationKeys] = useState<string[]>([]);

  useEffect(() => {
    const closeNotificationAfterDelay = (key: string, delay: number) => {
      if (!timerKeys.find((i) => i.key === key)) {
        const showTimer = setTimeout(() => {
          if (!showAnimationKeys.includes(key)) {
            setShowAnimationKeys((prev) => [...prev, key]);
          }
          clearTimeout(showTimer);
        }, 500);
        const timerKey = setTimeout(() => {
          const closeTimer = setTimeout(() => {
            notificationManager.close(key);
            clearTimeout(closeTimer);
            setHideAnimationKeys((prev) => prev.filter((i) => i.key !== key));
            setShowAnimationKeys((prev) => prev.filter((i) => i !== key));
          }, 300);
          setHideAnimationKeys((prev) => [
            ...prev,
            { key, timerKey: closeTimer },
          ]);

          clearTimeout(timerKey);
        }, delay);
        setTimerKeys((prev) => [...prev, { key, timerKey }]);
      }
    };

    notificationManager.notifications.forEach((n) => {
      if (n.autoClose) {
        closeNotificationAfterDelay(n.key, n.closeDelay ?? 3000);
      }
    });
  }, [notificationManager, timerKeys]);

  return notificationManager.notifications.length ? (
    <div className={`${styles.wrapper}`}>
      {notificationManager.notifications.map((n, i) => (
        <div
          key={i}
          className={`${styles.notification} 
            ${showAnimationKeys.includes(n.key) ? "" : styles.show}
            ${hideAnimationKeys.find((i) => i.key === n.key) ? styles.hide : ""}
          `}
        >
          <div className={`${styles.notificationContent}`}>
            {n.notification}
            <Close
              className={styles.close}
              onClick={() => notificationManager.close(n.key)}
              width={8}
              height={8}
            />
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default NotificationBoundary;
