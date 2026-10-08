
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const WHATSAPP = "905318280850";

const products = [
  {
    id: "01",
    name: "2 Motorlu Hasta Yatağı",
    subtitle: "Evde bakım için pratik çözüm",
    image: "/images/hasta-yatagi-2-motor.jpg",
    description: "Kiralama & Satış",
  },
  {
    id: "02",
    name: "3 Motorlu Hasta Yatağı",
    subtitle: "Gelişmiş pozisyon seçenekleri",
    image: "/images/hasta-yatagi-3-motor.jpg",
    description: "Kiralama & Satış",
  },
  {
    id: "03",
    name: "4 Motorlu Hasta Yatağı",
    subtitle: "Çok yönlü bakım konforu",
    image: "/images/hasta-yatagi-4-motor.jpg",
    description: "Kiralama & Satış",
  },
];

function getWhatsappLink(productName) {
  const message = `Merhaba, ${productName} hakkında bilgi ve fiyat teklifi almak istiyorum.`;

  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export default function Products() {
  return (
    <section
      id="urunler"
      aria-labelledby="products-title"
      className="
        relative flex
        h-[calc(100svh-100px)]
        min-h-0 flex-col
        overflow-hidden
        bg-[#F3EBDD]
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
        {/* SECTION HEADER */}
        <div className="shrink-0">
          <div className="mb-3 flex items-center gap-3 lg:mb-5">
            <span className="h-px w-8 bg-[#32649A]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#32649A] lg:text-[11px]">
              Ürünlerimiz
            </span>
          </div>

          <h2
            id="products-title"
            className="
              font-[family-name:var(--font-cormorant)]
              text-[clamp(2rem,5vw,5.2rem)]
              font-medium leading-[1]
              tracking-[-0.045em]
              text-[#082B60]
            "
          >
            Bakım Sürecinize Uygun{" "}
            <span className="italic text-[#32649A]">
              Çözümler.
            </span>
          </h2>

          <p
            className="
              mt-2 max-w-[680px]
              text-[11px] leading-[1.6]
              text-[#52647A]
              sm:mt-3 sm:text-[13px]
              lg:text-[14px]
            "
          >
            İhtiyacınıza uygun hasta yatağı modellerini
            inceleyin. Kiralama ve satış seçenekleri hakkında
            bilgi almak için bizimle iletişime geçin.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div
          className="
            mt-4 grid min-h-0 flex-1
            grid-cols-3 gap-2
            sm:mt-6 sm:gap-4
            lg:mt-8 lg:gap-8
          "
        >
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex min-h-0 min-w-0 flex-col"
            >
              {/* IMAGE CONTAINER */}
              <div
                className="
                  relative min-h-0 flex-1
                  overflow-hidden
                  bg-[#E9E4DA]
                "
              >
                {/* PRODUCT IMAGE */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 33vw, 30vw"
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-[900ms]
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.09]
                  "
                />

                {/* SOFT IMAGE OVERLAY */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    bg-[#082B60]/0
                    transition-colors duration-700
                    group-hover:bg-[#082B60]/10
                  "
                />

                {/* PRODUCT NUMBER */}
                <span
                  className="
                    absolute left-3 top-3 z-10
                    text-[10px] font-semibold
                    text-[#082B60]
                    drop-shadow-sm
                    sm:left-5 sm:top-5
                    sm:text-[12px]
                  "
                >
                  {product.id}
                </span>

                {/* HOVER ARROW */}
                <div
                  className="
                    absolute bottom-3 right-3 z-10
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    bg-[#FAF7F1]/95
                    text-[#082B60]
                    opacity-0
                    translate-y-3
                    transition-all duration-500
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    sm:bottom-5 sm:right-5
                    sm:h-11 sm:w-11
                  "
                >
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* PRODUCT INFORMATION */}
              <div
                className="
                  shrink-0
                  border-b border-[#082B60]/20
                  py-3
                  sm:py-4
                  lg:py-5
                "
              >
                <p
                  className="
                    hidden text-[10px]
                    font-semibold uppercase
                    tracking-[0.12em]
                    text-[#32649A]
                    sm:block
                  "
                >
                  {product.description}
                </p>

                <h3
                  className="
                    font-[family-name:var(--font-cormorant)]
                    text-[clamp(0.9rem,2.4vw,2rem)]
                    font-semibold
                    leading-[1.05]
                    text-[#082B60]
                    transition-colors duration-500
                    group-hover:text-[#32649A]
                    sm:mt-2
                  "
                >
                  {product.name}
                </h3>

                <p className="mt-1 hidden text-[12px] text-[#52647A] sm:block">
                  {product.subtitle}
                </p>

                <a
                  href={getWhatsappLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${product.name} hakkında bilgi al`}
                  className="
                    mt-2 inline-flex items-center
                    gap-1 text-[10px]
                    font-semibold text-[#082B60]
                    transition-colors duration-300
                    hover:text-[#32649A]
                    sm:mt-4 sm:gap-2
                    sm:text-[12px]
                  "
                >
                  Bilgi Al

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <div
          className="
            mt-3 flex shrink-0
            items-center justify-between
            gap-3
            sm:mt-5
          "
        >
          <p className="text-[10px] text-[#52647A] sm:text-[12px]">
            Ankara genelinde kiralama ve satış hizmeti
          </p>

          <a
            href={getWhatsappLink("hasta yatağı modelleriniz")}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex shrink-0
              items-center gap-1
              text-[10px] font-semibold
              text-[#082B60]
              transition-colors duration-300
              hover:text-[#32649A]
              sm:gap-2 sm:text-[12px]
            "
          >
            Teklif Al
            <ArrowRight size={15} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
