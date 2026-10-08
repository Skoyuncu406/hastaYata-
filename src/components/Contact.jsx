
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock3,
  ArrowUpRight,
  Navigation,
  Truck,
  Headphones,
} from "lucide-react";

const PHONE = "+905318280850";
const DISPLAY_PHONE = "0531 828 08 50";

const ADDRESS =
  "Mutlukent, Doğan Taşdelen Bulvarı No:53 D:K 06260 Çankaya/ANKARA";

const whatsappLink = `https://wa.me/905318280850?text=${encodeURIComponent(
  "Merhaba, hasta yatağı kiralama ve satış hizmetleriniz hakkında bilgi almak istiyorum."
)}`;

const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ADDRESS
)}`;

export default function Contact() {
  return (
    <section
      id="iletisim"
      aria-labelledby="contact-title"
      className="relative flex min-h-[calc(100svh-100px)] flex-col overflow-hidden bg-[#FAF7F1]"
    >
      {/* DECORATIVE BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-[#082B60]/5"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-[350px] w-[350px] rounded-full border border-[#082B60]/5"
      />

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12 xl:px-20">
        {/* SECTION HEADER */}
        <div className="shrink-0">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#32649A]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#32649A] lg:text-[11px]">
              İletişim
            </span>
          </div>

          <h2
            id="contact-title"
            className="font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5.5vw,5.8rem)] font-medium leading-[0.98] tracking-[-0.045em] text-[#082B60]"
          >
            Size Bir Telefon
            <br />
            <span className="italic text-[#32649A]">
              Kadar Yakınız.
            </span>
          </h2>

          <p className="mt-4 max-w-[600px] text-[12px] leading-[1.8] text-[#52647A] sm:text-[14px]">
            Hasta yatağı kiralama, satış ve teknik destek
            ihtiyaçlarınız için bizimle iletişime geçin.
            İhtiyacınıza uygun çözümü birlikte belirleyelim.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="mt-8 grid flex-1 gap-8 lg:mt-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between">
            <div className="divide-y divide-[#082B60]/15 border-t border-[#082B60]/15">
              {/* PHONE */}
              <a
                href={`tel:${PHONE}`}
                className="group flex items-center gap-4 py-5 sm:gap-6 sm:py-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#082B60]/15 text-[#082B60] transition-all duration-500 group-hover:border-[#082B60] group-hover:bg-[#082B60] group-hover:text-white">
                  <Phone size={19} strokeWidth={1.5} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#32649A]">
                    Telefon
                  </p>

                  <p className="mt-1 font-[family-name:var(--font-cormorant)] text-[clamp(1.6rem,3vw,2.6rem)] font-semibold leading-none text-[#082B60]">
                    {DISPLAY_PHONE}
                  </p>
                </div>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#32649A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* WHATSAPP */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5 sm:gap-6 sm:py-7"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#082B60]/15 text-[#082B60] transition-all duration-500 group-hover:border-[#082B60] group-hover:bg-[#082B60] group-hover:text-white">
                  <MessageCircle size={20} strokeWidth={1.5} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#32649A]">
                    WhatsApp
                  </p>

                  <p className="mt-1 font-[family-name:var(--font-cormorant)] text-[clamp(1.5rem,3vw,2.4rem)] font-semibold leading-none text-[#082B60]">
                    Hızlı İletişim
                  </p>
                </div>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.4}
                  className="shrink-0 text-[#32649A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* LOCATION */}
              <div className="flex items-start gap-4 py-5 sm:gap-6 sm:py-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#082B60]/15 text-[#082B60]">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#32649A]">
                    Adresimiz
                  </p>

                  <p className="mt-2 max-w-[440px] text-[13px] leading-[1.7] text-[#082B60] sm:text-[14px]">
                    {ADDRESS}
                  </p>
                </div>
              </div>
            </div>

            {/* SERVICE NOTES */}
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#082B60]/15 pt-5">
              <span className="inline-flex items-center gap-2 text-[11px] text-[#52647A]">
                <Truck size={16} strokeWidth={1.5} />
                Ücretsiz Teslimat ve Kurulum
              </span>

              <span className="inline-flex items-center gap-2 text-[11px] text-[#52647A]">
                <Headphones size={16} strokeWidth={1.5} />
                7/24 Teknik Destek
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-between bg-[#F3EBDD] p-6 sm:p-8 lg:p-10">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#32649A]">
                  Hizmet Bölgemiz
                </span>

                <MapPin
                  size={21}
                  strokeWidth={1.4}
                  className="text-[#32649A]"
                />
              </div>

              <h3 className="mt-7 font-[family-name:var(--font-cormorant)] text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-[#082B60]">
                Ankara'nın
                <br />
                <span className="italic text-[#32649A]">
                  Her Yerine.
                </span>
              </h3>

              <p className="mt-5 max-w-[380px] text-[12px] leading-[1.8] text-[#52647A] sm:text-[14px]">
                Çankaya merkezli hizmetimizle Ankara
                genelinde hasta yatağı kiralama, satış,
                teslimat ve kurulum desteği sunuyoruz.
              </p>

              <div className="mt-8 flex items-start gap-3 border-t border-[#082B60]/15 pt-6">
                <Clock3
                  size={19}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#32649A]"
                />

                <div>
                  <p className="text-[12px] font-semibold text-[#082B60]">
                    İletişim ve Destek
                  </p>

                  <p className="mt-1 text-[12px] leading-[1.6] text-[#52647A]">
                    Teknik destek için 7/24 iletişim.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 flex items-center justify-between gap-3 border-t border-[#082B60]/20 pt-5 text-[#082B60] transition-colors duration-300 hover:text-[#32649A]"
            >
              <span className="inline-flex items-center gap-3 text-[13px] font-semibold">
                <Navigation size={18} strokeWidth={1.5} />
                Yol Tarifi Al
              </span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#082B60]/15 pt-5 text-[10px] text-[#52647A] sm:text-[12px]">
          <span>Ankara Hasta Yatağı — Kiralama & Satış Merkezi</span>

          <span>Çankaya / Ankara</span>
        </div>
      </div>
    </section>
  );
}
