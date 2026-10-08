import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Ankara Hasta Yatağı Kiralama ve Satış Merkezi",
  description:
    "Ankara genelinde hasta yatağı kiralama ve satış hizmetleri. Ücretsiz teslimat ve kurulum, 7/24 teknik destek. İletişim: 0531 828 08 50.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
