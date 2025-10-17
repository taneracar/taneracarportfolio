"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";
import { useContextProvider } from "./ContextProvider";
import ScrollReveal from "./ScrollReveal";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const SvgPath = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);
  const { dispatchCursor } = useContextProvider();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top+=400",
        end: "bottom bottom",
        scrub: true,
        onLeave: () => dispatchCursor(false),
        onEnterBack: () => dispatchCursor(true),
      },
    });
    tl.to("#rect", {
      ease: "none",
      motionPath: {
        path: "#track",
        align: "#track",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom bottom",
        end: "+=2000",
        scrub: true,
        pin: true,
      },
    });
    tl2
      .to("#rect", {
        scale: 100,
        rotate: 180,
        duration: 2,
        ease: "sine.out",
        fill: "#ee4d2f",
      })
      .to(
        ".will-fade",
        {
          opacity: 0,
          duration: 1,
          ease: "sine.out",
        },
        "<"
      )
      .fromTo(
        worksRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          ease: "sine.out",
        }
      )
      .to(".h2", {
        y: "-25vh",
        ease: "sine.out",
      });
  });
  return (
    <>
      <div
        ref={containerRef}
        className="w-full h-[300vh] -mt-[20vw] relative -z-2"
      >
        <div className="will-fade absolute right-[3vw] mt-[30vw] w-[35vw]">
          {" "}
          <ScrollReveal
            baseOpacity={0}
            enableBlur={false}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-white text-[5vw]"
          >
            ABOUT ME
          </ScrollReveal>
        </div>
        <div className="will-fade absolute left-[3vw] mt-[40vw] w-[35vw]">
          {" "}
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-white text-[2vw]"
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
        <div className="will-fade absolute right-[3vw] mt-[65vw] w-[35vw]">
          {" "}
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-white text-[2vw]"
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
        <div className="will-fade absolute left-[3vw] mt-[90vw] w-[35vw]">
          {" "}
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-white text-[2vw]"
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
        <div className="will-fade absolute right-[3vw] mt-[115vw] w-[35vw]">
          {" "}
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="text-white text-[2vw]"
          >
            When does a man die? When he is hit by a bullet? No! When he suffers
            a disease? No! When he ate a soup made out of a poisonous mushroom?
            No! A man dies when he is forgotten!
          </ScrollReveal>
        </div>
        <svg
          id="trackSvg"
          viewBox="0 0 300 1200"
          aria-hidden="false"
          role="img"
          className="w-full h-full"
        >
          <path
            id="track"
            d="M 150 40
       C 40 200, 260 400, 150 560
       S 40 920, 150 1160"
            fill="none"
            stroke="#fff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.85"
          />

          <circle
            cx="0"
            cy="0"
            r="0"
            fill="none"
            id="debugPoint"
            className="display:none"
          />

          <g id="rect" fill="#fff">
            <svg
              width="1.5vw"
              height="1.5vw"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z" />
            </svg>
          </g>
        </svg>
      </div>

      <div ref={worksRef}>
        <div className="fixed inset-0 z-40 bg-transparent flex flex-col items-center justify-center">
          <h2 className="h2 text-[22vw]">WORKS</h2>
        </div>
      </div>
    </>
  );
};

export default SvgPath;
