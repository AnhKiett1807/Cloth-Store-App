import { useEffect, useState } from "react";

export function useCountdown(totalSeconds: number) {
  const [left, setLeft] = useState(totalSeconds);

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  return {
    days: Math.floor(left / 86400),
    hours: Math.floor((left % 86400) / 3600),
    mins: Math.floor((left % 3600) / 60),
    secs: left % 60,
  };
}
