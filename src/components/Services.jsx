
import {
  BedDouble,
  ShoppingBag,
  Truck,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BedDouble,
    title: "Hasta Yatağı Kiralama",
    description:
      "Kısa ve uzun dönem ihtiyaçlarınıza uygun hasta yatağı kiralama seçenekleriyle evde bakım sürecinizi kolaylaştırıyoruz.",
  },
  {
    number: "02",
    icon: ShoppingBag,
    title: "Hasta Yatağı Satışı",
    description:
      "Farklı bakım ihtiyaçlarına yönelik hasta yatağı modelleriyle konforlu ve güvenilir çözümler sunuyoruz.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Ücretsiz Teslimat ve Kurulum",
    description:
      "Ankara genelinde hasta yataklarının adresinize teslimatını ve profesyonel kurulumunu gerçekleştiriyoruz.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Teknik Destek ve Yedek Parça",
    description:
      "Hasta yataklarının kullanım sürecinde teknik destek, bakım ve yedek parça ihtiyaçlarınız için yanınızdayız.",
  },
];

export default function Services() {
  return (
    <section
      id="hizmetler"
      aria-labelledby="services-title"
      className="
        relative isolate flex
        h-[calc(100svh-100px)]
        min-h-0 flex-col
        overflow-hidden
        bg-[#FAF7F1]
      "
    >
      <div
        className="
          mx-auto flex min-h-0 w-full
          max-w-[1600px] flex-1 flex-col
          px-4 py-4
          sm:px-8 sm:py-6
          lg:px-16 lg:py-9
          xl:px-20
        "
      >
        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <div className="shrink-0">

          {/* EYEBROW */}
          <div className="mb-3 flex items-center gap-3 lg:mb-5">
            <span className="h-px w-8 shrink-0 bg-[#32649A]" />

            <span
              className="
                text-[10px] font-bold
                uppercase tracking-[0.18em]
                text-[#32649A]
                lg:text-[11px]
              "
            >
              Hizmetlerimiz
            </span>
          </div>

          {/* TITLE */}
          <h2
            id="services-title"
            className="
              whitespace-nowrap
              font-[family-name:var(--font-cormorant)]
              text-[clamp(1.15rem,5.3vw,2.5rem)]
              font-medium
              leading-[1.05]
              tracking-[-0.045em]
              text-[#082B60]
              sm:text-[clamp(2rem,4.5vw,3.5rem)]
              lg:text-[clamp(3.5rem,5vw,5.5rem)]
            "
          >
            Her İhtiyacınızda{" "}
            <span className="italic text-[#32649A]">
              Yanınızdayız.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3 max-w-[780px]
              text-[11px] leading-[1.55]
              text-[#52647A]
              sm:mt-4 sm:text-[13px]
              lg:mt-5 lg:text-[15px]
              lg:leading-[1.8]
            "
          >
            Hasta yatağı kiralama ve satıştan teslimat,
            kurulum ve teknik desteğe kadar bakım süreciniz
            için ihtiyaç duyduğunuz hizmetleri bir araya
            getiriyoruz.
          </p>
        </div>

        {/* =====================================
            SERVICES LIST
        ===================================== */}

        <div
          className="
            mt-4 flex min-h-0 flex-1 flex-col
            border-t border-[#082B60]/15
            sm:mt-6
            lg:mt-9
          "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="
                  group grid min-h-0 flex-1
                  grid-cols-[20px_32px_minmax(0,1fr)]
                  items-center
                  gap-x-2 gap-y-1
                  border-b border-[#082B60]/15
                  px-1 py-1.5
                  transition-colors duration-500
                  hover:bg-[#F3EBDD]/65

                  sm:grid-cols-[30px_44px_minmax(0,1fr)]
                  sm:gap-x-4 sm:px-3

                  lg:grid-cols-[45px_54px_minmax(0,1fr)_minmax(0,1fr)_24px]
                  lg:gap-x-5 lg:px-4
                "
              >
                {/* NUMBER */}
                <span
                  className="
                    text-[10px] font-semibold
                    tracking-[0.04em]
                    text-[#32649A]
                    sm:text-[12px]
                  "
                >
                  {service.number}
                </span>

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
                    lg:h-12 lg:w-12
                  "
                >
                  <Icon
                    size={17}
                    strokeWidth={1.5}
                  />
                </div>

                {/* SERVICE TITLE */}
                <h3
                  className="
                    min-w-0
                    font-[family-name:var(--font-cormorant)]
                    text-[clamp(1.15rem,4vw,1.75rem)]
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.025em]
                    text-[#082B60]
                    transition-colors duration-500
                    group-hover:text-[#32649A]

                    lg:text-[clamp(1.6rem,2.3vw,2.4rem)]
                  "
                >
                  {service.title}
                </h3>

                {/* SERVICE DESCRIPTION */}
                <p
                  className="
                    col-start-3
                    max-w-[520px]
                    origin-left
                    text-[10px]
                    leading-[1.35]
                    text-[#52647A]
                    transition-[transform,color]
                    duration-500 ease-out
                    group-hover:scale-[1.035]
                    group-hover:text-[#082B60]

                    sm:text-[12px]
                    sm:leading-[1.5]

                    lg:col-start-4
                    lg:text-[13px]
                    lg:leading-[1.7]
                  "
                >
                  {service.description}
                </p>

                {/* DECORATIVE ARROW */}
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.3}
                  aria-hidden="true"
                  className="
                    hidden
                    text-[#32649A]/40
                    transition-all duration-500
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-[#082B60]
                    lg:block
                  "
                />
              </div>
            );
          })}
        </div>

        {/* =====================================
            BOTTOM NOTE
        ===================================== */}

        <div
          className="
            mt-3 flex shrink-0
            flex-wrap items-center
            gap-x-2 gap-y-1
            text-[10px] text-[#52647A]
            sm:mt-4 sm:text-[12px]
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#32649A]" />

          <span>Ankara genelinde hizmet</span>

          <span className="text-[#082B60]/25">/</span>

          <span>Kiralama, satış ve teknik destek</span>
        </div>
      </div>
    </section>
  );
}
