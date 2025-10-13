"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ContactButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const tl = gsap.timeline();
    if (isHovered) {
      tl.to(containerRef.current, {
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      tl.to(containerRef.current, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isHovered]);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full flex items-center justify-end"
    >
      <div ref={containerRef} className="w-[7vw] h-[2.5vw] bg-[#fff]"></div>
    </div>
  );
}
