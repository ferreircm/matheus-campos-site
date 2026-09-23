import { useId } from "react";

export function Logo({ className = "h-24 w-24" }: { className?: string }) {
  const gradientId = useId();

  return (
    <svg className={className} viewBox="0 0 96 112" fill="none" aria-label="Matheus Campos lion shield mark">
      <defs><linearGradient id={gradientId}><stop stopColor="var(--gold)" /></linearGradient></defs>
      <path d="M48 5C59 14 72 18 87 20v35c0 25-14 42-39 53C23 97 9 80 9 55V20C24 18 37 14 48 5Z" stroke="var(--gold)" strokeWidth="3" />
      <path d="M67 36c-8-8-22-9-31-2 9-2 17 1 21 7-10-6-24-2-28 8 6-4 13-4 18-1-9 2-16 9-17 18 5-5 11-7 17-6-8 6-11 16-7 25 2-8 7-13 13-17-1 8 2 16 9 21-1-7 1-13 5-18 8-10 9-24 2-34l-2-1Z" fill={`url(#${gradientId})`} />
      <path d="M31 55c7-1 14 2 18 8-4 0-7 2-9 5-5-1-9-6-9-13Z" fill="var(--navy)" />
      <path d="M38 49c1.5 0 2.5 1 2.5 2.4s-1 2.3-2.5 2.3-2.5-.9-2.5-2.3 1-2.4 2.5-2.4Z" fill="var(--navy)" />
    </svg>
  );
}