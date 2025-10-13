/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { createContext, useContext, useRef, useEffect } from "react";
import ReactLenis from "lenis/react";
import { usePathname } from "next/navigation";
type Props = { children: React.ReactNode };
const LenisContext = createContext<any>(null);
export const useLenis = () => useContext(LenisContext);
export default function LenisWrapper({ children }: Props) {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);
  return (
    <LenisContext.Provider value={lenisRef}>
      <ReactLenis
        root
        ref={lenisRef}
        options={{
          duration: 1.8,
          easing: (t) => 1 - Math.pow(1 - t, 5),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.2,
          autoResize: true,
        }}
      >
        {children}
      </ReactLenis>
    </LenisContext.Provider>
  );
}
