"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { href: "/curhat", label: "Mulai Curhat" },
    { href: "/kuesioner", label: "Kuesioner" },
    { href: "/bantuan", label: "Bantuan Profesional" },
  ] as const;

  return (
    <header className="border-b border-black/10 bg-white/70 backdrop-blur-sm">
      <div className="container-max flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight text-lg">
          <Image src="/images/logo_teras.png" alt="Logo Teras Cerita" width={70} height={70} className="w-10 h-10 md:w-[70px] md:h-[70px]" />

          <span>
            {" "}
            Teras <span className="text-primary">Cerita</span>
          </span>
        </Link>

        {/* Desktop menu tanpa style */}
        {/* <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/curhat" className="hover:text-primary">
            Mulai Curhat
          </Link>
          <Link href="/kuesioner" className="hover:text-primary">
            Kuesioner
          </Link>
          <Link href="/bantuan" className="hover:text-primary">
            Bantuan Profesional
          </Link>
        </nav> */}

        {/* Desktop menu dengan  style*/}
        <nav className="hidden md:flex items-center gap-6 text-sm relative">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-2 py-1 transition-all duration-300 ${
                pathname === item.href
                  ? "text-primary font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-100 after:transition-transform after:duration-300"
                  : "hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button className="md:hidden p-2 rounded hover:bg-black/5" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block hover:text-primary transition ${pathname === item.href ? "text-primary font-semibold border-l-4 border-primary pl-2" : ""}`}
              onClick={() => setOpen(false)} // tutup menu setelah klik
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
