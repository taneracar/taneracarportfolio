"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";
import SplitText from "./SplitText";
import { useContextProvider } from "../Common/ContextProvider";

const Banner = () => {
  const conainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const { showSplash } = useContextProvider();
  const delay = showSplash ? 3.5 : 0;
  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay,
        ease: "power2.out",
      }
    );
    const tl = gsap.timeline();
    tl.from(conainerRef.current, {
      x: "100vw",
      duration: 1.5,
      delay,
      ease: "power2.out",
    })
      .to(
        conainerRef.current,
        {
          rotate: -10,
          duration: 0.1,
          ease: "power2.out",
        },
        "<0.5"
      )
      .to(
        conainerRef.current,
        {
          rotate: -5,
          duration: 0.1,
          ease: "power2.out",
        },
        "<0.1"
      )
      .to(
        conainerRef.current,
        {
          rotate: -10,
          duration: 0.1,
          ease: "power2.out",
        },
        "<0.1"
      )
      .to(
        conainerRef.current,
        {
          rotate: -5,
          duration: 0.1,
          ease: "power2.out",
        },
        "<0.1"
      )
      .to(
        conainerRef.current,
        {
          rotate: -10,
          duration: 0.1,
          ease: "power2.out",
        },
        "<0.1"
      )
      .to(
        conainerRef.current,
        {
          rotate: -5,
          duration: 0.1,
          ease: "power2.out",
        },
        "<0.1"
      )
      .to(
        conainerRef.current,
        {
          rotate: 0,
          duration: 0.1,
          ease: "power2.out",
        },
        "<0.1"
      );
  });
  return (
    <div className="w-full px-[6vw] md:px-[3vw] md:pt-[5vw] relative h-[90vh] md:h-[100vh]">
      <SplitText
        text="Turning Ideas Into Interactive Realities."
        className="text-[10vw] pt-[60vh] leading-[1.2] md:text-[6.5vw] md:w-[65%] md:pt-[5vw] md:leading-[1.1] relative z-15"
        delay={100}
        duration={0.6}
        tag="h1"
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        showSplash={showSplash}
      />
      <Image
        ref={imageRef}
        src="/images/taneracar.jpg"
        alt="Taner Acar"
        priority
        width={1080}
        height={1920}
        className="absolute max-md:top-0 md:bottom-0 right-0 -z-10 h-[90vh] md:h-full w-[100vw] md:w-[33vw] object-cover"
      />
      <div
        ref={conainerRef}
        className="w-fit h-fit relative md:-z-15 md:mt-[5vw]"
      >
        <Image
          src="/images/car.png"
          alt="Taner Acar"
          priority
          width={1920}
          height={1080}
          className="object-contain w-[40vw] h-[20vw] md:w-[20vw] md:h-[10vw] -ml-[6vw] md:-ml-[3vw]"
        />
      </div>
      <div className="absolute h-full w-[100vw] md:w-[33vw] right-0 bottom-0 -z-10 bg-gradient-to-t from-black/100 via-black/20 to-transparent"></div>
    </div>
  );
};

export default Banner;
