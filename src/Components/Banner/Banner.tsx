"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Banner = () => {
  const conainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(conainerRef.current, {
      x: "100vw",
      duration: 1.5,
      ease: "power2.out",
      delay: 3.2,
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

    return () => {
      tl.kill();
    };
  });
  return (
    <div className="w-full px-[6vw] md:px-[3vw] md:pt-[5vw] relative h-[90vh] md:h-[100vh]">
      <h1 className="text-[10vw] pt-[67vh] leading-[1.2] md:text-[6.5vw] md:w-[65%] md:pt-[5vw] md:leading-[1.1] capitalize relative z-15">
        Turning ideas into interactive realities.
      </h1>
      <Image
        src="/images/taneracar.jpg"
        alt="Taner Acar"
        priority
        width={1080}
        height={1920}
        className="absolute max-md:top-0 md:bottom-0 right-0 -z-10 h-[90vh] md:h-full w-[100vw] md:w-[33vw] object-cover"
      />
      <div ref={conainerRef} className="w-fit h-fit relative -z-15">
        <Image
          src="/images/car.png"
          alt="Taner Acar"
          priority
          width={1920}
          height={1080}
          className="object-contain w-[20vw] h-[10vw] -ml-[3vw]"
        />
      </div>
      <div className="absolute h-full w-[33vw] right-0 bottom-0 -z-10 bg-gradient-to-t from-black/100 via-black/20 to-transparent"></div>
    </div>
  );
};

export default Banner;
