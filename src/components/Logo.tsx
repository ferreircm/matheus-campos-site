export function Logo({ className = "h-24 w-24" }: { className?: string }) {
  return (
    <img
      src="/images/logo-lion.png"
      alt="Matheus Campos lion shield logo"
      className={`block object-contain ${className}`}
    />
  );
}
