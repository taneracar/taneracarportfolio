"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import React from "react";
import TextPressure from "./TextPressure";
import ContactButton from "./ContactButton";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import { useGSAP } from "@gsap/react";
const items = [
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Contact", href: "/contact" },
];
const DesktopMenu = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const leftContentRef = useRef<HTMLAnchorElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const middleContentRef = useRef<HTMLDivElement>(null);
  const middleItemRefs = useRef<HTMLDivElement[]>([]);
  const router = useTransitionRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useGSAP(() => {
    if (hideNavbar) {
      const tl = gsap.timeline();
      tl.to(leftContentRef.current, {
        x: -500,
        duration: 0.5,
        ease: "power2.in",
      })
        .to(
          middleItemRefs.current,
          {
            y: -100,
            stagger: 0.1,
            ease: "power2.in",
            duration: 0.5,
          },
          "<"
        )
        .to(
          rightContentRef.current,
          {
            x: 500,
            duration: 0.5,
            ease: "power2.in",
          },
          "<"
        );
    } else {
      const tl = gsap.timeline();
      tl.to(leftContentRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          middleItemRefs.current,
          {
            y: 0,
            stagger: 0.1,
            ease: "power2.out",
            duration: 0.5,
          },
          "<"
        )
        .to(
          rightContentRef.current,
          {
            x: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        );
    }
  }, [hideNavbar]);
  return (
    <nav className="hidden md:flex h-[5vw] justify-between items-center w-full">
      <Link
        ref={leftContentRef}
        onClick={(e) => {
          e.preventDefault();
          router.push("/", {
            onTransitionReady: pageAnimation,
          });
        }}
        href="/"
        className="md:w-[12vw]"
      >
        <TextPressure text="TANER ACAR" />
      </Link>
      <div ref={middleContentRef} className="flex gap-[1vw]">
        {items.map((item, i) => (
          <div
            key={item.href}
            ref={(el) => {
              if (el) middleItemRefs.current[i] = el;
            }}
            onClick={(e) => {
              e.preventDefault();
              router.push(item.href, {
                onTransitionReady: pageAnimation,
              });
            }}
          >
            <ContactButton text={item.label} link={item.href} />
          </div>
        ))}
      </div>
      <div ref={rightContentRef} className="w-[12vw]">
        <ContactButton image="/images/avatar.png" text={"contact me"} />
      </div>
    </nav>
  );
};
const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0,
        scale: 0,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
        rotate: "15deg",
      },
      {
        transform: "translateY(0)",
        rotate: "0deg",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};
export default DesktopMenu;
