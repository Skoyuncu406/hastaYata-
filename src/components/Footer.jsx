
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  MapPin,
  MessageCircle,
  HeartPulse,
} from "lucide-react";

const PHONE = "+905302091997";
const DISPLAY_PHONE = "0530 209 19 97";

const ADDRESS =
  "Mutlukent, Doğan Taşdelen Bulvarı No:53 D:K 06260 Çankaya/ANKARA";

const whatsappLink = `https://wa.me/905302091997?text=${encodeURIComponent(
  "Merhaba, hasta yatağı kiralama ve satış hizmetleriniz hakkında bilgi almak istiyorum."
)}`;

const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

const navigation = [
  { label: "Anasayfa", href: "#anasayfa" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Ürünler", href: "#urunler" },
  { label: "İletişim", href: "#iletisim" },
];

const services = [
  "Hasta Yatağı Kiralama",
  "Hasta Yatağı Satışı",
  "Ücretsiz Teslimat ve Kurulum",
  "Teknik Destek ve Yedek Parça",
];

export default function Footer() {
  return (
    <footer
      className="
        relative isolate flex
        h-[calc(100svh-100px)]
        min-h-0 flex-col
        overflow-hidden
        bg-[#082B60]
        text-[#F3EBDD]
      "
    >
      {/* DECORATIVE BACKGROUND */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-32 -top-32
          h-[420px] w-[420px]
          rounded-full
          border border-white/5
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute -right-16 -top-16
          h-[300px] w-[300px]
          rounded-full
          border border-white/5
        "
      />

      <div
        className="
          relative mx-auto flex min-h-0
          w-full max-w-[1600px]
          flex-1 flex-col
          px-4 py-4
          sm:px-8 sm:py-6
          lg:px-16 lg:py-7
          xl:px-20
        "
      >
        {/* =====================================
            TOP SECTION
        ===================================== */}
        <div
          className="
            grid shrink-0 gap-4
            border-b border-white/15
            pb-4
            sm:gap-5 sm:pb-6
            lg:grid-cols-[1fr_auto]
            lg:items-end
            lg:gap-10
          "
        >
          <div>
            {/* EYEBROW */}
            <div className="mb-2 flex items-center gap-3 lg:mb-3">
              <span className="h-px w-7 bg-[#A9C5E4]" />

              <span
                className="
                  text-[9px] font-semibold
                  uppercase tracking-[0.18em]
                  text-[#A9C5E4]
                  lg:text-[10px]
                "
              >
                Ankara Hasta Yatağı
              </span>
            </div>

            {/* MAIN SLOGAN */}
            <h2
              className="
                font-[family-name:var(--font-cormorant)]
                text-[clamp(2rem,5vw,4.8rem)]
                font-medium
                leading-[0.88]
                tracking-[-0.045em]
                text-[#F3EBDD]
              "
            >
              Sağlığınız için
              <br />
              Doğru Yatak{" "}
              <span className="italic text-[#A9C5E4]">
                Doğru Destek.
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3 max-w-[650px]
                text-[10px] leading-[1.5]
                text-[#D0DBE9]/80
                sm:text-[12px]
                lg:mt-4 lg:text-[13px]
                lg:leading-[1.7]
              "
            >
              Hasta yatağı kiralama, satış ve teknik destek
              hizmetlerimizle Ankara genelinde bakım
              sürecinizi kolaylaştırıyoruz.
            </p>
          </div>

          {/* CTA BUTTON */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex h-10 w-fit
              items-center justify-center
              gap-3 rounded-full
              bg-[#F3EBDD]
              px-5
              text-[11px] font-bold
              text-[#082B60]
              transition-all duration-500
              hover:-translate-y-1
              hover:bg-white
              sm:h-12 sm:px-6
              sm:text-[12px]
              lg:h-[52px]
            "
          >
            Hemen Teklif Al

            <ArrowUpRight
              size={17}
              strokeWidth={1.6}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>

        {/* =====================================
            MAIN FOOTER CONTENT
        ===================================== */}
        <div
          className="
            grid min-h-0 flex-1
            grid-cols-2
            content-center
            gap-x-5 gap-y-5
            py-4
            sm:gap-x-8 sm:gap-y-7
            lg:grid-cols-[1.3fr_0.7fr_1fr_1.2fr]
            lg:items-start
            lg:gap-7
            lg:py-7
          "
        >
          {/* BRAND */}
          <div className="min-w-0">
            <a
              href="#anasayfa"
              aria-label="Ankara Hasta Yatağı Anasayfa"
              className="group inline-flex items-center gap-2 sm:gap-3"
            >
              {/* LOGO */}
              <div
                className="
                  relative h-10 w-10
                  shrink-0 overflow-hidden
                  rounded-full bg-[#F3EBDD]
                  transition-transform duration-500
                  group-hover:scale-105
                  sm:h-14 sm:w-14
                  lg:h-[62px] lg:w-[62px]
                "
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="Ankara Hasta Yatağı Logosu"
                  fill
                  sizes="(max-width: 640px) 40px, 62px"
                  className="object-contain"
                />
              </div>

              {/* BRAND NAME */}
              <div className="min-w-0">
                <span
                  className="
                    block
                    font-[family-name:var(--font-cormorant)]
                    text-[17px] font-semibold
                    leading-[0.95]
                    tracking-[-0.025em]
                    text-[#F3EBDD]
                    sm:text-[23px]
                    lg:text-[25px]
                  "
                >
                  Ankara
                  <span className="block">
                    Hasta Yatağı
                  </span>
                </span>

                <span
                  className="
                    mt-1 block
                    text-[6px] font-semibold
                    uppercase tracking-[0.07em]
                    text-[#A9C5E4]
                    sm:text-[8px]
                  "
                >
                  Kiralama & Satış Merkezi
                </span>
              </div>
            </a>

            <p
              className="
                mt-3 max-w-[290px]
                text-[10px] leading-[1.5]
                text-[#D0DBE9]/75
                sm:mt-4 sm:text-[12px]
                sm:leading-[1.7]
              "
            >
              Evde bakım ihtiyaçlarınız için güvenilir
              hasta yatağı çözümleri. Ankara'nın her
              yerine ücretsiz teslimat ve kurulum.
            </p>

            <div
              className="
                mt-3 hidden items-center
                gap-2 text-[10px]
                text-[#A9C5E4]
                sm:inline-flex
              "
            >
              <HeartPulse size={15} strokeWidth={1.5} />
              Sağlığınız ve konforunuz için
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="min-w-0">
            <h3
              className="
                mb-3 text-[10px] font-bold
                uppercase tracking-[0.1em]
                text-[#F3EBDD]
                sm:mb-5 sm:text-[11px]
              "
            >
              Hızlı Bağlantılar
            </h3>

            <nav
              aria-label="Footer menüsü"
              className="flex flex-col items-start gap-2 sm:gap-3"
            >
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    group inline-flex items-center
                    gap-1 text-[10px]
                    text-[#D0DBE9]/75
                    transition-colors duration-300
                    hover:text-[#F3EBDD]
                    sm:text-[12px]
                  "
                >
                  <ArrowRight
                    size={12}
                    strokeWidth={1.5}
                    className="
                      hidden
                      -translate-x-1 opacity-0
                      transition-all duration-300
                      group-hover:translate-x-0
                      group-hover:opacity-100
                      lg:block
                    "
                  />

                  <span className="lg:-ml-4 lg:transition-transform lg:duration-300 lg:group-hover:translate-x-4">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* SERVICES */}
          <div className="min-w-0">
            <h3
              className="
                mb-3 text-[10px] font-bold
                uppercase tracking-[0.1em]
                text-[#F3EBDD]
                sm:mb-5 sm:text-[11px]
              "
            >
              Hizmetlerimiz
            </h3>

            <div className="flex flex-col items-start gap-2 sm:gap-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#hizmetler"
                  className="
                    text-[10px] leading-[1.4]
                    text-[#D0DBE9]/75
                    transition-colors duration-300
                    hover:text-[#F3EBDD]
                    sm:text-[12px]
                    sm:leading-[1.6]
                  "
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="min-w-0">
            <h3
              className="
                mb-3 text-[10px] font-bold
                uppercase tracking-[0.1em]
                text-[#F3EBDD]
                sm:mb-5 sm:text-[11px]
              "
            >
              İletişim
            </h3>

            <div className="flex flex-col gap-3 sm:gap-4">
              {/* PHONE */}
              <a
                href={`tel:${PHONE}`}
                className="group flex items-start gap-2"
              >
                <Phone
                  size={15}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#A9C5E4]"
                />

                <span className="text-[11px] text-[#D0DBE9]/85 transition-colors duration-300 group-hover:text-white sm:text-[12px]">
                  {DISPLAY_PHONE}
                </span>
              </a>

              {/* ADDRESS */}
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2"
              >
                <MapPin
                  size={15}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#A9C5E4]"
                />

                <span className="text-[10px] leading-[1.5] text-[#D0DBE9]/75 transition-colors duration-300 group-hover:text-white sm:text-[12px]">
                  {ADDRESS}
                </span>
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2"
              >
                <MessageCircle
                  size={15}
                  strokeWidth={1.5}
                  className="shrink-0 text-[#A9C5E4]"
                />

                <span className="text-[10px] text-[#D0DBE9]/75 transition-colors duration-300 group-hover:text-white sm:text-[12px]">
                  WhatsApp ile İletişim
                </span>

                <ArrowUpRight
                  size={13}
                  className="hidden text-[#A9C5E4] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
                />
              </a>
            </div>
          </div>
        </div>

        {/* =====================================
            BOTTOM BAR
        ===================================== */}
        <div
          className="
            flex shrink-0 flex-col
            gap-1.5 border-t border-white/15
            pt-3 text-[9px]
            text-[#D0DBE9]/60
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-4
            sm:pt-4 sm:text-[11px]
          "
        >
<p>
  © 2026 Ankara Hasta Yatağı. Tüm hakları saklıdır.
</p>

          <p>
            Çankaya / Ankara
            <span className="mx-2 text-white/25">•</span>
            Kiralama & Satış Merkezi
          </p>
        </div>
      </div>
    </footer>
  );
}
