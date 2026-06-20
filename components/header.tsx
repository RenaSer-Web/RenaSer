"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business, mainNav } from "@/lib/site";
import { Menu, Close, ChevronDown, WhatsApp } from "./icons";
import { trackConversion } from "./cta";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [treatOpen, setTreatOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setTreatOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-[var(--color-cream)]/92 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-rs flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Rena.Ser — inicio">
          <Logo />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight text-[var(--color-forest)]">
              Rena<span className="text-[var(--color-pine)]">Ser</span>
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-pine)]">
              Hidroterapia colónica
            </span>
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {mainNav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setTreatOpen(true)}
                onMouseLeave={() => setTreatOpen(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-[var(--color-ink-soft)] transition hover:bg-[var(--color-mist)] hover:text-[var(--color-forest)]"
                >
                  {item.label}
                  <ChevronDown width={15} height={15} />
                </Link>
                {treatOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <ul className="w-64 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-1.5 shadow-[var(--shadow-card)]">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-[var(--color-ink-soft)] transition hover:bg-[var(--color-mist)] hover:text-[var(--color-forest)]"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-semibold transition hover:bg-[var(--color-mist)] hover:text-[var(--color-forest)] ${
                  pathname === item.href ? "text-[var(--color-forest)]" : "text-[var(--color-ink-soft)]"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contacto/"
            className="text-sm font-semibold text-[var(--color-ink-soft)] transition hover:text-[var(--color-forest)]"
          >
            Contacto
          </Link>
          <a
            href={business.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackConversion("whatsapp_click", { source: "header" })}
            className="btn btn-primary !px-5 !py-2.5 text-sm"
          >
            <WhatsApp width={16} height={16} /> Turnos
          </a>
        </div>

        {/* Botón mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-forest)] transition hover:bg-[var(--color-mist)] lg:hidden"
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>

      {/* Menú mobile */}
      {open && (
        <div className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-[var(--color-cream)] lg:hidden">
          <nav className="container-rs flex flex-col gap-1 py-6" aria-label="Móvil">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-[var(--color-line)] py-3.5 text-lg font-semibold text-[var(--color-forest)]"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-3 border-l border-[var(--color-sage-soft)] pl-4">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block py-2.5 text-[var(--color-ink-soft)]"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <Link href="/contacto/" className="block py-3.5 text-lg font-semibold text-[var(--color-forest)]">
              Contacto
            </Link>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("whatsapp_click", { source: "mobile_menu" })}
              className="btn btn-wa mt-4"
            >
              <WhatsApp width={20} height={20} /> Pedí tu turno
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="flex h-10 w-10 items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3c0 4-3.5 6-3.5 10A3.5 3.5 0 0 0 12 16.5 3.5 3.5 0 0 0 15.5 13C15.5 9 12 7 12 3z"
          fill="var(--color-pine)"
        />
        <path
          d="M5 13c1.8.4 3 1.8 3.3 4M19 13c-1.8.4-3 1.8-3.3 4"
          stroke="var(--color-forest)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
