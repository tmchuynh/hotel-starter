"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function ArrowButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      className="group inline-block relative bg-slate-800 shadow-2xl shadow-zinc-900 p-px rounded-full font-semibold text-white text-xs no-underline leading-6 cursor-pointer"
    >
      <span className="absolute inset-0 rounded-full overflow-hidden">
        <span className="absolute inset-0 bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500" />
      </span>
      <div className="relative z-10 flex items-center space-x-2 bg-zinc-950 px-4 py-0.5 rounded-full ring-1 ring-white/10">
        <span> {children}</span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="-bottom-0 left-[1.125rem] absolute bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 group-hover:opacity-40 w-[calc(100%-2.25rem)] h-px transition-opacity duration-500" />
    </Button>
  );
}
