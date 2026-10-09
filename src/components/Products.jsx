
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
  Check,
  X,
  ZoomIn,
} from "lucide-react";

/* =========================================
   SETTINGS
========================================= */

const PHONE_NUMBER = "905302091997";

/* =========================================
   PRODUCTS
========================================= */

const products = [
  {
    id: "full-abs",
    number: "01",
    name: "2 Motorlu Full ABS",
    subtitle: "Hasta Yatağı",
    image: "/images/full-abs.jpg",
    label: "FULL ABS MODEL",
    description:
      "ABS korkuluk ve başlık tasarımıyla konforlu, güvenli ve pratik bir bakım deneyimi.",
    features: [
      "Elektrikli baş ve ayak hareketi",
      "ABS korkuluk sistemi",
      "Kumandalı kullanım",
    ],
  },
  {
    id: "ekonomik",
    number: "02",
    name: "2 Motorlu Ekonomik",
    subtitle: "Hasta Yatağı",
    image: "/images/ekonomik-model.jpg",
    label: "EKONOMİK MODEL",
    description:
      "Günlük bakım ihtiyaçları için işlevsel, kullanımı kolay ve ekonomik hasta yatağı çözümü.",
    features: [
      "Elektrikli baş ve ayak hareketi",
      "Metal yan korkuluklar",
      "Kumandalı kullanım",
    ],
  },
  {
    id: "tabanca",
    number: "03",
    name: "2 Motorlu Tabanca",
    subtitle: "Korkuluklu Hasta Yatağı",
    image: "/images/tabanca-korkuluk.jpg",
    label: "TABANCA KORKULUK",
    description:
      "Katlanabilir metal korkuluk yapısıyla evde bakım süreçleri için kullanışlı bir seçenek.",
    features: [
      "Elektrikli baş ve ayak hareketi",
      "Tabanca tipi yan korkuluk",
      "Kumandalı pozisyon ayarı",
    ],
  },
  {
    id: "brk-4001",
    number: "04",
    name: "BRK 4001",
    subtitle: "4 Motorlu ABS Hasta Yatağı",
    image: "/images/azka-4001.jpg",
    label: "BRK 4001",
    description:
      "Dört motorlu yapısı ve ABS korkuluk tasarımıyla gelişmiş bakım ihtiyaçlarına yönelik hasta karyolası.",
    features: [
      "4 motorlu sistem",
      "ABS korkuluk tasarımı",
      "Elektrikli pozisyon ayarları",
    ],
  },
  {
    id: "brk-4002",
    number: "05",
    name: "BRK 4002",
    subtitle: "4 Motorlu ABS Hasta Yatağı",
    image: "/images/azka-4002.jpg",
    label: "BRK 4002",
    description:
      "Elektrikli hareket sistemi ve ABS korkuluklarıyla profesyonel bakım ihtiyaçlarına uygun model.",
    features: [
      "4 motorlu sistem",
      "ABS korkuluk ve başlık",
      "Elektrikli pozisyon ayarları",
    ],
  },
  {
    id: "3-motorlu",
    number: "06",
    name: "3 Motorlu",
    subtitle: "Hasta Yatağı",
    image: "/images/hasta-yatagi-3-motor.jpg",
    label: "3 MOTORLU MODEL",
    description:
      "Üç motorlu hareket sistemiyle hasta konforunu ve bakım kolaylığını destekleyen yatak modeli.",
    features: [
      "3 motorlu sistem",
      "Elektrikli pozisyon ayarları",
      "Kumandalı kullanım",
    ],
  },
  {
    id: "4-motorlu",
    number: "07",
    name: "4 Motorlu",
    subtitle: "Hasta Yatağı",
    image: "/images/hasta-yatagi-4-motor.jpg",
    label: "4 MOTORLU MODEL",
    description:
      "Gelişmiş elektrikli hareket seçenekleriyle farklı bakım ihtiyaçlarına uyum sağlayan hasta yatağı.",
    features: [
      "4 motorlu sistem",
      "Çok yönlü pozisyon ayarları",
      "Kumandalı kullanım",
    ],
  },
  {
    id: "boru-tipi-havali-yatak",
    number: "08",
    name: "Boru Tipi",
    subtitle: "Havalı Yatak",
    image: "/images/boru-tipi-havali-yatak.webp",
    label: "BORU TİPİ MODEL",
    description:
      "Silindirik hava hücreleriyle basınç dağılımını destekleyen, uzun süreli yatış ihtiyaçlarına yönelik havalı yatak.",
    features: [
      "Silindirik hava hücresi tasarımı",
      "Dönüşümlü basınç sistemi",
      "Elektrikli pompa ile kullanım",
    ],
  },
  {
    id: "baklava-tipi-havali-yatak",
    number: "09",
    name: "Baklava Tipi",
    subtitle: "Havalı Yatak",
    image: "/images/baklava-tipi-havali-yatak.webp",
    label: "BAKLAVA TİPİ MODEL",
    description:
      "Birbirine bağlı hava odacıklarıyla basınç dağılımını destekleyen, pratik ve konforlu havalı yatak çözümü.",
    features: [
      "Baklava desenli hava hücreleri",
      "Dönüşümlü basınç sistemi",
      "Hafif ve pratik kullanım",
    ],
  },
];

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
            : "translate-y-12 opacity-0"
        }
      `}
      style={{
        transitionDuration: reduceMotion
          ? "0ms"
          : "950ms",
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
   LARGE IMAGE PREVIEW
========================================= */

function ImagePreview({ product, onClose }) {
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    previousFocusRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      if (
        previousFocusRef.current instanceof HTMLElement
      ) {
        previousFocusRef.current.focus({
          preventScroll: true,
        });
      }
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} büyük ürün görseli`}
      onClick={onClose}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[#061B38]/90
        px-3 py-5
        backdrop-blur-md
        sm:px-8 sm:py-8
      "
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative flex w-full
          max-w-[1100px]
          flex-col overflow-hidden
          rounded-[22px]
          border border-[#A9C5E4]/35
          bg-[#FAF7F1]
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
        "
      >
        {/* CLOSE BUTTON */}
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Büyük görseli kapat"
          className="
            absolute right-3 top-3 z-20
            flex h-11 w-11
            items-center justify-center
            rounded-full
            bg-[#082B60]
            text-white
            shadow-lg
            transition-all duration-300
            hover:scale-105
            hover:bg-[#32649A]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#32649A]
          "
        >
          <X size={21} strokeWidth={1.8} />
        </button>

        {/* LARGE IMAGE */}
        <div
          className="
            relative h-[min(68svh,680px)]
            w-full bg-[#EDF1F5]
          "
        >
          <Image
            src={product.image}
            alt={`${product.name} ${product.subtitle}`}
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-contain p-2 sm:p-4"
          />
        </div>

        {/* PRODUCT NAME */}
        <div
          className="
            border-t border-[#32649A]/15
            px-5 py-4
            text-center
          "
        >
          <h3
            className="
              font-[family-name:var(--font-cormorant)]
              text-[clamp(1.65rem,4vw,2.5rem)]
              font-semibold
              leading-tight
              text-[#082B60]
            "
          >
            {product.name}

            <span className="ml-2 italic text-[#32649A]">
              {product.subtitle}
            </span>
          </h3>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* =========================================
   PRODUCT CARD
========================================= */

function ProductCard({ product, onPreview }) {
  const message = encodeURIComponent(
    `Merhaba, ${product.name} ${product.subtitle} hakkında kiralama ve satış bilgisi almak istiyorum.`
  );

  const whatsappUrl =
    `https://wa.me/${PHONE_NUMBER}?text=${message}`;

  return (
    <article
      className="
        group relative flex h-full flex-col
        rounded-[22px]
        bg-gradient-to-br
        from-[#082B60]/85
        via-[#A9C5E4]/65
        to-[#32649A]/85
        p-[1.5px]
        transition-shadow duration-500
        hover:shadow-[0_15px_40px_rgba(8,43,96,0.12)]
      "
    >
      <div
        className="
          relative flex h-full flex-col
          overflow-hidden
          rounded-[20px]
          bg-[#FAF7F1]
        "
      >
        {/* PRODUCT IMAGE */}
        <div
          className="
            relative aspect-[16/9]
            shrink-0 overflow-hidden
            bg-[#EDF1F5]
          "
        >
          <Image
            src={product.image}
            alt={`${product.name} ${product.subtitle}`}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            className="
              object-cover
              transition-transform duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
            "
          />

          {/* MODEL LABEL */}
          <span
            className="
              pointer-events-none
              absolute left-3 top-3 z-10
              rounded-full
              border border-white/30
              bg-[#082B60]/90
              px-3 py-1.5
              text-[9px] font-semibold
              tracking-[0.12em]
              text-[#F3EBDD]
              backdrop-blur-md
            "
          >
            {product.label}
          </span>

          {/* PRODUCT NUMBER */}
          <span
            className="
              pointer-events-none
              absolute right-3 top-3 z-10
              flex h-8 w-8
              items-center justify-center
              rounded-full
              border border-[#082B60]/15
              bg-white/90
              font-[family-name:var(--font-cormorant)]
              text-[17px] text-[#082B60]
            "
          >
            {product.number}
          </span>

          {/* ZOOM BUTTON */}
          <button
            type="button"
            onClick={() => onPreview(product)}
            aria-label={`${product.name} görselini büyüt`}
            title="Görseli büyüt"
            className="
              absolute bottom-3 right-3 z-20
              flex h-11 w-11
              cursor-zoom-in
              items-center justify-center
              rounded-full
              border border-white/50
              bg-[#082B60]/90
              text-white
              shadow-[0_5px_18px_rgba(8,43,96,0.25)]
              backdrop-blur-md
              transition-all duration-300
              hover:scale-110
              hover:bg-[#32649A]
              hover:shadow-[0_8px_25px_rgba(8,43,96,0.3)]
              active:scale-95
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#32649A]
            "
          >
            <ZoomIn size={20} strokeWidth={1.8} />
          </button>
        </div>

        {/* CARD CONTENT */}
        <div
          className="
            relative flex flex-1 flex-col
            items-center
            px-4 pb-4 pt-4
            text-center
            sm:px-5
          "
        >
          {/* TITLE */}
          <div
            className="
              flex min-h-[65px]
              w-full flex-col
              items-center justify-center
            "
          >
            <h3
              className="
                font-[family-name:var(--font-cormorant)]
                text-[clamp(1.7rem,2.2vw,2.25rem)]
                font-semibold
                leading-[1.02]
                tracking-[-0.025em]
                text-[#082B60]
              "
            >
              {product.name}

              <span
                className="
                  mt-0.5 block italic
                  text-[#32649A]
                "
              >
                {product.subtitle}
              </span>
            </h3>
          </div>

          {/* DIVIDER */}
          <span
            className="
              my-2.5 h-px w-10
              shrink-0
              bg-[#32649A]/55
              transition-all duration-500
              group-hover:w-16
            "
          />

          {/* DESCRIPTION */}
          <p
            className="
              max-w-[360px]
              text-[12px]
              leading-[1.55]
              text-[#52647A]
              sm:text-[13px]
            "
          >
            {product.description}
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-3 flex w-full
              flex-col gap-1.5
              border-t border-[#32649A]/15
              pt-3
            "
          >
            {product.features.map((feature) => (
              <div
                key={feature}
                className="
                  flex items-center
                  justify-center gap-2
                  text-[11px]
                  leading-[1.4]
                  text-[#52647A]
                  sm:text-[12px]
                "
              >
                <Check
                  size={14}
                  strokeWidth={2}
                  className="shrink-0 text-[#32649A]"
                />

                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* FLEXIBLE SPACE */}
          <div className="min-h-2 flex-1" />

          {/* WHATSAPP BUTTON */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${product.name} için bilgi ve fiyat alın`}
            className="
              mt-3 flex min-h-[44px]
              w-full shrink-0
              items-center justify-center
              gap-2.5
              rounded-full
              bg-[#082B60]
              px-4 py-3
              text-[11px] font-semibold
              text-[#F3EBDD]
              transition-all duration-300
              hover:bg-[#32649A]
              hover:shadow-[0_8px_20px_rgba(8,43,96,0.16)]
              focus-visible:outline
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-[#32649A]
            "
          >
            <MessageCircle size={16} strokeWidth={1.7} />

            <span>Bilgi ve Fiyat Al</span>

            <ArrowUpRight size={15} strokeWidth={1.6} />
          </a>
        </div>

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
    </article>
  );
}

/* =========================================
   PRODUCTS SECTION
========================================= */

export default function Products() {
  const [previewProduct, setPreviewProduct] = useState(null);

  const closePreview = useCallback(() => {
    setPreviewProduct(null);
  }, []);

  return (
    <>
      <section
        id="urunler"
        className="
          relative isolate
          min-h-[calc(100svh-100px)]
          overflow-hidden
          bg-[#F3EBDD]
          text-[#082B60]
        "
      >
        {/* BACKGROUND DECORATION */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute -right-48 top-12
            h-[550px] w-[550px]
            rounded-full
            border border-[#32649A]/10
          "
        />

        <div
          className="
            relative mx-auto
            w-full max-w-[1600px]
            px-5 py-10
            sm:px-8 sm:py-12
            lg:px-16 lg:py-10
            xl:px-20
          "
        >
          {/* SECTION HEADING */}
          <RevealOnScroll
            className="mx-auto mb-7 max-w-[1200px]"
          >
            <div className="text-center">
              <div
                className="
                  mb-3 flex items-center
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
                  Ürünlerimiz
                </span>

                <span className="h-px w-9 bg-[#32649A]" />
              </div>

              <h2
                className="
                  font-[family-name:var(--font-cormorant)]
                  text-[clamp(2.3rem,8vw,4.6rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.035em]
                  lg:whitespace-nowrap
                  lg:text-[clamp(3.2rem,4.8vw,5.1rem)]
                "
              >
                <span className="block lg:inline">
                  Konfor ve Güvenliği
                </span>

                <span
                  className="
                    block italic text-[#32649A]
                    lg:ml-[0.2em]
                    lg:inline
                  "
                >
                  Bir Arada.
                </span>
              </h2>

              <p
                className="
                  mx-auto mt-3 max-w-[650px]
                  text-[12px]
                  leading-[1.6]
                  text-[#52647A]
                  sm:text-[13px]
                  lg:text-[14px]
                "
              >
                Bakım ihtiyaçlarınıza uygun hasta yatağı ve
                havalı yatak modellerimizi inceleyin. Kiralama
                ve satış seçenekleri hakkında bizimle iletişime
                geçin.
              </p>
            </div>
          </RevealOnScroll>

          {/* PRODUCT GRID */}
          <div
            className="
              grid grid-cols-1
              items-stretch gap-5
              md:grid-cols-2
              lg:grid-cols-3
              lg:gap-4
              xl:gap-5
            "
          >
            {products.map((product, index) => (
              <RevealOnScroll
                key={product.id}
                delay={(index % 3) * 120}
                className="h-full"
              >
                <ProductCard
                  product={product}
                  onPreview={setPreviewProduct}
                />
              </RevealOnScroll>
            ))}
          </div>

          {/* BOTTOM NOTE */}
          <RevealOnScroll className="mt-7 text-center">
            <p
              className="
                text-[12px]
                leading-[1.6]
                text-[#52647A]
              "
            >
              Size uygun hasta yatağı veya havalı yatak
              modelini belirlemek için bizimle iletişime
              geçebilirsiniz.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* LARGE IMAGE MODAL */}
      {previewProduct && (
        <ImagePreview
          product={previewProduct}
          onClose={closePreview}
        />
      )}
    </>
  );
}
