
import Image from "next/image";
import {
  Truck,
  Headset,
  CalendarDays,
  Wrench,
  MapPin,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Ücretsiz Teslimat",
    description: "ve Kurulum",
  },
  {
    icon: Headset,
    title: "7/24 Teknik",
    description: "Destek",
  },
  {
    icon: CalendarDays,
    title: "Kiralama",
    description: "Seçenekleri",
  },
  {
    icon: Wrench,
    title: "Satış ve Yedek",
    description: "Parça Desteği",
  },
];

export default function Hero() {
  return (
    <section
      id="anasayfa"
      aria-labelledby="hero-title"
      className="
        relative isolate flex
        h-[calc(100svh-100px)]
        min-h-0 flex-col
        overflow-hidden bg-[#F3EBDD]
      "
    >
      {/* BACKGROUND IMAGE */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/images/hero-bed.jpg"
          alt=""
          fill
          priority
          quality={90}
          sizes="100vw"
          className="
            object-cover
            object-[62%_center]
            md:object-[60%_center]
            lg:object-center
          "
        />
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          bg-gradient-to-r
          from-[#F3EBDD]/95
          via-[#F3EBDD]/80
          to-[#F3EBDD]/40
          lg:hidden
        "
      />

      {/* DESKTOP OVERLAY */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          hidden lg:block
          bg-gradient-to-r
          from-[#F3EBDD]/95
          via-[#F3EBDD]/60
          to-transparent
        "
      />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10
          mx-auto flex min-h-0 w-full
          max-w-[1600px] flex-1
          items-start
          px-5 pt-5 pb-2
          sm:px-8 sm:pt-8
          lg:items-center lg:px-16 lg:py-4
          xl:px-20
        "
      >
        <div className="hero-reveal w-full max-w-[680px]">

          {/* EYEBROW */}
          <div className="mb-3 flex items-center gap-3 sm:mb-5 lg:mb-7">
            <span className="h-px w-7 shrink-0 bg-[#32649A] sm:w-10" />

            <span
              className="
                text-[9px] font-bold uppercase
                tracking-[0.14em] text-[#32649A]
                sm:text-[11px]
              "
            >
              Ankara Hasta Yatağı Kiralama
            </span>
          </div>

          {/* TITLE */}
          <h1
            id="hero-title"
            className="
              font-[family-name:var(--font-cormorant)]
              text-[clamp(2.4rem,8vw,4.1rem)]
              font-medium leading-[0.91]
              tracking-[-0.045em]
              text-[#082B60]
              lg:text-[clamp(3.8rem,5.2vw,6rem)]
            "
          >
            Sevdikleriniz
            <br />
            İçin Daha
            <br />
            <span className="italic text-[#32649A]">
              Konforlu
            </span>
            <br />
            Bir Bakım.
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4 max-w-[490px]
              text-[12px] leading-[1.6]
              text-[#415873]
              sm:mt-6 sm:text-[14px]
              lg:mt-8 lg:text-[16px]
              lg:leading-[1.85]
            "
          >
            Ankara genelinde hasta yatağı kiralama ve satış
            hizmetleri. İhtiyacınıza uygun hasta yatakları,
            profesyonel teslimat, kurulum ve teknik destek
            çözümleriyle yanınızdayız.
          </p>

          {/* LOCATION */}
          <div
            className="
              mt-4 flex flex-wrap items-center
              gap-x-2 gap-y-1
              text-[10px] font-medium
              text-[#52647A]
              sm:mt-6 sm:text-[12px]
              lg:mt-8
            "
          >
            <MapPin size={14} strokeWidth={1.6} />

            <span>Çankaya, Ankara</span>

            <span className="mx-1 h-1 w-1 rounded-full bg-[#32649A]" />

            <span>Ankara Geneli Hizmet</span>
          </div>
        </div>
      </div>

      {/* BOTTOM FEATURES */}
      <div
        className="
          relative z-10 shrink-0
          border-t border-[#082B60]/10
          bg-[#F3EBDD]/88
          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto grid max-w-[1600px]
            grid-cols-2
            gap-x-2 gap-y-2
            px-3 py-2.5
            sm:px-8 sm:py-4
            md:grid-cols-4 md:gap-5
            lg:px-16 lg:py-5
            xl:px-20
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group flex min-w-0 items-center gap-2 sm:gap-3"
              >
                {/* ICON */}
                <div
                  className="
                    flex h-8 w-8 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-[#082B60]/15
                    text-[#082B60]
                    transition-all duration-500
                    group-hover:border-[#082B60]
                    group-hover:bg-[#082B60]
                    group-hover:text-white
                    sm:h-11 sm:w-11
                  "
                >
                  <Icon size={16} strokeWidth={1.5} />
                </div>

                {/* TEXT */}
                <div className="min-w-0">
                  <h3
                    className="
                      text-[10px] font-semibold
                      leading-[1.25]
                      text-[#082B60]
                      sm:text-[13px]
                      lg:text-[14px]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p
                    className="
                      mt-0.5 text-[9px]
                      leading-[1.25]
                      text-[#52647A]
                      sm:text-[11px]
                      lg:text-[12px]
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
