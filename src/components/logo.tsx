import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative transition-opacity duration-300 ease-apple hover:opacity-80", className)}>
      <Image
        src="/images/planckpoint.png"
        alt="Planckpoint Logo"
        width={180}
        height={30}
        priority
        className="object-contain"
      />
    </Link>
  );
}
