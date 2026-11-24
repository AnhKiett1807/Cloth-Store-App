type Props = { className?: string; label?: string };

export default function Placeholder({ className = "", label = "" }: Props) {
  return (
    <div className={`ph ${className}`} aria-hidden="true">
      {label}
    </div>
  );
}
