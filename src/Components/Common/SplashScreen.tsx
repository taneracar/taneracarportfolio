"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SplashScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const words = [
    "Selam",
    "Hello",
    "Hola",
    "Bonjour",
    "Ciao",
    "こんにちは",
    "안녕하세요",
    "Merhaba",
    "Привет",
    "Olá",
  ];

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    // kelimeleri sırayla göster
    tl.to(textRef.current, {
      opacity: 1,
      duration: 0.3,
    });

    words.forEach((word) => {
      tl.to(
        textRef.current,
        {
          textContent: word,
          duration: 0.2,
          onStart: () => {
            if (textRef.current) textRef.current.textContent = word;
          },
        },
        "+=0.01"
      );
    });

    // animasyon bitince yukarı kayma efekti
    tl.to(
      containerRef.current,
      {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut",
      },
      "+=0.3"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="text-white text-[clamp(2rem,6vw,8rem)] font-bold tracking-wide opacity-0"
      >
        Selam
      </div>
    </div>
  );
};

export default SplashScreen;
