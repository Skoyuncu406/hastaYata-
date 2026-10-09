
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Phone,
  MessageCircle,
} from "lucide-react";

/* =========================================
   SETTINGS
========================================= */

const PHONE_DISPLAY = "0530 209 19 97";
const PHONE_LINK = "tel:+905302091997";
const WHATSAPP_LINK = "https://wa.me/905302091997";

const ADDRESS =
  "Mutlukent, Doğan Taşdelen Bulvarı No:53 D:K 06260 Çankaya/ANKARA";

const MAP_EMBED_URL =
  `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const MAP_DIRECTIONS_URL =
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

/* =========================================
   SCROLL REVEAL
========================================= */

function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      media.matches ||
      !("IntersectionObserver" in window)
    ) {
      setReduceMotion(media.matches);
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`
        ${className}
        transition-[opacity,transform]
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
      `}
      style={{
        transitionDuration: reduceMotion ? "0ms" : "850ms",
        transitionDelay:
          visible && !reduceMotion
            ? `${delay}ms`
            : "0ms",
      }}
    >
      {children}
    </div>
  );
}

/* =========================================
   CONTACT SECTION
========================================= */

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="
        relative isolate
        overflow-hidden
        bg-[#FAF7F1]
        text-[#082B60]
        lg:min-h-[calc(100svh-100px)]
      "
    >
      {/* BACKGROUND DECORATION */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -left-40 top-12
          h-[380px] w-[380px]
          rounded-full
          border border-[#32649A]/10
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 bottom-0
          h-[420px] w-[420px]
          rounded-full
          border border-[#32649A]/10
        "
      />

      <div
        className="
          relative mx-auto
          flex w-full max-w-[1600px]
          flex-col justify-center
          px-5 py-10
          sm:px-8 sm:py-12
          lg:min-h-[calc(100svh-100px)]
          lg:px-16 lg:py-5
          xl:px-20
        "
      >
        {/* =================================
            HEADING
        ================================= */}

        <RevealOnScroll className="mx-auto w-full max-w-[1200px]">
          <div className="text-center">
            {/* EYEBROW */}
            <div
              className="
                mb-2.5 flex items-center
                justify-center gap-3
              "
            >
              <span className="h-px w-9 bg-[#32649A]" />

              <span
                className="
                  text-[10px] font-semibold
                  uppercase tracking-[0.2em]
                  text-[#32649A]
                "
              >
                İletişim
              </span>

              <span className="h-px w-9 bg-[#32649A]" />
            </div>

            {/* TITLE */}
            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-[clamp(2.5rem,8vw,4.6rem)]
                font-medium
                leading-[0.98]
                tracking-[-0.035em]
                lg:whitespace-nowrap
                lg:text-[clamp(3.1rem,4.5vw,4.8rem)]
              "
            >
              <span className="block lg:inline">
                Size Bir Telefon
              </span>

              <span
                className="
                  block italic text-[#32649A]
                  lg:ml-[0.2em] lg:inline
                "
              >
                Kadar Yakınız.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mx-auto mt-3
                max-w-[650px]
                text-[12px]
                leading-[1.65]
                text-[#52647A]
                sm:text-[13px]
              "
            >
              Hasta yatağı kiralama ve satış süreçleri
              hakkında bilgi almak için bizimle iletişime
              geçebilirsiniz. Size en uygun çözümü
              birlikte belirleyelim.
            </p>

            {/* CONTACT BUTTONS */}
            <div
              className="
                mt-5 flex flex-col
                items-center justify-center
                gap-3
                sm:flex-row
              "
            >
              <a
                href={PHONE_LINK}
                className="
                  flex min-h-[44px]
                  w-full items-center
                  justify-center gap-2.5
                  rounded-full
                  bg-[#082B60]
                  px-6 py-2.5
                  text-[12px] font-semibold
                  text-[#F3EBDD]
                  transition-all duration-300
                  hover:bg-[#32649A]
                  hover:shadow-[0_8px_25px_rgba(8,43,96,0.15)]
                  sm:w-auto
                "
              >
                <Phone size={16} strokeWidth={1.7} />

                <span>{PHONE_DISPLAY}</span>

                <ArrowUpRight size={14} strokeWidth={1.6} />
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex min-h-[44px]
                  w-full items-center
                  justify-center gap-2.5
                  rounded-full
                  border border-[#32649A]/35
                  bg-transparent
                  px-6 py-2.5
                  text-[12px] font-semibold
                  text-[#082B60]
                  transition-all duration-300
                  hover:border-[#082B60]
                  hover:bg-[#082B60]
                  hover:text-white
                  sm:w-auto
                "
              >
                <MessageCircle size={16} strokeWidth={1.7} />

                <span>WhatsApp ile İletişim</span>

                <ArrowUpRight size={14} strokeWidth={1.6} />
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* =================================
            ADDRESS + MAP GRID
        ================================= */}

        <div
          className="
            mx-auto mt-7
            grid w-full max-w-[1300px]
            grid-cols-1
            items-stretch gap-4
            lg:mt-7
            lg:grid-cols-2
            lg:gap-5
          "
        >
          {/* =================================
              ADDRESS CARD
          ================================= */}

          <RevealOnScroll
            delay={100}
            className="h-full"
          >
            <div
              className="
                relative h-full
                overflow-hidden
                rounded-[22px]
                bg-gradient-to-br
                from-[#082B60]/85
                via-[#A9C5E4]/65
                to-[#32649A]/85
                p-[1.5px]
              "
            >
              <div
                className="
                  relative flex h-full
                  min-h-[280px]
                  flex-col items-center
                  justify-center
                  rounded-[20px]
                  bg-[#F3EBDD]
                  px-5 py-6
                  text-center
                  sm:min-h-[300px]
                  lg:h-[clamp(240px,34svh,310px)]
                  lg:min-h-0
                  lg:px-6 lg:py-4
                "
              >
                {/* LOCATION ICON */}
                <div
                  className="
                    mb-3 flex h-11 w-11
                    items-center justify-center
                    rounded-full
                    border border-[#32649A]/25
                    bg-[#FAF7F1]
                    text-[#32649A]
                    lg:mb-2
                  "
                >
                  <MapPin size={21} strokeWidth={1.5} />
                </div>

                {/* LABEL */}
                <span
                  className="
                    text-[9px] font-semibold
                    uppercase tracking-[0.18em]
                    text-[#32649A]
                  "
                >
                  Bizi Ziyaret Edin
                </span>

                {/* TITLE */}
                <h3
                  className="
                    mt-1
                    font-[family-name:var(--font-cormorant)]
                    text-[clamp(1.9rem,2.7vw,2.5rem)]
                    font-semibold
                    leading-none
                    text-[#082B60]
                  "
                >
                  Adresimiz
                </h3>

                {/* DIVIDER */}
                <span
                  className="
                    my-3 h-px w-11
                    bg-[#32649A]/50
                    lg:my-2
                  "
                />

                {/* ADDRESS */}
                <address
                  className="
                    max-w-[420px]
                    text-[12px]
                    not-italic
                    leading-[1.65]
                    text-[#52647A]
                    sm:text-[13px]
                  "
                >
                  Mutlukent, Doğan Taşdelen Bulvarı
                  <br />
                  No:53 D:K 06260
                  <br />
                  Çankaya / ANKARA
                </address>

                {/* DIRECTIONS BUTTON */}
                <a
                  href={MAP_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-4 flex min-h-[42px]
                    items-center justify-center
                    gap-2
                    rounded-full
                    bg-[#082B60]
                    px-5 py-2.5
                    text-[11px] font-semibold
                    text-[#F3EBDD]
                    transition-all duration-300
                    hover:bg-[#32649A]
                    hover:shadow-[0_8px_20px_rgba(8,43,96,0.15)]
                    lg:mt-3
                  "
                >
                  <Navigation size={15} strokeWidth={1.7} />

                  <span>Yol Tarifi Al</span>

                  <ArrowUpRight size={14} strokeWidth={1.6} />
                </a>

                {/* INNER BORDER */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute inset-[7px]
                    rounded-[15px]
                    border border-[#32649A]/10
                  "
                />
              </div>
            </div>
          </RevealOnScroll>

          {/* =================================
              GOOGLE MAP CARD
          ================================= */}

          <RevealOnScroll
            delay={200}
            className="h-full"
          >
            <div
              className="
                relative h-[280px]
                overflow-hidden
                rounded-[22px]
                bg-gradient-to-br
                from-[#082B60]/85
                via-[#A9C5E4]/65
                to-[#32649A]/85
                p-[1.5px]
                sm:h-[300px]
                lg:h-[clamp(240px,34svh,310px)]
              "
            >
              <div
                className="
                  relative h-full w-full
                  overflow-hidden
                  rounded-[20px]
                  bg-[#EDF1F5]
                "
              >
                <iframe
                  title="Ankara Hasta Yatağı Konum Haritası"
                  src={MAP_EMBED_URL}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="
                    absolute inset-0
                    h-full w-full
                    border-0
                  "
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
