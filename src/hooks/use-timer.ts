import { useEffect, useState } from "react";

export default function useTimer({
  initialTTL = 60,
  interval = 1,
}: TimerProps) {
  const [ttl, setTTL] = useState(initialTTL);

  useEffect(() => {
    const timer = setInterval(() => {
      setTTL((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return prev;
        }
        return prev - 1;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [interval]);

  const minutes = Math.floor(ttl / 60);
  const remainingSeconds = ttl % 60;

  const time = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;

  return {
    watch: time,
    status: ttl === 0 ? "completed" : "pending",
    timeLeft: ttl,
  } as const;
}
