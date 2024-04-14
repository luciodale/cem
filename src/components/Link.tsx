export function Link({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="cursor-pointer border-2 border-cem px-4 py-2 text-xl font-bold text-cem transition-colors hover:bg-cem hover:text-white"
    >
      {label}
    </a>
  );
}
