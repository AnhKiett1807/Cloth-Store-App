import { useCountdown } from "../hooks/useCountdown";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ seconds }: { seconds: number }) {
  const t = useCountdown(seconds);
  const items: [string, number][] = [
    ["Days", t.days],
    ["Hours", t.hours],
    ["Mins", t.mins],
    ["Secs", t.secs],
  ];

  return (
    <div className="timer">
      {items.map(([label, value]) => (
        <div key={label} className="time-box">
          <strong>{pad(value)}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
