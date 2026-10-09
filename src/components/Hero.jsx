
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Truck,
  Headset,
  CalendarDays,
  BedDouble,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Ücretsiz Teslimat",
    description: "Kurulum dahil",
  },
  {
    icon: Headset,
    title: "7/24 Teknik Destek",
    description: "Her zaman yanınızda",
  },
  {
    icon: CalendarDays,
    title: "Kiralama Seçenekleri",
    description: "İhtiyacınıza uygun",
  },
  {
    icon: BedDouble,
    title: "Satış ve Yedek Parça",
    description: "Güvenilir çözümler",
  },
];

export default function Hero() {
  const locationRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const elements = [
      { element: locationRef.current, delay: 150 },
      { element: headingRef.current, delay: 350 },
      { element: descriptionRef.current, delay: 650 },
    ];

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const animations = elements
      .filter(({ element }) => element)
      .map(({ element, delay }) => {
        return element.animate(
          [
            {
              opacity: 0,
              transform: "translate3d(-90px, 0, 0)",
            },
            {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
            },
          ],
          {
            duration: 1200,
            delay,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "both",
          }
        );
      });

    return () => {
      animations.forEach((animation) => {
        animation.cancel();
      });
    };
  }, []);

  return (
    <section
      id="anasayfa"
      className="
        relative isolate flex
        h-[calc(100svh-100px)]
        min-h-0 flex-col
        overflow-hidden
        bg-[#082B60]
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-bed.jpg"
          alt="Konforlu hasta yatağı ve evde bakım ortamı"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-[58%_center]
            lg:object-center
          "
        />
      </div>

      {/* BACKGROUND OVERLAY */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#041D42]/95
          via-[#082B60]/75
          to-[#082B60]/25
          max-lg:bg-gradient-to-b
          max-lg:from-[#041D42]/80
          max-lg:via-[#082B60]/65
          max-lg:to-[#041D42]/75
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative mx-auto flex
          w-full max-w-[1600px]
          min-h-0 flex-1
          items-center
          px-5
          sm:px-8
          lg:px-16
          xl:px-20
        "
      >
        <div
          className="
            w-full max-w-[850px]
            py-4
            sm:py-6
            lg:py-8
          "
        >
          {/* LOCATION */}
          <div
            ref={locationRef}
            className="
              mb-5 flex items-center gap-2
              text-[#D8E5F3]
              sm:mb-6
            "
          >
            <MapPin
              size={15}
              strokeWidth={1.5}
              className="shrink-0 text-[#A9C5E4]"
            />

            <span
              className="
                text-[10px] font-semibold
                uppercase tracking-[0.2em]
                sm:text-[11px]
              "
            >
              Çankaya / Ankara
            </span>

            <span className="ml-2 h-px w-9 bg-[#A9C5E4]/70" />
          </div>

          {/* MAIN HEADING */}
          <h1
            ref={headingRef}
            className="
              font-[family-name:var(--font-cormorant)]
              text-[clamp(3.35rem,12.2vw,5.3rem)]
              font-medium
              leading-[0.91]
              tracking-[-0.045em]
              text-[#F3EBDD]
              sm:text-[clamp(4.5rem,9vw,6.5rem)]
              lg:text-[clamp(5.2rem,7.2vw,8.2rem)]
            "
          >
            <span className="block">
              Sevdikleriniz
            </span>

            <span className="block">
              İçin Daha
            </span>

            <span className="block">
              <span className="italic text-[#A9C5E4]">
                Konforlu
              </span>
            </span>

            <span className="block">
              Bir Bakım.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            ref={descriptionRef}
            className="
              mt-5 max-w-[520px]
              text-[12px] leading-[1.75]
              text-[#E0E8F2]/90
              sm:mt-7
              sm:text-[14px]
              lg:mt-8
              lg:text-[15px]
              lg:leading-[1.9]
            "
          >
            Hasta yatağı kiralama ve satış hizmetlerimizle
            sevdiklerinizin bakım sürecini daha konforlu,
            güvenli ve kolay hale getiriyoruz.
          </p>
        </div>
      </div>

      {/* FEATURE STRIP */}
      <div
        className="
          relative z-10 shrink-0
          border-t border-white/20
          bg-[#082B60]/80
          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto grid
            max-w-[1600px]
            grid-cols-2
            gap-x-3 gap-y-3
            px-5 py-3
            sm:px-8 sm:py-4
            lg:grid-cols-4
            lg:gap-6
            lg:px-16
            lg:py-5
            xl:px-20
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  flex min-w-0
                  items-center gap-2
                  sm:gap-3
                "
              >
                <div
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#A9C5E4]/35
                    text-[#A9C5E4]
                    sm:h-10 sm:w-10
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-[9px] font-semibold
                      leading-[1.3]
                      text-[#F3EBDD]
                      sm:text-[11px]
                      lg:text-[12px]
                    "
                  >
                    {feature.title}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[8px]
                      leading-[1.3]
                      text-[#D0DBE9]/70
                      sm:text-[10px]
                    "
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
