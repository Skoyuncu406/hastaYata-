
"use client";

import { useEffect, useRef, useState } from "react";
import {
  BedDouble,
  ShoppingBag,
  Truck,
  Headset,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BedDouble,
    title: "Hasta Yatağı Kiralama",
    description:
      "Kısa veya uzun süreli bakım ihtiyaçlarınız için konforlu, güvenilir ve kullanımı kolay hasta yatağı kiralama çözümleri sunuyoruz.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Hasta Yatağı Satışı",
    description:
      "Farklı bakım ihtiyaçlarına uygun motorlu hasta yatağı modellerimizle sevdikleriniz için güvenli ve konforlu bir bakım ortamı oluşturuyoruz.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Ücretsiz Teslimat ve Kurulum",
    description:
      "Ankara genelinde hasta yatağınızı adresinize ücretsiz ulaştırıyor, kurulumunu gerçekleştiriyor ve kullanıma hazır şekilde teslim ediyoruz.",
  },
  {
    number: "04",
    icon: Headset,
    title: "Teknik Destek ve Yedek Parça",
    description:
      "Hasta yatağınızın kullanımı boyunca teknik destek, bakım ve yedek parça ihtiyaçlarınızda yanınızda olmaya devam ediyoruz.",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="hizmetler"
      ref={sectionRef}
      className="
        relative isolate
        min-h-[calc(100svh-100px)]
        overflow-hidden
        bg-[#FAF7F1]
        text-[#082B60]
      "
    >
      {/* DECORATIVE BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-40 -top-40
          h-[500px] w-[500px]
          rounded-full
          border border-[#082B60]/[0.045]
        "
      />

      <div
        className="
          relative mx-auto flex
          min-h-[calc(100svh-100px)]
          w-full max-w-[1600px]
          flex-col justify-center
          px-5 py-12
          sm:px-8 sm:py-14
          lg:px-16 lg:py-10
          xl:px-20
        "
      >
        {/* SECTION HEADER */}
        <div
          className={`
            mb-8 text-center
            transition-all duration-1000
            ease-[cubic-bezier(0.22,1,0.36,1)]
            sm:mb-10
            lg:mb-9
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }
          `}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#32649A]" />

            <span
              className="
                text-[10px] font-semibold
                uppercase tracking-[0.2em]
                text-[#32649A]
              "
            >
              Hizmetlerimiz
            </span>

            <span className="h-px w-8 bg-[#32649A]" />
          </div>

          <h2
            className="
              font-[family-name:var(--font-cormorant)]
              text-[clamp(2.25rem,5vw,5rem)]
              font-medium
              leading-[0.95]
              tracking-[-0.035em]
            "
          >
            Her İhtiyacınızda{" "}
            <span className="italic text-[#32649A]">
              Yanınızdayız.
            </span>
          </h2>

          <p
            className="
              mx-auto mt-4
              max-w-[700px]
              text-[12px] leading-[1.8]
              text-[#52647A]
              sm:text-[14px]
              lg:text-[15px]
            "
          >
            Hasta yatağı kiralama ve satıştan teslimat,
            kurulum ve teknik desteğe kadar bakım
            sürecinizin her aşamasında yanınızdayız.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div
          className="
            grid grid-cols-1
            gap-4
            md:grid-cols-2
            md:gap-5
            xl:gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                style={{
                  transitionDelay: isVisible
                    ? `${index * 140 + 120}ms`
                    : "0ms",
                }}
                className={`
                  group relative
                  min-h-[240px]
                  rounded-[24px]
                  p-[1.5px]
                  transition-all duration-1000
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:-translate-y-1
                  hover:shadow-[0_20px_55px_rgba(8,43,96,0.11)]
                  sm:min-h-[255px]
                  lg:min-h-[245px]
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-14 opacity-0"
                  }
                `}
              >
                {/* PREMIUM GRADIENT FRAME */}
                <div
                  className="
                    absolute inset-0
                    rounded-[24px]
                    bg-gradient-to-br
                    from-[#082B60]/80
                    via-[#A9C5E4]/55
                    to-[#32649A]/75
                    transition-all duration-500
                    group-hover:from-[#082B60]
                    group-hover:via-[#C9DDF1]
                    group-hover:to-[#32649A]
                  "
                />

                {/* CARD INNER */}
                <div
                  className="
                    relative flex h-full
                    min-h-[237px]
                    flex-col items-center
                    justify-center
                    overflow-hidden
                    rounded-[22.5px]
                    bg-[#FAF7F1]
                    px-6 py-8
                    text-center
                    transition-colors duration-500
                    group-hover:bg-white
                    sm:min-h-[252px]
                    sm:px-8
                    lg:min-h-[242px]
                  "
                >
                  {/* INNER BORDER */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute inset-[9px]
                      rounded-[17px]
                      border border-[#32649A]/15
                      transition-colors duration-500
                      group-hover:border-[#32649A]/30
                    "
                  />

                  {/* TOP CORNER DETAILS */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute left-5 top-5
                      h-4 w-4
                      border-l border-t
                      border-[#32649A]/40
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute right-5 top-5
                      h-4 w-4
                      border-r border-t
                      border-[#32649A]/40
                    "
                  />

                  {/* SERVICE NUMBER */}
                  <span
                    className="
                      absolute right-7 top-6
                      font-[family-name:var(--font-cormorant)]
                      text-[21px]
                      text-[#32649A]/45
                    "
                  >
                    {service.number}
                  </span>

                  {/* ICON */}
                  <div
                    className="
                      relative mb-5
                      flex h-[60px] w-[60px]
                      shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#082B60]
                      text-[#F3EBDD]
                      shadow-[0_8px_25px_rgba(8,43,96,0.15)]
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:bg-[#32649A]
                      group-hover:shadow-[0_12px_30px_rgba(50,100,154,0.25)]
                    "
                  >
                    <Icon
                      size={27}
                      strokeWidth={1.4}
                    />
                  </div>

                  {/* TITLE */}
                  <h3
                    className="
                      relative
                      font-[family-name:var(--font-cormorant)]
                      text-[clamp(1.8rem,2.6vw,2.5rem)]
                      font-semibold
                      leading-[1.05]
                      tracking-[-0.025em]
                      text-[#082B60]
                      transition-colors duration-300
                      group-hover:text-[#32649A]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* DIVIDER */}
                  <div
                    className="
                      relative my-4
                      h-px w-12
                      bg-[#32649A]/45
                      transition-all duration-500
                      group-hover:w-20
                      group-hover:bg-[#32649A]
                    "
                  />

                  {/* DESCRIPTION */}
                  <p
                    className="
                      relative
                      max-w-[430px]
                      text-[12px]
                      leading-[1.75]
                      text-[#52647A]
                      sm:text-[13px]
                      lg:text-[14px]
                    "
                  >
                    {service.description}
                  </p>

                  {/* BOTTOM CORNER DETAILS */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute bottom-5 left-5
                      h-4 w-4
                      border-b border-l
                      border-[#32649A]/40
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute bottom-5 right-5
                      h-4 w-4
                      border-b border-r
                      border-[#32649A]/40
                    "
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
