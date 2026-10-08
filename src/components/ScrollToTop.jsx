
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero bölümünün sonuna yaklaşıldığında butonu göster.
      const hero = document.getElementById("anasayfa");

      const threshold = hero
        ? hero.offsetHeight * 0.6
        : window.innerHeight * 0.6;

      setVisible(window.scrollY > threshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Sayfanın en üstüne çık"
      title="Yukarı Çık"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`
        fixed bottom-6 right-5 z-40
        flex h-12 w-12
        items-center justify-center
        rounded-full
        border border-[#082B60]/15
        bg-[#082B60]
        text-[#F3EBDD]
        shadow-[0_8px_28px_rgba(8,43,96,0.20)]
        transition-all duration-500
        hover:-translate-y-1
        hover:bg-[#32649A]
        hover:shadow-[0_12px_32px_rgba(8,43,96,0.25)]
        sm:bottom-8 sm:right-8

        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      <ArrowUp size={21} strokeWidth={1.6} />
    </button>
  );
}
