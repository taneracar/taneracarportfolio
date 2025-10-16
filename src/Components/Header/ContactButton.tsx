"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

type props = {
  text?: string;
  link?: string;
  image?: string;
};
export default function ContactButton({ text, link, image }: props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    if (isHovered) {
      tl.to(containerRef.current, {
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          container2Ref.current,
          {
            y: "-10vw",
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          container2Ref.current,
          {
            duration: 0.3,
            rotate: 0,
            ease: "power2.out",
          },
          "<0.1"
        );
    } else {
      tl.to(containerRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
        .to(
          container2Ref.current,
          {
            y: "10vw",
            duration: 0.4,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          container2Ref.current,
          {
            duration: 0.3,
            rotate: 90,
            ease: "power2.out",
          },
          "<0.1"
        );
    }
  }, [isHovered]);
  return (
    <div className="w-full flex items-center justify-end">
      <Link
        href={link || "#"}
        className="relative cursor-pointer overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className={`h-[2.5vw] bg-transparent flex items-center justify-center gap-[1vw] text-[#fff] ${
            image === undefined ? "w-[7.5vw] border rounded-3xl" : "w-[10vw]"
          }`}
        >
          {image && (
            <Image
              src="/images/avatar.png"
              alt="contact"
              width={20}
              height={20}
              priority
            />
          )}
          <p className="uppercase text-[1vw]">{text}</p>
        </div>
        <div
          ref={container2Ref}
          className={`h-[2.5vw] bg-[#fff] flex items-center justify-center gap-[1vw] text-[#000] absolute top-[10vw] left-0 ${
            image === undefined ? "w-[7.5vw] border rounded-3xl" : "w-[10vw]"
          }`}
        >
          {" "}
          {image && (
            <Image
              src="/images/avatar.png"
              alt="contact"
              width={20}
              height={20}
              priority
            />
          )}
          <p className="uppercase text-[1vw]">{text}</p>
        </div>
      </Link>
    </div>
  );
}
