
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Phone,
  Menu,
  X,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const PHONE = "+905302091997";
const WHATSAPP = "905302091997";

const navigation = [
  { label: "Anasayfa", href: "#anasayfa", id: "anasayfa" },
  { label: "Hizmetler", href: "#hizmetler", id: "hizmetler" },
  { label: "Ürünler", href: "#urunler", id: "urunler" },
  { label: "İletişim", href: "#iletisim", id: "iletisim" },
];

const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  "Merhaba, hasta yatağı kiralama hakkında bilgi ve fiyat teklifi almak istiyorum."
)}`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("anasayfa");

  useEffect(() => {
    const sectionIds = navigation.map((item) => item.id);

    let frameId = null;

    const updateActiveSection = () => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      // Navbar'ın hemen altındaki görünür alanı esas al.
      const referenceY = 100 + (window.innerHeight - 100) * 0.35;

      let currentSection = sections[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= referenceY) {
          currentSection = section.id;
        }
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );

      frameId = null;
    };

    const handleScroll = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const handleNavigation = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#082B60]/10 bg-[#F3EBDD]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[100px] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

        {/* LOGO */}
        <a
          href="#anasayfa"
          onClick={() => handleNavigation("anasayfa")}
          aria-label="Ankara Hasta Yatağı Anasayfa"
          className="group flex min-w-0 shrink-0 items-center gap-3"
        >
          <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-[1.04] sm:h-[70px] sm:w-[70px] xl:h-[80px] xl:w-[80px]">
            <Image
              src="/images/logo.jpeg"
              alt="Ankara Hasta Yatağı Kiralama ve Satış Merkezi"
              fill
              priority
              sizes="(max-width: 640px) 60px, (max-width: 1280px) 70px, 80px"
              className="object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-[family-name:var(--font-cormorant)] text-[21px] font-bold leading-[0.95] tracking-[-0.025em] text-[#082B60] sm:text-[25px] xl:text-[29px]">
              Ankara
              <span className="block">Hasta Yatağı</span>
            </span>

            <span className="mt-2 text-[7px] font-bold uppercase tracking-[0.13em] text-[#32649A] sm:text-[8px] xl:text-[9px]">
              Kiralama & Satış Merkezi
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav
          aria-label="Ana menü"
          className="hidden items-center gap-5 xl:gap-8 min-[1180px]:flex"
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavigation(item.id)}
                aria-current={isActive ? "location" : undefined}
                className={`
                  group relative flex h-[100px]
                  items-center px-1
                  text-[14px] font-semibold
                  tracking-[0.01em]
                  transition-colors duration-300

                  ${
                    isActive
                      ? "text-[#082B60]"
                      : "text-[#082B60]/70 hover:text-[#082B60]"
                  }
                `}
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[2px]">
                  {item.label}
                </span>

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`
                    absolute bottom-[29px]
                    left-1/2 h-[2px]
                    -translate-x-1/2
                    bg-[#32649A]
                    transition-all duration-500
                    ease-out

                    ${
                      isActive
                        ? "w-[calc(100%-8px)]"
                        : "w-0 group-hover:w-[calc(100%-8px)]"
                    }
                  `}
                />
              </a>
            );
          })}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden shrink-0 items-center gap-2 min-[1180px]:flex">

          {/* OFFER */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-[46px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#082B60] px-4 text-[12px] font-semibold text-[#F3EBDD] shadow-[0_5px_16px_rgba(8,43,96,0.10)] transition-all duration-500 hover:-translate-y-[2px]"
          >
            <span className="absolute inset-0 translate-y-full bg-[#32649A] transition-transform duration-500 group-hover:translate-y-0" />

            <span className="relative z-10">Teklif Al</span>

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="relative z-10"
            />
          </a>

          {/* CALL */}
          <a
            href={`tel:${PHONE}`}
            aria-label="0531 828 08 50 numarasını ara"
            className="premium-call-pulse group inline-flex h-[46px] items-center justify-center gap-2 rounded-full px-4 text-[12px] font-semibold text-white"
          >
            <Phone size={16} strokeWidth={1.8} />
            <span>Hemen Ara</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden iletişim"
            className="premium-whatsapp-pulse group inline-flex h-[46px] items-center justify-center gap-2 rounded-full px-4 text-[12px] font-semibold text-white"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* MOBILE ACTIONS */}
        <div className="flex shrink-0 items-center gap-2 min-[1180px]:hidden">
          <a
            href={`tel:${PHONE}`}
            aria-label="Hemen Ara"
            title="Hemen Ara"
            className="premium-call-pulse flex h-10 w-10 items-center justify-center rounded-full text-white"
          >
            <Phone size={17} strokeWidth={1.8} />
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="premium-whatsapp-pulse flex h-10 w-10 items-center justify-center rounded-full text-white"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center text-[#082B60]"
          >
            {menuOpen ? (
              <X size={26} strokeWidth={1.5} />
            ) : (
              <Menu size={26} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`
          overflow-hidden
          border-t border-[#082B60]/10
          bg-[#F3EBDD]
          transition-all duration-500 ease-in-out
          min-[1180px]:hidden

          ${
            menuOpen
              ? "max-h-[550px] opacity-100"
              : "max-h-0 border-t-0 opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobil menü"
          className="flex flex-col px-6 pb-8 pt-5"
        >
          {navigation.map((item, index) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavigation(item.id)}
                aria-current={isActive ? "location" : undefined}
                className="group flex items-center justify-between border-b border-[#082B60]/10 py-4"
              >
                <span
                  className={`
                    relative font-[family-name:var(--font-cormorant)]
                    text-[31px] font-medium
                    transition-colors duration-300

                    ${
                      isActive
                        ? "text-[#32649A]"
                        : "text-[#082B60]"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#32649A]" />
                  )}
                </span>

                <span className="text-[11px] font-medium text-[#082B60]/40">
                  0{index + 1}
                </span>
              </a>
            );
          })}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-7 flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#082B60] text-[13px] font-semibold text-[#F3EBDD] transition-colors duration-300 hover:bg-[#32649A]"
          >
            Kiralama Teklifi Al
            <ArrowUpRight size={17} />
          </a>

          <p className="mt-6 text-center text-[12px] text-[#082B60]/60">
            Ankara'nın her yerine hizmet
          </p>
        </nav>
      </div>
    </header>
  );
}
